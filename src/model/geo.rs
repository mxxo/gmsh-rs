//! Autogenerated method implementations for the built-in geometry kernel 
use crate::{GmshError, GmshResult, model::*};

impl<'a> GeoModel<'a> {

    #[must_use]
    fn add_point_gen(
         &mut self,
         coords: (f64, f64, f64),
         mesh_size: Option<f64>,
     ) -> GmshResult<PointTag> {
         self.set_current()?;
 
         let (x, y, z) = coords;
 
         let lc = mesh_size.unwrap_or(0.);
         let auto_number = -1;
 
         unsafe {
             let mut ierr: c_int = 0;
             //let add_point_fn = impl_kernel!(@kernel_prefix $kernel_name, add_point);
             let out_tag = crate::interface::geo::add_point(x, y, z, lc, auto_number, &mut ierr);
             check_model_error!(ierr, PointTag(out_tag))
         }
     }
 

    /// Add a point to the model by specifying its coordinates.
    #[must_use]
    pub fn add_point(&mut self, x: f64, y: f64, z: f64) -> GmshResult<PointTag> {
        println!("added basic point");
        self.add_point_gen((x, y, z), None)
    }

    /// Add a point to the model and specify a target mesh size `lc` there.
    #[must_use]
    pub fn add_point_with_lc(&mut self, x: f64, y: f64, z: f64, lc: f64) -> GmshResult<PointTag> {
        println!("added point with lc");
        self.add_point_gen((x, y, z), Some(lc))
    }

}
