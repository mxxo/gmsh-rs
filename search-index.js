var N=null,E="",T="t",U="u",searchIndex={};
var R=["Set a transfinite meshing constraint on the surface `tag`.…","Set a mesh size constraint on the model entities…","Set a transfinite meshing constraint on the curve `tag`,…","Set a recombination meshing constraint on the model entity…","Set a smoothing meshing constraint on the model entity of…","Set a reverse meshing constraint on the model entity of…","Add a straight line segment between the two points with…","Add a Bezier curve with `pointTags` control points. If…","Add a curve loop (a closed wire) formed by the curves…","Add a surface loop (a closed shell) formed by…","Extrude the model entities `dimTags` by translation along…","Extrude the model entities `dimTags` by rotation of…","Translate the model entities `dimTags` along (`dx`, `dy`,…","Rotate the model entities `dimTags` of `angle` radians…","Scale the model entities `dimTag` by factors `a`, `b` and…","Apply a symmetry transformation to the model entities…","Copy the entities `dimTags`; the new entities are returned…","Remove the entities `dimTags`. If `recursive` is true,…","Remove all duplicate entities (different entities at the…","max_align_t","The model name.","The model name used to talk to C.","GmshError","The error type for all Gmsh API functions.","Initialization","The Gmsh context wasn't properly initialized, or a…","Execution","One of Gmsh's \"shell\" methods couldn't run successfully.…","CInterface","Errors from the Rust/C FFI interface.","ModelMutation","A function that mutates the model couldn't complete…","ModelLookup","A data lookup getter function failed. For example, tried…","ModelBadInput","The function couldn't successfully use a required input…","ModelParallelMeshQuery","A parallelizable mesh query function failed","UnknownOption","The given option doesn't exist in Gmsh.","UnknownError","Any unexpected error codes in the Gmsh API.","gmshresult","rgmsh::fltk","Add a parallelepipedic box defined by a point (`x`, `y`,…","Add a sphere of center (`xc`, `yc`, `zc`) and radius `r`.…","Add a torus, defined by its center (`x`, `y`, `z`) and its…","Add a plane surface defined by one or more curve loops (or…","Add a geometrical point in the OpenCASCADE CAD…","Synchronize the OpenCASCADE CAD representation with the…","rgmsh::interface","add_curve_loop","add_line","add_plane_surface","Add a plane surface defined by one or more curve loops…","add_point","Add a geometrical point in the built-in CAD…","remove_point","synchronize","Synchronize the built-in CAD representation with the…","GeoModel","An instance of the built-in geometry kernel.","OccModel","An instance of the `OpenCASCADE` geometry kernel.","rgmsh::model","pointtag","curvetag","wiretag","surfacetag","curveorsurface","Add a point to the model by specifying its coordinates.","add_point_with_lc","Add a point to the model and specify a target mesh size…","Delete a point from the Gmsh model.","Add a straight line between two points.","Add a curve loop from a closed set of curves.","Add a surface from a WireTag of a closed curve set.","curve_or_surface_op","A certain operation that only works for curves and surfaces.","add_plane_surface_with_holes","Add a surface with holes.","volumetag","add_sphere","add_torus","Create a new Gmsh model.","Remove model from Gmsh.","set_current","Set model to current model.","Synchronize the underlying CAD representation.","generate_mesh","Mesh the model.","GmshResult","Type alias for Result using `GmshError`.","geomodel","occmodel","try_from","try_into","result","borrow_mut","type_id","rgmsh::err","clone_into","to_owned","rgmsh::model::shapes","ordering","shelltag","partial_cmp","formatter","SurfaceTag","VolumeTag"];
searchIndex["api_gen"]={"doc":"Generate Rust API definitions.","i":[],"p":[]};
searchIndex["gmsh_sys"]={"doc":"Low-level bindings to the Gmsh SDK. ","i":[[3,R[19],"gmsh_sys",E,N,N],[12,"__clang_max_align_nonce1",E,E,0,N],[12,"__bindgen_padding_0",E,E,0,N],[12,"__clang_max_align_nonce2",E,E,0,N],[5,"gmshFree",E,E,N,N],[5,"gmshMalloc",E,E,N,N],[5,"gmshInitialize",E,"Initialize Gmsh. This must be called before any call to…",N,N],[5,"gmshFinalize",E,"Finalize Gmsh. This must be called when you are done using…",N,N],[5,"gmshOpen",E,"Open a file. Equivalent to the `File->Open` menu in the…",N,N],[5,"gmshMerge",E,"Merge a file. Equivalent to the `File->Merge` menu in the…",N,N],[5,"gmshWrite",E,"Write a file. The export format is determined by the file…",N,N],[5,"gmshClear",E,"Clear all loaded models and post-processing data, and add…",N,N],[5,"gmshOptionSetNumber",E,"Set a numerical option to `value`. `name` is of the form…",N,N],[5,"gmshOptionGetNumber",E,"Get the `value` of a numerical option. `name` is of the…",N,N],[5,"gmshOptionSetString",E,"Set a string option to `value`. `name` is of the form…",N,N],[5,"gmshOptionGetString",E,"Get the `value` of a string option. `name` is of the form…",N,N],[5,"gmshOptionSetColor",E,"Set a color option to the RGBA value (`r`, `g`, `b`, `a`),…",N,N],[5,"gmshOptionGetColor",E,"Get the `r`, `g`, `b`, `a` value of a color option. `name`…",N,N],[5,"gmshModelAdd",E,"Add a new model, with name `name`, and set it as the…",N,N],[5,"gmshModelRemove",E,"Remove the current model.",N,N],[5,"gmshModelList",E,"List the names of all models.",N,N],[5,"gmshModelSetCurrent",E,"Set the current model to the model with name `name`. If…",N,N],[5,"gmshModelGetEntities",E,"Get all the entities in the current model. If `dim` is >=…",N,N],[5,"gmshModelSetEntityName",E,"Set the name of the entity of dimension `dim` and tag `tag`.",N,N],[5,"gmshModelGetEntityName",E,"Get the name of the entity of dimension `dim` and tag `tag`.",N,N],[5,"gmshModelGetPhysicalGroups",E,"Get all the physical groups in the current model. If `dim`…",N,N],[5,"gmshModelGetEntitiesForPhysicalGroup",E,"Get the tags of the model entities making up the physical…",N,N],[5,"gmshModelGetPhysicalGroupsForEntity",E,"Get the tags of the physical groups (if any) to which the…",N,N],[5,"gmshModelAddPhysicalGroup",E,"Add a physical group of dimension `dim`, grouping the…",N,N],[5,"gmshModelSetPhysicalName",E,"Set the name of the physical group of dimension `dim` and…",N,N],[5,"gmshModelGetPhysicalName",E,"Get the name of the physical group of dimension `dim` and…",N,N],[5,"gmshModelGetBoundary",E,"Get the boundary of the model entities `dimTags`. Return…",N,N],[5,"gmshModelGetEntitiesInBoundingBox",E,"Get the model entities in the bounding box defined by the…",N,N],[5,"gmshModelGetBoundingBox",E,"Get the bounding box (`xmin`, `ymin`, `zmin`), (`xmax`,…",N,N],[5,"gmshModelGetDimension",E,"Get the geometrical dimension of the current model.",N,N],[5,"gmshModelAddDiscreteEntity",E,"Add a discrete model entity (defined by a mesh) of…",N,N],[5,"gmshModelRemoveEntities",E,"Remove the entities `dimTags` of the current model. If…",N,N],[5,"gmshModelRemoveEntityName",E,"Remove the entity name `name` from the current model.",N,N],[5,"gmshModelRemovePhysicalGroups",E,"Remove the physical groups `dimTags` of the current model.…",N,N],[5,"gmshModelRemovePhysicalName",E,"Remove the physical name `name` from the current model.",N,N],[5,"gmshModelGetType",E,"Get the type of the entity of dimension `dim` and tag `tag`.",N,N],[5,"gmshModelGetParent",E,"In a partitioned model, get the parent of the entity of…",N,N],[5,"gmshModelGetPartitions",E,"In a partitioned model, return the tags of the…",N,N],[5,"gmshModelGetValue",E,"Evaluate the parametrization of the entity of dimension…",N,N],[5,"gmshModelGetDerivative",E,"Evaluate the derivative of the parametrization of the…",N,N],[5,"gmshModelGetCurvature",E,"Evaluate the (maximum) curvature of the entity of…",N,N],[5,"gmshModelGetPrincipalCurvatures",E,"Evaluate the principal curvatures of the surface with tag…",N,N],[5,"gmshModelGetNormal",E,"Get the normal to the surface with tag `tag` at the…",N,N],[5,"gmshModelSetVisibility",E,"Set the visibility of the model entities `dimTags` to…",N,N],[5,"gmshModelGetVisibility",E,"Get the visibility of the model entity of dimension `dim`…",N,N],[5,"gmshModelSetColor",E,"Set the color of the model entities `dimTags` to the RGBA…",N,N],[5,"gmshModelGetColor",E,"Get the color of the model entity of dimension `dim` and…",N,N],[5,"gmshModelSetCoordinates",E,"Set the `x`, `y`, `z` coordinates of a geometrical point.",N,N],[5,"gmshModelMeshGenerate",E,"Generate a mesh of the current model, up to dimension…",N,N],[5,"gmshModelMeshPartition",E,"Partition the mesh of the current model into `numPart`…",N,N],[5,"gmshModelMeshUnpartition",E,"Unpartition the mesh of the current model.",N,N],[5,"gmshModelMeshOptimize",E,"Optimize the mesh of the current model using `method`…",N,N],[5,"gmshModelMeshRecombine",E,"Recombine the mesh of the current model.",N,N],[5,"gmshModelMeshRefine",E,"Refine the mesh of the current model by uniformly…",N,N],[5,"gmshModelMeshSmooth",E,"Smooth the mesh of the current model.",N,N],[5,"gmshModelMeshSetOrder",E,"Set the order of the elements in the mesh of the current…",N,N],[5,"gmshModelMeshGetLastEntityError",E,"Get the last entities (if any) where a meshing error…",N,N],[5,"gmshModelMeshGetLastNodeError",E,"Get the last nodes (if any) where a meshing error…",N,N],[5,"gmshModelMeshClear",E,"Clear the mesh, i.e. delete all the nodes and elements.",N,N],[5,"gmshModelMeshGetNodes",E,"Get the nodes classified on the entity of dimension `dim`…",N,N],[5,"gmshModelMeshGetNodesByElementType",E,"Get the nodes classified on the entity of tag `tag`, for…",N,N],[5,"gmshModelMeshGetNode",E,"Get the coordinates and the parametric coordinates (if…",N,N],[5,"gmshModelMeshRebuildNodeCache",E,"Rebuild the node cache.",N,N],[5,"gmshModelMeshGetNodesForPhysicalGroup",E,"Get the nodes from all the elements belonging to the…",N,N],[5,"gmshModelMeshAddNodes",E,"Add nodes classified on the model entity of dimension…",N,N],[5,"gmshModelMeshReclassifyNodes",E,"Reclassify all nodes on their associated model entity,…",N,N],[5,"gmshModelMeshRelocateNodes",E,"Relocate the nodes classified on the entity of dimension…",N,N],[5,"gmshModelMeshGetElements",E,"Get the elements classified on the entity of dimension…",N,N],[5,"gmshModelMeshGetElement",E,"Get the type and node tags of the element with tag `tag`.…",N,N],[5,"gmshModelMeshGetElementByCoordinates",E,"Search the mesh for an element located at coordinates…",N,N],[5,"gmshModelMeshGetElementTypes",E,"Get the types of elements in the entity of dimension `dim`…",N,N],[5,"gmshModelMeshGetElementType",E,"Return an element type given its family name `familyName`…",N,N],[5,"gmshModelMeshGetElementProperties",E,"Get the properties of an element of type `elementType`:…",N,N],[5,"gmshModelMeshGetElementsByType",E,"Get the elements of type `elementType` classified on the…",N,N],[5,"gmshModelMeshPreallocateElementsByType",E,"Preallocate data before calling `getElementsByType` with…",N,N],[5,"gmshModelMeshAddElements",E,"Add elements classified on the entity of dimension `dim`…",N,N],[5,"gmshModelMeshAddElementsByType",E,"Add elements of type `elementType` classified on the…",N,N],[5,"gmshModelMeshGetIntegrationPoints",E,"Get the numerical quadrature information for the given…",N,N],[5,"gmshModelMeshGetJacobians",E,"Get the Jacobians of all the elements of type…",N,N],[5,"gmshModelMeshPreallocateJacobians",E,"Preallocate data before calling `getJacobians` with…",N,N],[5,"gmshModelMeshGetBasisFunctions",E,"Get the basis functions of the element of type…",N,N],[5,"gmshModelMeshGetBasisFunctionsForElements",E,"Get the element-dependent basis functions of the elements…",N,N],[5,"gmshModelMeshGetKeysForElements",E,"Generate the `keys` for the elements of type `elementType`…",N,N],[5,"gmshModelMeshGetInformationForElements",E,"Get information about the `keys`. `infoKeys` returns…",N,N],[5,"gmshModelMeshPrecomputeBasisFunctions",E,"Precomputes the basis functions corresponding to…",N,N],[5,"gmshModelMeshGetBarycenters",E,"Get the barycenters of all elements of type `elementType`…",N,N],[5,"gmshModelMeshPreallocateBarycenters",E,"Preallocate data before calling `getBarycenters` with…",N,N],[5,"gmshModelMeshGetElementEdgeNodes",E,"Get the nodes on the edges of all elements of type…",N,N],[5,"gmshModelMeshGetElementFaceNodes",E,"Get the nodes on the faces of type `faceType` (3 for…",N,N],[5,"gmshModelMeshGetGhostElements",E,"Get the ghost elements `elementTags` and their associated…",N,N],[5,"gmshModelMeshSetSize",E,R[1],N,N],[5,"gmshModelMeshSetTransfiniteCurve",E,R[2],N,N],[5,"gmshModelMeshSetTransfiniteSurface",E,R[0],N,N],[5,"gmshModelMeshSetTransfiniteVolume",E,R[0],N,N],[5,"gmshModelMeshSetRecombine",E,R[3],N,N],[5,"gmshModelMeshSetSmoothing",E,R[4],N,N],[5,"gmshModelMeshSetReverse",E,R[5],N,N],[5,"gmshModelMeshSetOutwardOrientation",E,"Set meshing constraints on the bounding surfaces of the…",N,N],[5,"gmshModelMeshEmbed",E,"Embed the model entities of dimension `dim` and tags…",N,N],[5,"gmshModelMeshRemoveEmbedded",E,"Remove embedded entities from the model entities…",N,N],[5,"gmshModelMeshReorderElements",E,"Reorder the elements of type `elementType` classified on…",N,N],[5,"gmshModelMeshRenumberNodes",E,"Renumber the node tags in a continuous sequence.",N,N],[5,"gmshModelMeshRenumberElements",E,"Renumber the element tags in a continuous sequence.",N,N],[5,"gmshModelMeshSetPeriodic",E,"Set the meshes of the entities of dimension `dim` and tag…",N,N],[5,"gmshModelMeshGetPeriodicNodes",E,"Get the master entity `tagMaster`, the node tags…",N,N],[5,"gmshModelMeshRemoveDuplicateNodes",E,"Remove duplicate nodes in the mesh of the current model.",N,N],[5,"gmshModelMeshSplitQuadrangles",E,"Split (into two triangles) all quadrangles in surface…",N,N],[5,"gmshModelMeshClassifySurfaces",E,"Classify (\"color\") the surface mesh based on the angle…",N,N],[5,"gmshModelMeshCreateGeometry",E,"Create a parametrization for discrete curves and surfaces…",N,N],[5,"gmshModelMeshCreateTopology",E,"Create a boundary representation from the mesh if the…",N,N],[5,"gmshModelMeshComputeHomology",E,"Compute a basis representation for homology spaces after a…",N,N],[5,"gmshModelMeshComputeCohomology",E,"Compute a basis representation for cohomology spaces after…",N,N],[5,"gmshModelMeshFieldAdd",E,"Add a new mesh size field of type `fieldType`. If `tag` is…",N,N],[5,"gmshModelMeshFieldRemove",E,"Remove the field with tag `tag`.",N,N],[5,"gmshModelMeshFieldSetNumber",E,"Set the numerical option `option` to value `value` for…",N,N],[5,"gmshModelMeshFieldSetString",E,"Set the string option `option` to value `value` for field…",N,N],[5,"gmshModelMeshFieldSetNumbers",E,"Set the numerical list option `option` to value `value`…",N,N],[5,"gmshModelMeshFieldSetAsBackgroundMesh",E,"Set the field `tag` as the background mesh size field.",N,N],[5,"gmshModelMeshFieldSetAsBoundaryLayer",E,"Set the field `tag` as a boundary layer size field.",N,N],[5,"gmshModelGeoAddPoint",E,R[56],N,N],[5,"gmshModelGeoAddLine",E,R[6],N,N],[5,"gmshModelGeoAddCircleArc",E,"Add a circle arc (strictly smaller than Pi) between the…",N,N],[5,"gmshModelGeoAddEllipseArc",E,"Add an ellipse arc (strictly smaller than Pi) between the…",N,N],[5,"gmshModelGeoAddSpline",E,"Add a spline (Catmull-Rom) curve going through the points…",N,N],[5,"gmshModelGeoAddBSpline",E,"Add a cubic b-spline curve with `pointTags` control…",N,N],[5,"gmshModelGeoAddBezier",E,R[7],N,N],[5,"gmshModelGeoAddCurveLoop",E,R[8],N,N],[5,"gmshModelGeoAddPlaneSurface",E,R[54],N,N],[5,"gmshModelGeoAddSurfaceFilling",E,"Add a surface filling the curve loops in `wireTags`.…",N,N],[5,"gmshModelGeoAddSurfaceLoop",E,R[9],N,N],[5,"gmshModelGeoAddVolume",E,"Add a volume (a region) defined by one or more shells…",N,N],[5,"gmshModelGeoExtrude",E,R[10],N,N],[5,"gmshModelGeoRevolve",E,R[11],N,N],[5,"gmshModelGeoTwist",E,"Extrude the model entities `dimTags` by a combined…",N,N],[5,"gmshModelGeoTranslate",E,R[12],N,N],[5,"gmshModelGeoRotate",E,R[13],N,N],[5,"gmshModelGeoDilate",E,R[14],N,N],[5,"gmshModelGeoSymmetrize",E,R[15],N,N],[5,"gmshModelGeoCopy",E,R[16],N,N],[5,"gmshModelGeoRemove",E,R[17],N,N],[5,"gmshModelGeoRemoveAllDuplicates",E,R[18],N,N],[5,"gmshModelGeoSynchronize",E,R[59],N,N],[5,"gmshModelGeoMeshSetSize",E,R[1],N,N],[5,"gmshModelGeoMeshSetTransfiniteCurve",E,R[2],N,N],[5,"gmshModelGeoMeshSetTransfiniteSurface",E,R[0],N,N],[5,"gmshModelGeoMeshSetTransfiniteVolume",E,R[0],N,N],[5,"gmshModelGeoMeshSetRecombine",E,R[3],N,N],[5,"gmshModelGeoMeshSetSmoothing",E,R[4],N,N],[5,"gmshModelGeoMeshSetReverse",E,R[5],N,N],[5,"gmshModelOccAddPoint",E,R[48],N,N],[5,"gmshModelOccAddLine",E,R[6],N,N],[5,"gmshModelOccAddCircleArc",E,"Add a circle arc between the two points with tags…",N,N],[5,"gmshModelOccAddCircle",E,"Add a circle of center (`x`, `y`, `z`) and radius `r`. If…",N,N],[5,"gmshModelOccAddEllipseArc",E,"Add an ellipse arc between the two points `startTag` and…",N,N],[5,"gmshModelOccAddEllipse",E,"Add an ellipse of center (`x`, `y`, `z`) and radii `r1`…",N,N],[5,"gmshModelOccAddSpline",E,"Add a spline (C2 b-spline) curve going through the points…",N,N],[5,"gmshModelOccAddBSpline",E,"Add a b-spline curve of degree `degree` with `pointTags`…",N,N],[5,"gmshModelOccAddBezier",E,R[7],N,N],[5,"gmshModelOccAddWire",E,"Add a wire (open or closed) formed by the curves…",N,N],[5,"gmshModelOccAddCurveLoop",E,R[8],N,N],[5,"gmshModelOccAddRectangle",E,"Add a rectangle with lower left corner at (`x`, `y`, `z`)…",N,N],[5,"gmshModelOccAddDisk",E,"Add a disk with center (`xc`, `yc`, `zc`) and radius `rx`…",N,N],[5,"gmshModelOccAddPlaneSurface",E,R[47],N,N],[5,"gmshModelOccAddSurfaceFilling",E,"Add a surface filling the curve loops in `wireTags`. If…",N,N],[5,"gmshModelOccAddSurfaceLoop",E,R[9],N,N],[5,"gmshModelOccAddVolume",E,"Add a volume (a region) defined by one or more surface…",N,N],[5,"gmshModelOccAddSphere",E,R[45],N,N],[5,"gmshModelOccAddBox",E,R[44],N,N],[5,"gmshModelOccAddCylinder",E,"Add a cylinder, defined by the center (`x`, `y`, `z`) of…",N,N],[5,"gmshModelOccAddCone",E,"Add a cone, defined by the center (`x`, `y`, `z`) of its…",N,N],[5,"gmshModelOccAddWedge",E,"Add a right angular wedge, defined by the right-angle…",N,N],[5,"gmshModelOccAddTorus",E,R[46],N,N],[5,"gmshModelOccAddThruSections",E,"Add a volume (if the optional argument `makeSolid` is set)…",N,N],[5,"gmshModelOccAddThickSolid",E,"Add a hollowed volume built from an initial volume…",N,N],[5,"gmshModelOccExtrude",E,R[10],N,N],[5,"gmshModelOccRevolve",E,R[11],N,N],[5,"gmshModelOccAddPipe",E,"Add a pipe by extruding the entities `dimTags` along the…",N,N],[5,"gmshModelOccFillet",E,"Fillet the volumes `volumeTags` on the curves `curveTags`…",N,N],[5,"gmshModelOccChamfer",E,"Chamfer the volumes `volumeTags` on the curves `curveTags`…",N,N],[5,"gmshModelOccFuse",E,"Compute the boolean union (the fusion) of the entities…",N,N],[5,"gmshModelOccIntersect",E,"Compute the boolean intersection (the common parts) of the…",N,N],[5,"gmshModelOccCut",E,"Compute the boolean difference between the entities…",N,N],[5,"gmshModelOccFragment",E,"Compute the boolean fragments (general fuse) of the…",N,N],[5,"gmshModelOccTranslate",E,R[12],N,N],[5,"gmshModelOccRotate",E,R[13],N,N],[5,"gmshModelOccDilate",E,R[14],N,N],[5,"gmshModelOccSymmetrize",E,R[15],N,N],[5,"gmshModelOccAffineTransform",E,"Apply a general affine transformation matrix `a` (16…",N,N],[5,"gmshModelOccCopy",E,R[16],N,N],[5,"gmshModelOccRemove",E,R[17],N,N],[5,"gmshModelOccRemoveAllDuplicates",E,R[18],N,N],[5,"gmshModelOccHealShapes",E,"Apply various healing procedures to the entities `dimTags`…",N,N],[5,"gmshModelOccImportShapes",E,"Import BREP, STEP or IGES shapes from the file `fileName`.…",N,N],[5,"gmshModelOccImportShapesNativePointer",E,"Imports an OpenCASCADE `shape` by providing a pointer to a…",N,N],[5,"gmshModelOccSetMeshSize",E,R[1],N,N],[5,"gmshModelOccGetMass",E,"Get the mass of the model entity of dimension `dim` and…",N,N],[5,"gmshModelOccGetCenterOfMass",E,"Get the center of mass of the model entity of dimension…",N,N],[5,"gmshModelOccGetMatrixOfInertia",E,"Get the matrix of inertia (by row) of the model entity of…",N,N],[5,"gmshModelOccSynchronize",E,R[49],N,N],[5,"gmshViewAdd",E,"Add a new post-processing view, with name `name`. If `tag`…",N,N],[5,"gmshViewRemove",E,"Remove the view with tag `tag`.",N,N],[5,"gmshViewGetIndex",E,"Get the index of the view with tag `tag` in the list of…",N,N],[5,"gmshViewGetTags",E,"Get the tags of all views.",N,N],[5,"gmshViewAddModelData",E,"Add model-based post-processing data to the view with tag…",N,N],[5,"gmshViewGetModelData",E,"Get model-based post-processing data from the view with…",N,N],[5,"gmshViewAddListData",E,"Add list-based post-processing data to the view with tag…",N,N],[5,"gmshViewGetListData",E,"Get list-based post-processing data from the view with tag…",N,N],[5,"gmshViewAddAlias",E,"Add a post-processing view as an `alias` of the reference…",N,N],[5,"gmshViewCopyOptions",E,"Copy the options from the view with tag `refTag` to the…",N,N],[5,"gmshViewCombine",E,"Combine elements (if `what` == \"elements\") or steps (if…",N,N],[5,"gmshViewProbe",E,"Probe the view `tag` for its `value` at point (`x`, `y`,…",N,N],[5,"gmshViewWrite",E,"Write the view to a file `fileName`. The export format is…",N,N],[5,"gmshPluginSetNumber",E,"Set the numerical option `option` to the value `value` for…",N,N],[5,"gmshPluginSetString",E,"Set the string option `option` to the value `value` for…",N,N],[5,"gmshPluginRun",E,"Run the plugin `name`.",N,N],[5,"gmshGraphicsDraw",E,"Draw all the OpenGL scenes.",N,N],[5,"gmshFltkInitialize",E,"Create the FLTK graphical user interface. Can only be…",N,N],[5,"gmshFltkWait",E,"Wait at most `time` seconds for user interface events and…",N,N],[5,"gmshFltkUpdate",E,"Update the user interface (potentially creating new…",N,N],[5,"gmshFltkAwake",E,"Awake the main user interface thread and process pending…",N,N],[5,"gmshFltkLock",E,"Block the current thread until it can safely modify the…",N,N],[5,"gmshFltkUnlock",E,"Release the lock that was set using lock.",N,N],[5,"gmshFltkRun",E,"Run the event loop of the graphical user interface, i.e.…",N,N],[5,"gmshFltkSelectEntities",E,"Select entities in the user interface. If `dim` is >= 0,…",N,N],[5,"gmshFltkSelectElements",E,"Select elements in the user interface.",N,N],[5,"gmshFltkSelectViews",E,"Select views in the user interface.",N,N],[5,"gmshOnelabSet",E,"Set one or more parameters in the ONELAB database, encoded…",N,N],[5,"gmshOnelabGet",E,"Get all the parameters (or a single one if `name` is…",N,N],[5,"gmshOnelabSetNumber",E,"Set the value of the number parameter `name` in the ONELAB…",N,N],[5,"gmshOnelabSetString",E,"Set the value of the string parameter `name` in the ONELAB…",N,N],[5,"gmshOnelabGetNumber",E,"Get the value of the number parameter `name` from the…",N,N],[5,"gmshOnelabGetString",E,"Get the value of the string parameter `name` from the…",N,N],[5,"gmshOnelabClear",E,"Clear the ONELAB database, or remove a single parameter if…",N,N],[5,"gmshOnelabRun",E,"Run a ONELAB client. If `name` is provided, create a new…",N,N],[5,"gmshLoggerWrite",E,"Write a `message`. `level` can be \"info\", \"warning\" or…",N,N],[5,"gmshLoggerStart",E,"Start logging messages.",N,N],[5,"gmshLoggerGet",E,"Get logged messages.",N,N],[5,"gmshLoggerStop",E,"Stop logging messages.",N,N],[5,"gmshLoggerTime",E,"Return wall clock time.",N,N],[5,"gmshLoggerCputime",E,"Return CPU time.",N,N],[6,"wchar_t",E,E,N,N],[17,"GMSH_API_VERSION",E,E,N,N],[17,"GMSH_API_VERSION_MAJOR",E,E,N,N],[17,"GMSH_API_VERSION_MINOR",E,E,N,N],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[102],E,E,0,[[["self"]],[T]]],[11,R[101],E,E,0,[[["self"],[T]]]],[11,R[95],E,E,0,[[[U]],[R[97]]]],[11,R[96],E,E,0,[[],[R[97]]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,R[98],E,E,0,[[["self"]],[T]]],[11,R[99],E,E,0,[[["self"]],["typeid"]]],[11,"clone",E,E,0,[[["self"]],[R[19]]]],[11,"fmt",E,E,0,[[["self"],[R[107]]],[R[97]]]]],"p":[[3,R[19]]]};
searchIndex["rgmsh"]={"doc":"Unofficial, opinionated Rust bindings for the Gmsh API.","i":[[3,R[60],"rgmsh",R[61],N,N],[12,"name",E,R[20],0,N],[12,"c_name",E,R[21],0,N],[3,R[62],E,R[63],N,N],[12,"name",E,R[20],1,N],[12,"c_name",E,R[21],1,N],[3,"Gmsh",E,"Gmsh context object",N,N],[4,R[22],E,R[23],N,N],[13,R[24],E,R[25],2,N],[13,R[26],E,R[27],2,N],[13,R[28],E,R[29],2,N],[13,R[30],E,R[31],2,N],[13,R[32],E,R[33],2,N],[13,R[34],E,R[35],2,N],[13,R[36],E,R[37],2,N],[13,R[38],E,R[39],2,N],[13,R[40],E,R[41],2,N],[0,"err",E,"Idiomatic Rust error handling for the Gmsh API.",N,N],[4,R[22],R[100],R[23],N,N],[13,R[24],E,R[25],2,N],[13,R[26],E,R[27],2,N],[13,R[28],E,R[29],2,N],[13,R[30],E,R[31],2,N],[13,R[32],E,R[33],2,N],[13,R[34],E,R[35],2,N],[13,R[36],E,R[37],2,N],[13,R[38],E,R[39],2,N],[13,R[40],E,R[41],2,N],[6,R[91],E,R[92],N,N],[0,"fltk","rgmsh","Manipulation of the FLTK graphical user interface.",N,N],[3,"Gui",R[43],"The FLTK GUI object",N,N],[11,"initialize_gui","rgmsh","Create the GUI. If successful, open the GUI for an instant…",3,[[["self"]],[["gui"],[R[42],["gui"]]]]],[11,"run_gui",E,"Run the GUI and block the calling thread until the GUI…",3,[[["self"]],[["gui"],[R[42],["gui"]]]]],[11,"draw",R[43],"Draw all the OpenGL scenes",4,[[["self"]],[R[42]]]],[0,"interface","rgmsh","Interface to the low-level `gmsh_sys` crate.",N,N],[0,"occ",R[50],"The set of `OpenCASCADE` kernel functions.",N,N],[5,"add_box","rgmsh::interface::occ",R[44],N,[[["f64"],["i32"]],["i32"]]],[5,R[82],E,R[45],N,[[["f64"],["i32"]],["i32"]]],[5,R[83],E,R[46],N,[[["f64"],["i32"]],["i32"]]],[5,R[51],E,R[8],N,[[["usize"],["i32"]],["i32"]]],[5,R[52],E,R[6],N,[[["i32"]],["i32"]]],[5,R[53],E,R[47],N,[[["usize"],["i32"]],["i32"]]],[5,R[55],E,R[48],N,[[["f64"],["i32"]],["i32"]]],[5,R[57],E,R[17],N,[[["usize"],["i32"]]]],[5,R[58],E,R[49],N,[[]]],[0,"geo",R[50],"The set of built-in kernel functions.",N,N],[5,R[51],"rgmsh::interface::geo",R[8],N,[[["usize"],["i32"]],["i32"]]],[5,R[52],E,R[6],N,[[["i32"]],["i32"]]],[5,R[53],E,R[54],N,[[["usize"],["i32"]],["i32"]]],[5,R[55],E,R[56],N,[[["f64"],["i32"]],["i32"]]],[5,R[57],E,R[17],N,[[["usize"],["i32"]]]],[5,R[58],E,R[59],N,[[]]],[0,"model","rgmsh","Inspection and manipulation of geometry models.",N,N],[3,R[60],R[64],R[61],N,N],[12,"name",E,R[20],0,N],[12,"c_name",E,R[21],0,N],[3,R[62],E,R[63],N,N],[12,"name",E,R[20],1,N],[12,"c_name",E,R[21],1,N],[3,"PointTag",E,"A point tag. Points are used to build larger shapes. 0D.",N,N],[3,"CurveTag",E,"A curve tag, built from points. The curve type includes…",N,N],[3,"WireTag",E,"A wire tag. Wires are built from curves. Wires are a path…",N,N],[3,R[108],E,"A surface tag. Surfaces are built from closed wires. 2D.",N,N],[3,"ShellTag",E,"A shell tag. Shells are built from surface loops. 2.5D.",N,N],[3,R[109],E,"A volume tag. Volumes are built from closed shells. 3D.",N,N],[0,"shapes",E,"Shape objects.",N,N],[3,"Point",R[103],"A point.",N,N],[12,"x",E,"x-coordinate",5,N],[12,"y",E,"y-coordinate",5,N],[12,"z",E,"z-coordinate",5,N],[3,"Torus",E,"A torus.",N,N],[12,"centroid",E,"Centroid",6,N],[12,"main_radius",E,"Major radius (radius of the donut)",6,N],[12,"pipe_radius",E,"Minor radius (radius of the tube)",6,N],[11,R[55],R[64],R[70],0,[[["self"],["f64"]],[[R[65]],[R[42],[R[65]]]]]],[11,R[71],E,R[72],0,[[["self"],["f64"]],[[R[65]],[R[42],[R[65]]]]]],[11,R[57],E,R[73],0,[[[R[65]],["self"]],[R[42]]]],[11,R[52],E,R[74],0,[[[R[65]],["self"]],[[R[42],[R[66]]],[R[66]]]]],[11,R[51],E,R[75],0,[[["self"]],[[R[42],[R[67]]],[R[67]]]]],[11,R[53],E,R[76],0,[[["self"],[R[67]]],[[R[42],[R[68]]],[R[68]]]]],[11,R[77],E,R[78],0,[[["self"],["into",[R[69]]],[R[69]]]]],[11,R[79],E,R[80],0,[[["self"],[R[67]]],[[R[42],[R[68]]],[R[68]]]]],[11,R[55],E,R[70],1,[[["self"],["f64"]],[[R[65]],[R[42],[R[65]]]]]],[11,R[71],E,R[72],1,[[["self"],["f64"]],[[R[65]],[R[42],[R[65]]]]]],[11,R[57],E,R[73],1,[[[R[65]],["self"]],[R[42]]]],[11,R[52],E,R[74],1,[[[R[65]],["self"]],[[R[42],[R[66]]],[R[66]]]]],[11,R[51],E,R[75],1,[[["self"]],[[R[42],[R[67]]],[R[67]]]]],[11,R[53],E,R[76],1,[[["self"],[R[67]]],[[R[42],[R[68]]],[R[68]]]]],[11,R[77],E,R[78],1,[[["self"],["into",[R[69]]],[R[69]]]]],[11,R[79],E,R[80],1,[[["self"],[R[67]]],[[R[42],[R[68]]],[R[68]]]]],[11,"add_box",E,"Add a box with a starting point and side lengths from that…",1,[[["self"]],[[R[42],[R[81]]],[R[81]]]]],[11,R[82],E,"Add a sphere with a centroid and radius.",1,[[["self"],["f64"]],[[R[42],[R[81]]],[R[81]]]]],[11,"add_sphere_section",E,"Add an angular section of a sphere. The polar angles are…",1,[[["self"],["f64"]],[[R[42],[R[81]]],[R[81]]]]],[11,"add_torus_experimental",E,"Add a torus to the model. `# use rgmsh::{Gmsh,…",1,[[["self"],["torus"]],[[R[42],[R[81]]],[R[81]]]]],[11,R[83],E,"Add a torus with a centroid and radii values…",1,[[["self"]],[[R[42],[R[81]]],[R[81]]]]],[11,"add_torus_section",E,"Add an angular torus section using the main torus radius.…",1,[[["self"],["f64"]],[[R[42],[R[81]]],[R[81]]]]],[11,"create",E,R[84],0,[[["gmsh"],["str"]],[R[42]]]],[11,"remove",E,R[85],0,[[],[R[42]]]],[11,R[86],E,R[87],0,[[["self"]],[R[42]]]],[11,R[58],E,R[88],0,[[["self"]],[R[42]]]],[11,R[89],E,R[90],0,[[["self"],["i32"]],[R[42]]]],[11,"create",E,R[84],1,[[["gmsh"],["str"]],[R[42]]]],[11,"remove",E,R[85],1,[[],[R[42]]]],[11,R[86],E,R[87],1,[[["self"]],[R[42]]]],[11,R[58],E,R[88],1,[[["self"]],[R[42]]]],[11,R[89],E,R[90],1,[[["self"],["i32"]],[R[42]]]],[0,"examples","rgmsh","Basic to advanced examples.",N,N],[0,"t1","rgmsh::examples","Models and geometry basics.",N,N],[0,"t2",E,"Geometry transformations, extrusions and physical groups.",N,N],[6,R[91],"rgmsh",R[92],N,N],[11,"initialize",E,"Create the main Gmsh object. All API functions are…",3,[[],[R[42]]]],[11,"create_native_model",E,"Make a new model using the built-in Gmsh geometry kernel",3,[[["str"],["self"]],[[R[93]],[R[42],[R[93]]]]]],[11,"create_occ_model",E,"Make a new model using the OpenCASCADE geometry kernel",3,[[["str"],["self"]],[[R[42],[R[94]]],[R[94]]]]],[11,"get_number_option",E,"Get a numeric option.",3,[[["str"],["self"]],[[R[42],["f64"]],["f64"]]]],[11,"set_number_option",E,"Set a numeric option.",3,[[["str"],["self"],["f64"]],[R[42]]]],[11,"get_string_option",E,"Get a string option.",3,[[["str"],["self"]],[[R[42],["string"]],["string"]]]],[11,"set_string_option",E,"Set a string option.",3,[[["str"],["self"]],[R[42]]]],[14,"add_points",E,"Add points to a geometry model inline.",N,N],[11,"into",R[64],E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[95],E,E,0,[[[U]],[R[97]]]],[11,R[96],E,E,0,[[],[R[97]]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,R[98],E,E,0,[[["self"]],[T]]],[11,R[99],E,E,0,[[["self"]],["typeid"]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[95],E,E,1,[[[U]],[R[97]]]],[11,R[96],E,E,1,[[],[R[97]]]],[11,"borrow",E,E,1,[[["self"]],[T]]],[11,R[98],E,E,1,[[["self"]],[T]]],[11,R[99],E,E,1,[[["self"]],["typeid"]]],[11,"into","rgmsh",E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[95],E,E,3,[[[U]],[R[97]]]],[11,R[96],E,E,3,[[],[R[97]]]],[11,"borrow",E,E,3,[[["self"]],[T]]],[11,R[98],E,E,3,[[["self"]],[T]]],[11,R[99],E,E,3,[[["self"]],["typeid"]]],[11,"into",R[100],E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"to_string",E,E,2,[[["self"]],["string"]]],[11,R[95],E,E,2,[[[U]],[R[97]]]],[11,R[96],E,E,2,[[],[R[97]]]],[11,"borrow",E,E,2,[[["self"]],[T]]],[11,R[98],E,E,2,[[["self"]],[T]]],[11,R[99],E,E,2,[[["self"]],["typeid"]]],[11,"into",R[43],E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[95],E,E,4,[[[U]],[R[97]]]],[11,R[96],E,E,4,[[],[R[97]]]],[11,"borrow",E,E,4,[[["self"]],[T]]],[11,R[98],E,E,4,[[["self"]],[T]]],[11,R[99],E,E,4,[[["self"]],["typeid"]]],[11,"into",R[64],E,7,[[],[U]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[102],E,E,7,[[["self"]],[T]]],[11,R[101],E,E,7,[[["self"],[T]]]],[11,R[95],E,E,7,[[[U]],[R[97]]]],[11,R[96],E,E,7,[[],[R[97]]]],[11,"borrow",E,E,7,[[["self"]],[T]]],[11,R[98],E,E,7,[[["self"]],[T]]],[11,R[99],E,E,7,[[["self"]],["typeid"]]],[11,"into",E,E,8,[[],[U]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[102],E,E,8,[[["self"]],[T]]],[11,R[101],E,E,8,[[["self"],[T]]]],[11,R[95],E,E,8,[[[U]],[R[97]]]],[11,R[96],E,E,8,[[],[R[97]]]],[11,"borrow",E,E,8,[[["self"]],[T]]],[11,R[98],E,E,8,[[["self"]],[T]]],[11,R[99],E,E,8,[[["self"]],["typeid"]]],[11,"into",E,E,9,[[],[U]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[102],E,E,9,[[["self"]],[T]]],[11,R[101],E,E,9,[[["self"],[T]]]],[11,R[95],E,E,9,[[[U]],[R[97]]]],[11,R[96],E,E,9,[[],[R[97]]]],[11,"borrow",E,E,9,[[["self"]],[T]]],[11,R[98],E,E,9,[[["self"]],[T]]],[11,R[99],E,E,9,[[["self"]],["typeid"]]],[11,"into",E,E,10,[[],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[102],E,E,10,[[["self"]],[T]]],[11,R[101],E,E,10,[[["self"],[T]]]],[11,R[95],E,E,10,[[[U]],[R[97]]]],[11,R[96],E,E,10,[[],[R[97]]]],[11,"borrow",E,E,10,[[["self"]],[T]]],[11,R[98],E,E,10,[[["self"]],[T]]],[11,R[99],E,E,10,[[["self"]],["typeid"]]],[11,"into",E,E,11,[[],[U]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[102],E,E,11,[[["self"]],[T]]],[11,R[101],E,E,11,[[["self"],[T]]]],[11,R[95],E,E,11,[[[U]],[R[97]]]],[11,R[96],E,E,11,[[],[R[97]]]],[11,"borrow",E,E,11,[[["self"]],[T]]],[11,R[98],E,E,11,[[["self"]],[T]]],[11,R[99],E,E,11,[[["self"]],["typeid"]]],[11,"into",E,E,12,[[],[U]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[102],E,E,12,[[["self"]],[T]]],[11,R[101],E,E,12,[[["self"],[T]]]],[11,R[95],E,E,12,[[[U]],[R[97]]]],[11,R[96],E,E,12,[[],[R[97]]]],[11,"borrow",E,E,12,[[["self"]],[T]]],[11,R[98],E,E,12,[[["self"]],[T]]],[11,R[99],E,E,12,[[["self"]],["typeid"]]],[11,"into",R[103],E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[102],E,E,5,[[["self"]],[T]]],[11,R[101],E,E,5,[[["self"],[T]]]],[11,R[95],E,E,5,[[[U]],[R[97]]]],[11,R[96],E,E,5,[[],[R[97]]]],[11,"borrow",E,E,5,[[["self"]],[T]]],[11,R[98],E,E,5,[[["self"]],[T]]],[11,R[99],E,E,5,[[["self"]],["typeid"]]],[11,"into",E,E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[102],E,E,6,[[["self"]],[T]]],[11,R[101],E,E,6,[[["self"],[T]]]],[11,R[95],E,E,6,[[[U]],[R[97]]]],[11,R[96],E,E,6,[[],[R[97]]]],[11,"borrow",E,E,6,[[["self"]],[T]]],[11,R[98],E,E,6,[[["self"]],[T]]],[11,R[99],E,E,6,[[["self"]],["typeid"]]],[11,"drop","rgmsh",E,3,[[["self"]]]],[11,"clone",R[103],E,5,[[["self"]],["point"]]],[11,"clone",E,E,6,[[["self"]],["torus"]]],[11,"clone",R[64],E,7,[[["self"]],[R[65]]]],[11,"clone",E,E,8,[[["self"]],[R[66]]]],[11,"clone",E,E,9,[[["self"]],[R[67]]]],[11,"clone",E,E,10,[[["self"]],[R[68]]]],[11,"clone",E,E,11,[[["self"]],[R[105]]]],[11,"clone",E,E,12,[[["self"]],[R[81]]]],[11,"cmp",E,E,7,[[["self"],[R[65]]],[R[104]]]],[11,"cmp",E,E,8,[[["self"],[R[66]]],[R[104]]]],[11,"cmp",E,E,9,[[["self"],[R[67]]],[R[104]]]],[11,"cmp",E,E,10,[[[R[68]],["self"]],[R[104]]]],[11,"cmp",E,E,11,[[["self"],[R[105]]],[R[104]]]],[11,"cmp",E,E,12,[[["self"],[R[81]]],[R[104]]]],[11,"eq",E,E,7,[[["self"],[R[65]]],["bool"]]],[11,"ne",E,E,7,[[["self"],[R[65]]],["bool"]]],[11,"eq",E,E,8,[[["self"],[R[66]]],["bool"]]],[11,"ne",E,E,8,[[["self"],[R[66]]],["bool"]]],[11,"eq",E,E,9,[[["self"],[R[67]]],["bool"]]],[11,"ne",E,E,9,[[["self"],[R[67]]],["bool"]]],[11,"eq",E,E,10,[[[R[68]],["self"]],["bool"]]],[11,"ne",E,E,10,[[[R[68]],["self"]],["bool"]]],[11,"eq",E,E,11,[[["self"],[R[105]]],["bool"]]],[11,"ne",E,E,11,[[["self"],[R[105]]],["bool"]]],[11,"eq",E,E,12,[[["self"],[R[81]]],["bool"]]],[11,"ne",E,E,12,[[["self"],[R[81]]],["bool"]]],[11,R[106],E,E,7,[[["self"],[R[65]]],[["option",[R[104]]],[R[104]]]]],[11,"lt",E,E,7,[[["self"],[R[65]]],["bool"]]],[11,"le",E,E,7,[[["self"],[R[65]]],["bool"]]],[11,"gt",E,E,7,[[["self"],[R[65]]],["bool"]]],[11,"ge",E,E,7,[[["self"],[R[65]]],["bool"]]],[11,R[106],E,E,8,[[["self"],[R[66]]],[["option",[R[104]]],[R[104]]]]],[11,"lt",E,E,8,[[["self"],[R[66]]],["bool"]]],[11,"le",E,E,8,[[["self"],[R[66]]],["bool"]]],[11,"gt",E,E,8,[[["self"],[R[66]]],["bool"]]],[11,"ge",E,E,8,[[["self"],[R[66]]],["bool"]]],[11,R[106],E,E,9,[[["self"],[R[67]]],[["option",[R[104]]],[R[104]]]]],[11,"lt",E,E,9,[[["self"],[R[67]]],["bool"]]],[11,"le",E,E,9,[[["self"],[R[67]]],["bool"]]],[11,"gt",E,E,9,[[["self"],[R[67]]],["bool"]]],[11,"ge",E,E,9,[[["self"],[R[67]]],["bool"]]],[11,R[106],E,E,10,[[[R[68]],["self"]],[["option",[R[104]]],[R[104]]]]],[11,"lt",E,E,10,[[[R[68]],["self"]],["bool"]]],[11,"le",E,E,10,[[[R[68]],["self"]],["bool"]]],[11,"gt",E,E,10,[[[R[68]],["self"]],["bool"]]],[11,"ge",E,E,10,[[[R[68]],["self"]],["bool"]]],[11,R[106],E,E,11,[[["self"],[R[105]]],[["option",[R[104]]],[R[104]]]]],[11,"lt",E,E,11,[[["self"],[R[105]]],["bool"]]],[11,"le",E,E,11,[[["self"],[R[105]]],["bool"]]],[11,"gt",E,E,11,[[["self"],[R[105]]],["bool"]]],[11,"ge",E,E,11,[[["self"],[R[105]]],["bool"]]],[11,R[106],E,E,12,[[["self"],[R[81]]],[["option",[R[104]]],[R[104]]]]],[11,"lt",E,E,12,[[["self"],[R[81]]],["bool"]]],[11,"le",E,E,12,[[["self"],[R[81]]],["bool"]]],[11,"gt",E,E,12,[[["self"],[R[81]]],["bool"]]],[11,"ge",E,E,12,[[["self"],[R[81]]],["bool"]]],[11,"fmt",R[100],E,2,[[[R[107]],["self"]],[R[97]]]],[11,"fmt",E,E,2,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",R[103],E,5,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",E,E,6,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",R[64],E,7,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",E,E,8,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",E,E,9,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",E,E,10,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",E,E,11,[[["self"],[R[107]]],[R[97]]]],[11,"fmt",E,E,12,[[["self"],[R[107]]],[R[97]]]],[11,"neg",E,"Reverse the curve's direction.",8,[[],["self"]]]],"p":[[3,R[60]],[3,R[62]],[4,R[22]],[3,"Gmsh"],[3,"Gui"],[3,"Point"],[3,"Torus"],[3,"PointTag"],[3,"CurveTag"],[3,"WireTag"],[3,R[108]],[3,"ShellTag"],[3,R[109]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);