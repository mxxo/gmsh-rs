//! Inspection and manipulation of Gmsh geometry models.
//!
//! There are two CAD engines you can use:
//! 1. The built-in Gmsh geometry kernel.
//! 2. The `OpenCASCADE` geometry kernel.
//!
//! The relevant [Gmsh manual section](http://gmsh.info/doc/texinfo/gmsh.html#Geometry-module)
//! explains the differences between the two kernels:
//!
//! > The built-in CAD kernel provides a simple CAD engine based on a bottom-up boundary representation approach:
//! > you need to first define points, then curves, then surfaces and finally volumes.
//!
//! > The `OpenCASCADE` kernel allows one to build models in the same bottom-up manner, or by using a
//! > constructive solid geometry approach where solids are defined first.
//! > Boolean operations can then be performed to modify them.
//!
//! Either kernel should suffice for most projects.
//!
//! `OpenCASCADE` is a widely-used CAD engine, so it's a good default choice. You can directly define larger shapes without making their smaller components first.
//! You also get access to powerful Boolean geometry operations for making complex shapes.
//!
//! The only way to get a model is through a `Gmsh` context object.
//! ```
//! # use gmsh::{Gmsh, GmshResult};
//! # fn main() -> GmshResult<()> {
//! let gmsh = Gmsh::initialize()?;
//! let mut geom = gmsh.new_native_model("model")?;
//! # Ok(())
//! # }
//! ```
//!
//! The model is only valid for the lifetime of `Gmsh`.
//! ```compile_fail
//! # use gmsh::{Gmsh, GmshResult, model::Kernel};
//! # fn main() -> GmshResult<()> {
//! let gmsh = Gmsh::initialize()?;
//! let mut geom = gmsh.new_occ_model("model")?;
//!
//! // -- do some stuff with geom
//!
//! // drop the Gmsh context
//! std::mem::drop(gmsh);
//! // try to use the model afterwards
//! geom.add_point(0., 0., 0.)?; // won't compile
//! # Ok(())
//! # }
//! ```
//!
//! ## Create, modify and delete shapes
//! You can define points, lines, 2D surfaces and 3D volumes.
//! After defining a shape, you'll get a geometry tag to identify[^unique] it.
//! ```
//! # use gmsh::{Gmsh, GmshResult};
//! # use gmsh::model::{Kernel, PointTag, CurveTag};
//! # fn main() -> GmshResult<()> {
//! # let gmsh = Gmsh::initialize()?;
//! // make a model using the default geometry kernel and call it `model`.
//! let mut geom = gmsh.new_native_model("model")?;
//!
//! // make a point
//! let p1: PointTag = geom.add_point(0., 0., 0.)?;
//! // and another
//! let p2: PointTag = geom.add_point(1., 1., 0.)?;
//!
//! // create a line from the two points
//! let l1: CurveTag = geom.add_line(p1, p2)?;
//! # Ok(())
//! # }
//! ```
//!
//! There are two ways to make geometries in Gmsh: top-down and bottom-up.
//!
//! ### Top-down geometry with the `OpenCASCADE` kernel
//! With the `OpenCASCADE` kernel, you can directly specify the shape you want to make.
//! ```
//! # use gmsh::{Gmsh, GmshResult};
//! # use gmsh::model::{Kernel, PointTag, CurveTag};
//! # fn main() -> GmshResult<()> {
//! # let gmsh = Gmsh::initialize()?;
//! let mut geom = gmsh.new_occ_model("model")?;
//!
//! // make a box starting at (0, 0, 0) with side extents (1, 1, 1)
//! let b = geom.add_box(0., 0., 0., 1., 1., 1.)?;
//!
//! // make a sphere centered at (10, 10, 10) with radius 2.5
//! let s = geom.add_sphere(10., 10., 10., 2.5)?;
//!
//! // make a torus centered at (-1, -2, -3) with major radius 5 and minor radius 2
//! let t = geom.add_torus(-1., -2., -3., 5., 2.)?;
//!
//! # Ok(())
//! # }
//! ```
//!
//! ### Bottom-up geometries with either the `OpenCASCADE` or built-in kernel
//!
//! ## Geometry tags
//! Geometry tags are used for:
//! * accessing shape information,
//! * making more complex shapes (like a line from two points),
//! * removing a shape from the model
//!
//! The different geometry tags are:
//! * `PointTag`
//! * `CurveTag`
//! * `WireTag`
//! * `SurfaceTag`
//! * `ShellTag`
//! * `VolumeTag`
//!
//! Since tags can only be created from successful geometry operations, you can't
//! use raw integers for tags.
//! ```compile_fail
//! # use gmsh::{Gmsh, GmshResult};
//! # use gmsh::model::{Kernel, PointTag, CurveTag};
//! # fn main() -> GmshResult<()> {
//! # let gmsh = Gmsh::initialize()?;
//! # let geom = gmsh.new_native_model("model")?;
//! // try to make a point from a raw integer
//! let p1 = PointTag(1); // won't compile
//! // try to make a line from two raw integers
//! let l1 = CurveTag(1, 2); // won't compile
//! # Ok(())
//! # }
//! ```
//!
//! This design differs from other Gmsh API
//! implementations. For example, using the `C++` API, the following example will
//! compile but cause a runtime error.
//! ```cpp
//! #include "gmsh.h"
//! int main() {
//!     gmsh::initialize();
//!     gmsh::model::geo::addLine(1, 2); // (!)
//!     gmsh::finalize();
//! }
//! ```
//! The Rust API avoids such bugs for a single model by only making tags available through API functions.
//! However, the Rust API has a similar issue if there are two or more models.
//! Since two models can have identical point tag values, tags from one can be used on the other.
//!
//! It's your responsibility to make sure tags are used with the right model.
//!
//! If you're lucky, using the wrong tags will cause a runtime error.
//! ```
//! # use gmsh::{Gmsh, GmshResult};
//! # use gmsh::model::{Kernel};
//! # use std::result::Result;
//! # fn main() -> GmshResult<()> {
//! #  let gmsh = Gmsh::initialize()?;
//! let mut geom_a = gmsh.new_occ_model("jimbo")?;
//! let mut geom_b = gmsh.new_native_model("aircraft-carrier")?;
//!
//! let p_a = geom_a.add_point(0., 0., 0.)?;
//!
//! let p_b1 = geom_b.add_point(0., 1., 0.)?;
//! let p_b2 = geom_b.add_point(1., 1., 0.)?;
//!
//! // points from different models can have the same value
//! assert!(p_a == p_b1, "Point tags are different!");
//!
//! // Bad! Using tags from one model with another.
//! let line = geom_a.add_line(p_b1, p_b2);
//! assert!(line.is_err());
//! #  Ok(())
//! # }
//! ```
//!
//! If you're unlucky, the tags will exist in both models, causing a silent logic error in your program.
//! In the API's eyes, you've given it valid tags, and it's going to go ahead and do what you asked for.
//! ```
//! # use gmsh::{Gmsh, GmshResult};
//! # use gmsh::model::{Kernel};
//! # use std::result::Result;
//! # fn main() -> GmshResult<()> {
//! #  let gmsh = Gmsh::initialize()?;
//! let mut geom_a = gmsh.new_occ_model("jimbo")?;
//! let p_a1 = geom_a.add_point(0., 0., 0.)?;
//! let p_a2 = geom_a.add_point(1., 0., 0.)?;
//!
//! let mut geom_b = gmsh.new_native_model("aircraft-carrier")?;
//! let p_b1 = geom_b.add_point(0., 1., 1.)?;
//! let p_b2 = geom_b.add_point(0., 1., 1.)?;
//!
//! // Very bad! A silent logic error. You're on your own debugging this one.
//! let line = geom_a.add_line(p_b1, p_b2);
//! assert!(line.is_ok());
//! #  Ok(())
//! # }
//! ```
//!
//! Nearly all geometry functions can fail. Fallible functions will result a `GmshResult`.
//!
//! You can use the `?` operator for terse error handling.
//! ```
//! # use gmsh::{Gmsh, GmshResult};
//! # use gmsh::model::{Kernel};
//! fn main() -> GmshResult<()> {
//!     let gmsh = Gmsh::initialize()?;
//!     let mut geom = gmsh.new_native_model("model")?;
//!
//!     let p1 = geom.add_point(0., 0., 0.)?;
//!
//!     Ok(())
//! }
//! ```
//!
//! ## Describing shapes using Physical Groups
//! Physical Groups are Gmsh's way to associate information with geometries.
//! Physical Groups only associate a name with geometry entities and it is up to client software
//! to correctly interpret the Physical Group information.
//!
//! Some common uses for Physical Groups are:
//! * Materials
//! * Boundary conditions
//! * Part names
//!
//! [^unique]: In most circumstances, tags are a unique identifier. There are some
//! exceptions:
//! * If tags are removed from a model, they can be used again for other shapes.
//! * One Gmsh context can have many models. It's your responsibility to avoid
//!   using tags from one model in another.
//!

use crate::{check_main_error, check_model_error, get_cstring, Gmsh, GmshError, GmshResult};

pub use std::ffi::{CStr, CString};
pub use std::os::raw::c_int;

use std::marker::PhantomData;
use std::ops::Neg;

// gmsh_sys interface
pub use crate::interface::{geo::*, occ::*};

pub mod geo;
pub mod occ;

/// The general geometry kernel trait
pub trait Kernel {
    /// Get the model name
    fn get_name(&self) -> &'static str;

    /// Get the model name used for the Gmsh C interface
    fn get_c_name(&self) -> &CStr;

    /// Set this model to be the current Gmsh model.
    fn set_to_current(&self) -> GmshResult<()> {
        unsafe {
            let mut ierr: c_int = 0;
            gmsh_sys::gmshModelSetCurrent(self.get_c_name().as_ptr(), &mut ierr);
            match ierr {
                0 => Ok(()),
                _ => Err(GmshError::Execution),
            }
        }
    }

    /// Remove this model from the Gmsh context.
    // todo: fix this for multiple models.
    // one name may be shared among many, so this will actually remove the first
    // model named whatever this name is.
    fn remove(self) -> GmshResult<()>;

    #[must_use]
    fn add_point_gen(
        &mut self,
        coords: (f64, f64, f64),
        mesh_size: Option<f64>,
    ) -> GmshResult<PointTag>;

    /// Add a point to the model by specifying its coordinates.
    #[must_use]
    fn add_point(&mut self, x: f64, y: f64, z: f64) -> GmshResult<PointTag> {
        self.add_point_gen((x, y, z), None)
    }

    /// Add a point to the model and specify a target mesh size `lc` there.
    #[must_use]
    fn add_point_with_lc(&mut self, x: f64, y: f64, z: f64, lc: f64) -> GmshResult<PointTag> {
        self.add_point_gen((x, y, z), Some(lc))
    }

    /// Remove a point from the model.
    fn remove_point(&mut self, p: PointTag) -> GmshResult<()>;

    /// Synchronize the geometry model.
    fn synchronize(&mut self) -> GmshResult<()>;

    fn add_line(&mut self, p1: PointTag, p2: PointTag) -> GmshResult<CurveTag>;

    fn add_surface(&mut self, curves: &[CurveTag]) -> GmshResult<SurfaceTag>;

    fn curve_or_surface_op<T: Into<CurveOrSurface>>(&mut self, gen_entity: T);

    /// Mesh the geometry model
    // probably should move this to a dedicated model class
    // with an inner Option(Mesh) and Option(Geo)
    fn generate_mesh(&mut self, dim: i32) -> GmshResult<()> {
        self.set_to_current()?;
        // synchronize by default?
        self.synchronize()?;
        unsafe {
            let mut ierr: c_int = 0;
            gmsh_sys::gmshModelMeshGenerate(dim, &mut ierr);
            check_model_error!(ierr, ())
        }
    }
}

// use a prefix macro for similar functions to avoid nightly-only concat_idents! macro
//
// Idea adapted from the rust-blas package here:
// https://github.com/mikkyang/rust-blas/pull/12
/// Helper macro for calling the correct C function for the specified kernel.
#[macro_export]
macro_rules! kernel_prefix {
    (Geo, $fn_name: ident) => {
        crate::interface::geo::$fn_name
    };
    (Occ, $fn_name: ident) => {
        crate::interface::occ::$fn_name
    };
}

/// Implement kernel functions that follow a naming pattern.
#[macro_export]
macro_rules! impl_kernel {
    ($kernel_name: ident) => {
        impl<'a> Kernel for $kernel_name<'a> {
            //-----------------------------------------------------------------
            // General kernel methods for all kernels
            //-----------------------------------------------------------------

            fn get_name(&self) -> &'static str {
                self.name
            }

            fn get_c_name(&self) -> &CStr {
                &self.c_name
            }

            fn remove(self) -> GmshResult<()> {
                // first set this model to the current model.
                self.set_to_current()?;
                // now, remove the current model
                unsafe {
                    let mut ierr: c_int = 0;
                    gmsh_sys::gmshModelRemove(&mut ierr);
                    check_main_error!(ierr, ())
                }
            }

            //-----------------------------------------------------------------
            // Prefix methods with a naming pattern for each kernel
            //-----------------------------------------------------------------

            /// Synchronize the geometry model.
            fn synchronize(&mut self) -> GmshResult<()> {
                self.set_to_current()?;
                unsafe {
                    let mut ierr: c_int = 0;
                    let sync_fn = kernel_prefix!($kernel_name, synchronize);
                    sync_fn(&mut ierr);
                    check_model_error!(ierr, ())
                }
            }

            /// The general add_point method.
            #[must_use]
            fn add_point_gen(
                &mut self,
                coords: (f64, f64, f64),
                mesh_size: Option<f64>,
            ) -> GmshResult<PointTag> {
                self.set_to_current()?;

                let (x, y, z) = coords;

                let lc = mesh_size.unwrap_or(0.);
                let auto_number = -1;

                unsafe {
                    let mut ierr: c_int = 0;
                    let add_point_fn = kernel_prefix!($kernel_name, add_point);
                    let out_tag = add_point_fn(x, y, z, lc, auto_number, &mut ierr);
                    check_model_error!(ierr, PointTag(out_tag))
                }
            }

            /// Delete a point from the Gmsh model.
            // todo: Genericize this for all GeometryTags
            fn remove_point(&mut self, p: PointTag) -> GmshResult<()> {
                self.set_to_current()?;

                let raw_tag = p.0;

                unsafe {
                    let vec_len = 1;
                    let is_recursive = 0;
                    let mut ierr: c_int = 0;
                    let remove_point_fn = kernel_prefix!($kernel_name, remove_point);
                    remove_point_fn([raw_tag].as_mut_ptr(), vec_len, is_recursive, &mut ierr);
                    check_model_error!(ierr, ())
                }
            }

            /// Add a straight line between two points.
            #[must_use]
            fn add_line(&mut self, p1: PointTag, p2: PointTag) -> GmshResult<CurveTag> {
                self.set_to_current()?;

                let auto_number = -1;
                unsafe {
                    let mut ierr: c_int = 0;
                    let add_line_fn = kernel_prefix!($kernel_name, add_line);
                    let out_tag = add_line_fn(p1.to_raw(), p2.to_raw(), auto_number, &mut ierr);
                    check_model_error!(ierr, CurveTag(out_tag))
                }
            }

            /// Add a surface from a set of closed, directed curves.
            #[must_use]
            fn add_surface(&mut self, curves: &[CurveTag]) -> GmshResult<SurfaceTag> {
                self.set_to_current()?;
                for CurveTag(i) in curves {
                    println!("{:?}", i);
                }
                Ok(SurfaceTag(1))
            }

            // idea for a certain operation that only works for curves and surfaces
            fn curve_or_surface_op<T: Into<CurveOrSurface>>(&mut self, gen_entity: T) {
                let entity = gen_entity.into();
                match entity {
                    CurveOrSurface::Curve(CurveTag(ct)) => println!("Curve with tag {:?}", ct),
                    CurveOrSurface::Surface(SurfaceTag(ct)) => {
                        println!("Surface with tag {:?}", ct)
                    }
                }
            }
        }
    };
}

#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
/// A point tag. Points are used to build larger shapes. 0D.
pub struct PointTag(i32);
#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
/// A curve tag, built from points. The curve type includes straight lines. 1D.
pub struct CurveTag(i32);

/// Curves have a direction from start to end.
impl Neg for CurveTag {
    type Output = Self;
    /// Reverse the curve's direction.
    fn neg(self) -> Self {
        match self {
            CurveTag(i) => Self(-i),
        }
    }
}

#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
/// A wire tag. Wires are built from curves. Wires are a path of multiple curves. 1.5D.
pub struct WireTag(i32);
#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
/// A surface tag. Surfaces are built from closed wires. 2D.
pub struct SurfaceTag(i32);
#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
/// A shell tag. Shells are built from surface loops. 2.5D.
pub struct ShellTag(i32);
#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
/// A volume tag. Volumes are built from closed shells. 3D.
pub struct VolumeTag(i32);

/// A trait for the different tags used by Gmsh.
trait GmshTag {
    /// The raw tag integer passed to the Gmsh library.
    fn to_raw(&self) -> i32;
}

impl GmshTag for PointTag {
    fn to_raw(&self) -> i32 {
        self.0
    }
}

impl GmshTag for CurveTag {
    fn to_raw(&self) -> i32 {
        self.0
    }
}

impl GmshTag for WireTag {
    fn to_raw(&self) -> i32 {
        self.0
    }
}

impl GmshTag for SurfaceTag {
    fn to_raw(&self) -> i32 {
        self.0
    }
}

impl From<PointTag> for BasicShape {
    fn from(t: PointTag) -> BasicShape {
        BasicShape::Point(t)
    }
}

impl From<CurveTag> for BasicShape {
    fn from(t: CurveTag) -> BasicShape {
        BasicShape::Curve(t)
    }
}

/// Private module for sets of geometries passed and returned from functions.
///
/// Gmsh operations can be on multiple known types. We use enums for a compile-time
/// check that the type is OK to use with that function.
mod geometry_groups {
    use super::*;

    #[derive(Debug, Copy, Clone)]
    /// The basic geometry types (points, curves, surfaces, and volumes).
    pub enum BasicShape {
        Point(PointTag),
        Curve(CurveTag),
        Surface(SurfaceTag),
        Volume(VolumeTag),
    }

    #[derive(Debug, Copy, Clone)]
    /// The full set of geometry types (`BasicGeometries` + wires + shells).
    pub enum GeneralShape {
        Point(PointTag),
        Curve(CurveTag),
        Wire(WireTag),
        Surface(SurfaceTag),
        Shell(ShellTag),
        Volume(VolumeTag),
    }

    #[derive(Debug, Copy, Clone)]
    /// Only curves or surfaces.
    pub enum CurveOrSurface {
        Curve(CurveTag),
        Surface(SurfaceTag),
    }
}

use geometry_groups::BasicShape;
use geometry_groups::CurveOrSurface;

type c_or_s = CurveOrSurface;

impl From<CurveTag> for c_or_s {
    fn from(t: CurveTag) -> c_or_s {
        CurveOrSurface::Curve(t)
    }
}

impl From<SurfaceTag> for CurveOrSurface {
    fn from(t: SurfaceTag) -> CurveOrSurface {
        CurveOrSurface::Surface(t)
    }
}

/// Associated geometry information.
#[derive(Debug, Copy, Clone, PartialEq, Eq, PartialOrd, Ord)]
struct PhysicalGroupTag(i32);
