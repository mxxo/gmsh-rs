initSidebarItems({"fn":[["add_box","Add a parallelepipedic box defined by a point (`x`, `y`, `z`) and the extents along the x-, y- and z-axes. If `tag` is positive, set the tag explicitly; otherwise a new tag is selected automatically. Return the tag of the box."],["add_curve_loop","Add a curve loop (a closed wire) formed by the curves `curveTags`. `curveTags` should contain tags of curves forming a closed loop. Note that an OpenCASCADE curve loop can be made of curves that share geometrically identical (but topologically different) points. If `tag` is positive, set the tag explicitly; otherwise a new tag is selected automatically. Return the tag of the curve loop."],["add_line","Add a straight line segment between the two points with tags `startTag` and `endTag`. If `tag` is positive, set the tag explicitly; otherwise a new tag is selected automatically. Return the tag of the line."],["add_plane_surface","Add a plane surface defined by one or more curve loops (or closed wires) `wireTags`. The first curve loop defines the exterior contour; additional curve loop define holes. If `tag` is positive, set the tag explicitly; otherwise a new tag is selected automatically. Return the tag of the surface."],["add_point","Add a geometrical point in the OpenCASCADE CAD representation, at coordinates (`x`, `y`, `z`). If `meshSize` is > 0, add a meshing constraint at that point. If `tag` is positive, set the tag explicitly; otherwise a new tag is selected automatically. Return the tag of the point. (Note that the point will be added in the current model only after `synchronize` is called. This behavior holds for all the entities added in the occ module.)"],["add_sphere","Add a sphere of center (`xc`, `yc`, `zc`) and radius `r`. The optional `angle1` and `angle2` arguments define the polar angle opening (from -Pi/2 to Pi/2). The optional `angle3` argument defines the azimuthal opening (from 0 to 2*Pi). If `tag` is positive, set the tag explicitly; otherwise a new tag is selected automatically. Return the tag of the sphere."],["add_torus","Add a torus, defined by its center (`x`, `y`, `z`) and its 2 radii `r` and `r2`. If `tag` is positive, set the tag explicitly; otherwise a new tag is selected automatically. The optional argument `angle` defines the angular opening (from 0 to 2*Pi). Return the tag of the wedge."],["remove_point","Remove the entities `dimTags`. If `recursive` is true, remove all the entities on their boundaries, down to dimension 0."],["synchronize","Synchronize the OpenCASCADE CAD representation with the current Gmsh model. This can be called at any time, but since it involves a non trivial amount of processing, the number of synchronization points should normally be minimized."]]});