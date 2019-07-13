Search.setIndex({docnames:["README","benchmark","broadcast","common","convolution","coords","demo/interop","demo/multigpu","demo/segmentation","generalized_sparse_conv","index","issues","nonlinearity","normalization","overview","pooling","quick_start","source/MinkowskiEngine","source/MinkowskiEngine.modules","source/MinkowskiEngine.utils","source/modules","source/setup","source/tests","sparse_tensor","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["README.md","benchmark.md","broadcast.rst","common.rst","convolution.rst","coords.rst","demo/interop.rst","demo/multigpu.md","demo/segmentation.rst","generalized_sparse_conv.rst","index.rst","issues.md","nonlinearity.rst","normalization.rst","overview.md","pooling.rst","quick_start.md","source/MinkowskiEngine.rst","source/MinkowskiEngine.modules.rst","source/MinkowskiEngine.utils.rst","source/modules.rst","source/setup.rst","source/tests.rst","sparse_tensor.rst","utils.rst"],objects:{"":{MinkowskiEngine:[17,0,0,"-"],tests:[22,0,0,"-"]},"MinkowskiEngine.Common":{KernelGenerator:[17,1,1,""],MinkowskiModuleBase:[17,1,1,""],RegionType:[17,1,1,""],convert_region_type:[17,4,1,""],convert_to_int_list:[17,4,1,""],convert_to_int_tensor:[17,4,1,""],get_kernel_volume:[17,4,1,""],get_postfix:[17,4,1,""],prep_args:[17,4,1,""],save_ctx:[17,4,1,""]},"MinkowskiEngine.Common.KernelGenerator":{get_kernel:[17,2,1,""]},"MinkowskiEngine.Common.RegionType":{CUSTOM:[17,3,1,""],HYBRID:[17,3,1,""],HYPERCROSS:[17,3,1,""],HYPERCUBE:[17,3,1,""]},"MinkowskiEngine.CoordsKey":{__init__:[5,2,1,""],getKey:[5,2,1,""],getTensorStride:[5,2,1,""],setKey:[5,2,1,""],setTensorStride:[5,2,1,""]},"MinkowskiEngine.CoordsManager":{__init__:[5,2,1,""],get_coo_broadcast_coords:[5,2,1,""],get_coords:[5,2,1,""],get_coords_key:[5,2,1,""],get_coords_size_by_coords_key:[5,2,1,""],get_kernel_map:[5,2,1,""],get_mapping_by_coords_key:[5,2,1,""],get_mapping_by_tensor_strides:[5,2,1,""],get_row_indices_per_batch:[5,2,1,""],initialize:[5,2,1,""],initialize_enforce:[5,2,1,""],permute_label:[5,2,1,""]},"MinkowskiEngine.KernelGenerator":{__init__:[3,2,1,""],get_kernel:[3,2,1,""]},"MinkowskiEngine.MinkowskiAvgPooling":{__init__:[15,2,1,""]},"MinkowskiEngine.MinkowskiBatchNorm":{__init__:[13,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast":{AbstractMinkowskiBroadcast:[17,1,1,""],MinkowskiBroadcast:[17,1,1,""],MinkowskiBroadcastAddition:[17,1,1,""],MinkowskiBroadcastConcatenation:[17,1,1,""],MinkowskiBroadcastFunction:[17,1,1,""],MinkowskiBroadcastMultiplication:[17,1,1,""],OperationType:[17,1,1,""],__init__:[2,2,1,""],operation_type_to_int:[17,4,1,""]},"MinkowskiEngine.MinkowskiBroadcast.AbstractMinkowskiBroadcast":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.MinkowskiBroadcast":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.MinkowskiBroadcastConcatenation":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.MinkowskiBroadcastFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiBroadcast.OperationType":{ADDITION:[17,3,1,""],MULTIPLICATION:[17,3,1,""]},"MinkowskiEngine.MinkowskiBroadcastAddition":{__init__:[2,2,1,""]},"MinkowskiEngine.MinkowskiBroadcastConcatenation":{__init__:[2,2,1,""]},"MinkowskiEngine.MinkowskiBroadcastMultiplication":{__init__:[2,2,1,""]},"MinkowskiEngine.MinkowskiCELU":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiConvolution":{MinkowskiConvolution:[17,1,1,""],MinkowskiConvolutionBase:[17,1,1,""],MinkowskiConvolutionFunction:[17,1,1,""],MinkowskiConvolutionTranspose:[17,1,1,""],MinkowskiConvolutionTransposeFunction:[17,1,1,""],__init__:[4,2,1,""]},"MinkowskiEngine.MinkowskiConvolution.MinkowskiConvolutionBase":{forward:[17,2,1,""],reset_parameters:[17,2,1,""]},"MinkowskiEngine.MinkowskiConvolution.MinkowskiConvolutionFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiConvolution.MinkowskiConvolutionTransposeFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiConvolutionTranspose":{__init__:[4,2,1,""]},"MinkowskiEngine.MinkowskiCoords":{CoordsKey:[17,1,1,""],CoordsManager:[17,1,1,""],initialize_nthreads:[17,4,1,""]},"MinkowskiEngine.MinkowskiCoords.CoordsKey":{getKey:[17,2,1,""],getTensorStride:[17,2,1,""],setKey:[17,2,1,""],setTensorStride:[17,2,1,""]},"MinkowskiEngine.MinkowskiCoords.CoordsManager":{get_coo_broadcast_coords:[17,2,1,""],get_coords:[17,2,1,""],get_coords_key:[17,2,1,""],get_coords_size_by_coords_key:[17,2,1,""],get_kernel_map:[17,2,1,""],get_mapping_by_coords_key:[17,2,1,""],get_mapping_by_tensor_strides:[17,2,1,""],get_row_indices_per_batch:[17,2,1,""],initialize:[17,2,1,""],initialize_enforce:[17,2,1,""],permute_label:[17,2,1,""]},"MinkowskiEngine.MinkowskiDropout":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiFunctional":{relu:[17,4,1,""]},"MinkowskiEngine.MinkowskiGlobalPooling":{__init__:[15,2,1,""]},"MinkowskiEngine.MinkowskiInstanceNorm":{__init__:[13,2,1,""],reset_parameters:[13,2,1,""]},"MinkowskiEngine.MinkowskiMaxPooling":{__init__:[15,2,1,""]},"MinkowskiEngine.MinkowskiNetwork":{MinkowskiNetwork:[17,1,1,""]},"MinkowskiEngine.MinkowskiNetwork.MinkowskiNetwork":{forward:[17,2,1,""],get_index_map:[17,2,1,""],init:[17,2,1,""],permute_feature:[17,2,1,""],permute_label:[17,2,1,""]},"MinkowskiEngine.MinkowskiNonlinearity":{MinkowskiCELU:[17,1,1,""],MinkowskiDropout:[17,1,1,""],MinkowskiModuleBase:[17,1,1,""],MinkowskiPReLU:[17,1,1,""],MinkowskiReLU:[17,1,1,""],MinkowskiSELU:[17,1,1,""],MinkowskiSigmoid:[17,1,1,""],MinkowskiSoftmax:[17,1,1,""],MinkowskiTanh:[17,1,1,""],MinkowskiThreshold:[17,1,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiCELU":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiDropout":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiModuleBase":{MODULE:[17,3,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiPReLU":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiReLU":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiSELU":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiSigmoid":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiSoftmax":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiTanh":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNonlinearity.MinkowskiThreshold":{MODULE:[17,3,1,""]},"MinkowskiEngine.MinkowskiNormalization":{MinkowskiBatchNorm:[17,1,1,""],MinkowskiInstanceNorm:[17,1,1,""],MinkowskiInstanceNormFunction:[17,1,1,""],MinkowskiStableInstanceNorm:[17,1,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiBatchNorm":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiInstanceNorm":{forward:[17,2,1,""],reset_parameters:[17,2,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiInstanceNormFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiNormalization.MinkowskiStableInstanceNorm":{forward:[17,2,1,""],reset_parameters:[17,2,1,""]},"MinkowskiEngine.MinkowskiOps":{MinkowskiLinear:[17,1,1,""],cat:[17,4,1,""]},"MinkowskiEngine.MinkowskiOps.MinkowskiLinear":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPReLU":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiPooling":{MinkowskiAvgPooling:[17,1,1,""],MinkowskiAvgPoolingFunction:[17,1,1,""],MinkowskiGlobalPooling:[17,1,1,""],MinkowskiGlobalPoolingFunction:[17,1,1,""],MinkowskiMaxPooling:[17,1,1,""],MinkowskiMaxPoolingFunction:[17,1,1,""],MinkowskiPoolingBase:[17,1,1,""],MinkowskiPoolingTranspose:[17,1,1,""],MinkowskiPoolingTransposeFunction:[17,1,1,""],MinkowskiSumPooling:[17,1,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiAvgPoolingFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiGlobalPooling":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiGlobalPoolingFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiMaxPooling":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiMaxPoolingFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiPoolingBase":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiPoolingTranspose":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPooling.MinkowskiPoolingTransposeFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPoolingTranspose":{__init__:[15,2,1,""]},"MinkowskiEngine.MinkowskiPruning":{MinkowskiPruning:[17,1,1,""],MinkowskiPruningFunction:[17,1,1,""]},"MinkowskiEngine.MinkowskiPruning.MinkowskiPruning":{forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiPruning.MinkowskiPruningFunction":{backward:[17,2,1,""],forward:[17,2,1,""]},"MinkowskiEngine.MinkowskiReLU":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiSELU":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiSigmoid":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiSoftmax":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiSumPooling":{__init__:[15,2,1,""]},"MinkowskiEngine.MinkowskiTanh":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.MinkowskiThreshold":{MODULE:[12,3,1,""],__init__:[12,2,1,""]},"MinkowskiEngine.RegionType":{CUSTOM:[3,3,1,""],HYBRID:[3,3,1,""],HYPERCROSS:[3,3,1,""],HYPERCUBE:[3,3,1,""]},"MinkowskiEngine.SparseTensor":{SparseTensor:[23,1,1,""]},"MinkowskiEngine.SparseTensor.SparseTensor":{C:[23,2,1,""],D:[23,2,1,""],F:[23,2,1,""],__init__:[23,2,1,""],coords:[23,2,1,""],cpu:[23,2,1,""],device:[23,2,1,""],dtype:[23,2,1,""],feats:[23,2,1,""],getKey:[23,2,1,""],get_device:[23,2,1,""],size:[23,2,1,""],stride:[23,2,1,""],tensor_stride:[23,2,1,""],to:[23,2,1,""]},"MinkowskiEngine.modules":{resnet_block:[18,0,0,"-"],senet_block:[18,0,0,"-"]},"MinkowskiEngine.modules.resnet_block":{BasicBlock:[18,1,1,""],Bottleneck:[18,1,1,""]},"MinkowskiEngine.modules.resnet_block.BasicBlock":{expansion:[18,3,1,""],forward:[18,2,1,""]},"MinkowskiEngine.modules.resnet_block.Bottleneck":{expansion:[18,3,1,""],forward:[18,2,1,""]},"MinkowskiEngine.modules.senet_block":{SEBasicBlock:[18,1,1,""],SEBottleneck:[18,1,1,""],SELayer:[18,1,1,""]},"MinkowskiEngine.modules.senet_block.SEBasicBlock":{forward:[18,2,1,""]},"MinkowskiEngine.modules.senet_block.SEBottleneck":{forward:[18,2,1,""]},"MinkowskiEngine.modules.senet_block.SELayer":{forward:[18,2,1,""]},"MinkowskiEngine.utils":{SparseCollation:[24,1,1,""],collation:[19,0,0,"-"],gradcheck:[19,0,0,"-"],sparse_quantize:[24,4,1,""],voxelization:[19,0,0,"-"]},"MinkowskiEngine.utils.SparseCollation":{__init__:[24,2,1,""]},"MinkowskiEngine.utils.collation":{SparseCollation:[19,1,1,""],sparse_collate:[19,4,1,""]},"MinkowskiEngine.utils.gradcheck":{gradcheck:[19,4,1,""]},"MinkowskiEngine.utils.voxelization":{fnv_hash_vec:[19,4,1,""],ravel_hash_vec:[19,4,1,""],sparse_quantize:[19,4,1,""]},"tests.broadcast":{TestBroadcast:[22,1,1,""]},"tests.broadcast.TestBroadcast":{test_broadcast:[22,2,1,""],test_broadcast_gpu:[22,2,1,""]},"tests.common":{data_loader:[22,4,1,""],get_coords:[22,4,1,""]},"tests.conv":{TestConvolution:[22,1,1,""],TestConvolutionTranspose:[22,1,1,""]},"tests.conv.TestConvolution":{test:[22,2,1,""],test_gpu:[22,2,1,""]},"tests.conv.TestConvolutionTranspose":{test:[22,2,1,""],test_gpu:[22,2,1,""]},"tests.coords":{Test:[22,1,1,""]},"tests.coords.Test":{test_coords_key:[22,2,1,""],test_coords_manager:[22,2,1,""],test_hash:[22,2,1,""]},"tests.norm":{TestNormalization:[22,1,1,""]},"tests.norm.TestNormalization":{test_inst_norm:[22,2,1,""],test_inst_norm_gpu:[22,2,1,""]},"tests.pool":{TestPooling:[22,1,1,""]},"tests.pool.TestPooling":{test_avgpooling:[22,2,1,""],test_avgpooling_gpu:[22,2,1,""],test_global_avgpool:[22,2,1,""],test_maxpooling:[22,2,1,""],test_sumpooling:[22,2,1,""],test_unpool:[22,2,1,""],test_unpooling_gpu:[22,2,1,""]},"tests.pruning":{TestPooling:[22,1,1,""]},"tests.pruning.TestPooling":{test_pruning:[22,2,1,""]},"tests.voxelization":{TestGPUVoxelization:[22,1,1,""]},"tests.voxelization.TestGPUVoxelization":{test:[22,2,1,""]},MinkowskiEngine:{Common:[17,0,0,"-"],CoordsKey:[5,1,1,""],CoordsManager:[5,1,1,""],KernelGenerator:[3,1,1,""],MinkowskiAvgPooling:[15,1,1,""],MinkowskiBatchNorm:[13,1,1,""],MinkowskiBroadcast:[17,0,0,"-"],MinkowskiBroadcastAddition:[2,1,1,""],MinkowskiBroadcastConcatenation:[2,1,1,""],MinkowskiBroadcastMultiplication:[2,1,1,""],MinkowskiCELU:[12,1,1,""],MinkowskiConvolution:[17,0,0,"-"],MinkowskiConvolutionTranspose:[4,1,1,""],MinkowskiCoords:[17,0,0,"-"],MinkowskiDropout:[12,1,1,""],MinkowskiFunctional:[17,0,0,"-"],MinkowskiGlobalPooling:[15,1,1,""],MinkowskiInstanceNorm:[13,1,1,""],MinkowskiMaxPooling:[15,1,1,""],MinkowskiNetwork:[17,0,0,"-"],MinkowskiNonlinearity:[17,0,0,"-"],MinkowskiNormalization:[17,0,0,"-"],MinkowskiOps:[17,0,0,"-"],MinkowskiPReLU:[12,1,1,""],MinkowskiPooling:[17,0,0,"-"],MinkowskiPoolingTranspose:[15,1,1,""],MinkowskiPruning:[17,0,0,"-"],MinkowskiReLU:[12,1,1,""],MinkowskiSELU:[12,1,1,""],MinkowskiSigmoid:[12,1,1,""],MinkowskiSoftmax:[12,1,1,""],MinkowskiSumPooling:[15,1,1,""],MinkowskiTanh:[12,1,1,""],MinkowskiThreshold:[12,1,1,""],RegionType:[3,1,1,""],SparseTensor:[17,0,0,"-"],modules:[18,0,0,"-"],utils:[19,0,0,"-"]},tests:{broadcast:[22,0,0,"-"],common:[22,0,0,"-"],conv:[22,0,0,"-"],coords:[22,0,0,"-"],norm:[22,0,0,"-"],pool:[22,0,0,"-"],pruning:[22,0,0,"-"],voxelization:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"5cm":1,"abstract":17,"boolean":17,"break":9,"case":[9,11,22,23],"class":[2,4,5,6,7,9,10,12,13,14,15,17,18,19,22,23],"default":[19,23,24],"enum":17,"export":11,"final":[7,8],"float":[19,24],"function":[7,8,10,14,17,18,19],"import":[1,6,7,14],"int":[2,4,13,15,19,23,24],"new":[6,7,17,23],"return":[5,6,7,14,15,17,19],"static":17,"super":[7,14],"true":[4,13,14,15,17,19,22,24],"try":11,"while":[17,18],For:[1,2,4,11,14,15,17],The:[0,2,4,6,7,8,9,10,11,14,17,19,23],Then:[6,9,11,14],Use:16,Using:14,__init__:[2,3,4,5,6,7,12,13,14,15,23,24],_build:0,_znk13coordsmanagerilh5eie8tostringb5cxx11ev:11,abc:17,about:19,abov:[4,6,9,11,16,17,23],absolut:19,abstractminkowskibroadcast:17,accept:17,access:[6,17,23],accordingli:6,accur:[5,12,13,24],achiev:9,across:1,activ:[11,12,14,16,17],adapt:6,add:[2,17],addit:[2,9,17,23],address:19,adopt:9,affin:[13,17],after:[8,14,19],afterward:[17,18],again:11,against:19,algorithm:[1,8],alia:[12,17,23],all:[1,2,4,6,9,10,14,15,17,18,19,23],allclos:19,along:11,alreadi:23,also:[8,9,17],alter:[19,24],altern:[15,17],although:[17,18],amort:1,anaconda:[11,16],analyt:19,ani:[17,19],anoth:[9,11],apart:4,api:[10,14],apidoc:0,append:[7,8],appli:10,applic:[9,11],apt:14,arbitrari:9,arbitrarili:9,arg:[2,4,12,13,15,17,19,23,24],argument:[2,4,17],arr:19,arrai:[8,23],art:9,associ:[9,17,19,23,24],assum:11,atol:19,attribut:17,auto:[10,14],autograd:17,automat:[8,11,23],averag:[1,6,15,17],awai:[4,15,17],axes:9,axi:[3,4,9,15],axis_typ:[3,4,17],b_1:[9,17,23],b_i:[9,17,23],b_n:[9,17,23],backward:[1,7,17],base:[17,18,19,22],bashrc:11,basic:[9,17,23],basicblock:18,batch:[5,6,8,9,10,13,15,17,19,23,24],batch_index:22,batch_indic:[5,17],batch_siz:[15,22],batchnorm1d:[13,17],becaus:19,becom:9,befor:8,begin:[9,17,23],behaviour:19,below:[19,24],benchmark:[8,10],between:19,bia:[4,17],bioconda:[11,14,16],bmatrix:[9,17,23],bn1:14,bn2:14,bn_momentum:18,bool:[4,15,19,24],bottleneck:18,broadcast:[2,14,17,20],cach:23,call:[8,11,17,18],can:[1,2,7,8,9,11,14,17,23],cannot:17,cardin:[15,17],care:[17,18],cat:17,cdot:[2,9,17,23],cell:[19,24],celu:[12,17],center:[9,17],chang:[1,6,19],channel:[4,15,17,18],check:[19,24],checkout:14,classif:10,clean:11,clone:[14,16],cloud:15,cluster:11,code:11,collat:[17,20,24],color:8,column:[17,23],com:[14,16],common:[9,10,14,20],comon:3,complet:[6,7,8],comput:[9,14,15,17,18,19,23],concaten:[2,8,9,17,23],conda:16,condit:19,config:8,consist:[0,17,23],constant:[15,17],content:20,context:17,contribut:[15,17],conv1:14,conv2:14,conv:[1,20],conv_transpos:17,convent:[9,15,17],convert:[6,19],convert_region_typ:17,convert_to_int_list:17,convert_to_int_tensor:17,convnet:[9,14,17],convolut:[3,4,10,14,15,17],coo:[9,17,23],coord:[5,6,7,8,14,15,17,19,20,23,24],coordin:[2,4,8,9,10,15,17,19,23,24],coordinates_:8,coords_kei:[5,17,23],coords_man:[5,17],coords_manag:[17,23],coordskei:[4,10,15,17,23],coordsmanag:[10,17,23],copi:[2,10,17],correct:[11,16],correspond:[7,17],could:[6,23],cppextens:11,cpu:[11,17,23],cpu_onli:16,creat:[3,6,7,8,11,16,19,23],criterion:[6,7,14],cross:3,crossentropyloss:[6,7,14],crucial:9,ctx:17,cublas_v2:11,cuda:[7,14,23],cudatoolkit:[11,16],current:[7,8,9,17,23],custom:[3,4,15,17],cvpr:[9,14],d_f:[6,17,19,23,24],data:[6,7,8,9,14,22],data_load:[6,7,14,22],ddot:[9,17,23],debug:19,deconvolut:[4,17],def:[6,7,14],defin:[2,3,4,7,9,14,15,17,18],defini:[4,17],definit:[4,17],demo:[6,10],dens:[9,15,17],depend:[15,16,17],design:19,detail:[3,7,8,13,14,17],dev:14,devic:[6,8,10,17,23],did:17,differ:[1,3,4,11,17,19,23],differenti:[10,14,17],dilat:[1,3,4,5,6,7,9,14,15,17,18],dim:[7,17],dimens:[1,2,3,4,6,7,9,13,14,15,17,18,19,23,24],dimension:[9,15,17,19,23,24],directori:[11,14,16],dirnam:11,disassoci:[9,17,23],divid:[15,17],document:[16,19],doe:[4,15,17,19,24],doesn:11,doing:[8,23],done:[2,8,17,23],doubl:19,doubletensor:23,down:9,download:[8,16],downsampl:18,dropout:[12,17],dtype:[17,23],due:[9,17],duplic:17,dure:[6,7,8,17],dynam:[14,23],each:[0,1,3,4,6,7,9,15,17,19,23,24],eah:[19,24],easi:6,effect:9,either:[19,24],elem:15,element:[2,4,15,17,19],empti:9,enabl:16,encompass:9,encount:11,end:[9,17,23],enforce_cr:[5,17],engin:[1,9,10],enough:11,entir:11,enumer:17,environ:16,eps:[13,17,19],equal:[17,23],equat:[9,17,23],equival:[15,17],error:11,even:[4,9,17],everi:[17,18],exact:19,exampl:[2,4,7,8,10,11,15,16,19,24],examplenetwork:[6,7,14],except:19,excess:11,exist:[9,17],expand:19,expans:18,explicitli:11,extens:9,extract:[6,7,9],face:11,fail:[11,19],failur:19,fals:[1,3,4,5,6,7,14,17,19,24],fast:11,fatal:11,feat:[6,7,8,14,17,19,23,24],featrues_:8,featur:[2,5,7,8,9,10,15,17,19,23,24],feautr:13,fed:7,feed:[1,7,8],feel:[11,14],ffi:17,field:9,file:0,file_nam:8,find:11,finit:19,first:[1,2,3,6,7,8,9,14,15,17,23],flag:16,float32:17,floattensor:[19,23],floor:8,fnv64:19,fnv:[19,24],fnv_hash_vec:19,follow:[1,7,9,11,14,16,17],format:[0,9,17,23],former:[17,18],formula:17,fortun:14,forward:[1,6,7,8,17,18],found:11,frac:[4,15,17],free:[11,14,17],from:[4,6,7,8,9,17,19,23],func:19,fundament:9,gather:7,gener:[1,4,6,10,11,14,17,19,24],get:[6,7,8,11,17],get_coo_broadcast_coord:[5,17],get_coord:[5,17,22],get_coords_kei:[5,17],get_coords_size_by_coords_kei:[5,17],get_devic:[17,23],get_index_map:17,get_kernel:[3,17],get_kernel_map:[5,17],get_kernel_volum:17,get_mapping_by_coords_kei:[5,17],get_mapping_by_tensor_strid:[5,17],get_postfix:17,get_row_indices_per_batch:[5,17],getkei:[5,17,23],gettensorstrid:[5,17],git:[14,16],github:[11,14,16],give:19,given:[3,4,15,17,19,24],glob_coords_kei:17,global:[2,17],googl:[11,14,16],googlegroup:14,gpu:[10,14],grad_out_feat:17,gradcheck:[17,20],gradient:[17,19],graph:[14,23],grid:[19,24],handl:[9,17,23],has:[4,9,17,19],has_bia:[1,4,6,7,14,17],hash:[19,23,24],hash_typ:[19,24],have:[7,9,11,14,17],help:[5,12,13,19,24],high:15,higher:[9,14],highli:14,hold:19,home:11,hook:[17,18],hotel:[10,16],how:6,howev:[9,11,15,17],hpp:11,http:[14,16],hybrid:[3,17],hypercross:[3,17],hypercub:[3,9,17],hyperrectangl:[19,24],ident:[4,15],ignor:[0,17,18,19,24],ignore_label:[19,24],imag:[2,4,9,15],implement:[4,17],in_channel:[1,4,6,7,14,17],in_coords_kei:[5,17],in_feat:[6,7,14,17],in_feat_channel:22,in_featur:17,in_tensor_strid:[5,17],includ:0,ind:8,index:[0,8,9,10,15,17,23],indic:[5,9,17,19,23,24],indoor:[8,14,16,19,24],ineffici:9,inform:[14,19],init:17,initi:[4,5,12,13,17,24],initialize_enforc:[5,17],initialize_nthread:17,inplac:14,inplan:18,input:[2,4,6,7,8,9,13,14,15,17,19,24],input_featur:17,input_features_glob:17,input_glob:17,insid:[17,23],instal:[8,11],instanc:[9,13,17,18,23],instanti:17,instead:[9,17,18],instruct:[0,16],integ:[19,24],interact:8,interest:9,intern:[9,17,23],intro:10,inttensor:[3,23],investig:9,is_classif:22,is_doubl:19,is_transpos:[3,5,17],issu:[10,14],iter:7,its:9,itself:0,job:11,kei:[5,17,23],kernel:[1,4,9,10,14,15,17],kernel_gener:[4,15,17],kernel_s:[1,3,4,5,6,7,14,15,17],kernelgener:[3,4,15,17],known:9,kwarg:[12,17],label:[5,6,7,8,14,17,19,24],label_tensor_strid:[5,17],land:0,larg:1,last:15,latter:[17,18],layer:[2,4,7,10,13,14,15,17],lceil:[4,17],lead:11,least:[4,15],left:[4,17],length:[4,15,19,24],leq:19,less:19,let:[6,7,9],libopenbla:14,librari:[9,10,11,14],libsparsehash:14,like:[11,14,19],limit:[11,19,24],limit_numpoint:[19,24],line:16,linear:14,list:[3,4,5,8,9,14,15,17,19,23,24],list_of_row_indic:[5,17],load:[8,10],load_fil:8,loader:[7,8,14],local:11,loss:[6,7,14],lvert:19,mai:[0,15,17],make:[0,4,11,14,23],makefil:16,manag:[10,23],mani:[9,17],map:[1,14,17],markdown:0,mathbb:[4,9,17],mathbf:[2,4,9,15,17,23],mathcal:[2,4,9,15,17],matric:9,matrix:[3,4,9,15,17,19,23,24],max:[8,15,17],max_:[15,17],max_label:[5,17,22],mean:7,memori:19,mesh:[2,4,15],method:[3,11],methodnam:22,might:11,min:[6,19],mini:[7,9,17,23],mink:[11,14,16],minkowski:[9,10,16],minkowskiavgpool:[10,17],minkowskiavgpoolingfunct:17,minkowskibatchnorm:[6,7,10,14,17],minkowskibroadcast:[10,20],minkowskibroadcastaddit:[10,17],minkowskibroadcastconcaten:[10,17],minkowskibroadcastfunct:17,minkowskibroadcastmultipl:[10,17],minkowskicelu:[10,17],minkowskiconvolut:[1,6,7,10,14,20],minkowskiconvolutionbas:17,minkowskiconvolutionfunct:17,minkowskiconvolutiontranspos:[1,10,17],minkowskiconvolutiontransposefunct:17,minkowskicoord:20,minkowskidropout:[10,17],minkowskiengin:[1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,23,24],minkowskifunct:20,minkowskiglobalpool:[2,6,7,10,14,17],minkowskiglobalpoolingfunct:17,minkowskiinstancenorm:[10,17],minkowskiinstancenormfunct:17,minkowskilinear:[6,7,14,17],minkowskimaxpool:[10,17],minkowskimaxpoolingfunct:17,minkowskimodulebas:17,minkowskinetwork:[7,14,20],minkowskinonlinear:[10,20],minkowskinorm:[10,20],minkowskiop:20,minkowskipool:[10,20],minkowskipoolingbas:17,minkowskipoolingtranspos:[10,17],minkowskipoolingtransposefunct:17,minkowskiprelu:[10,17],minkowskiprun:20,minkowskipruningfunct:17,minkowskirelu:[6,7,10,14,17],minkowskiselu:[10,17],minkowskisigmoid:[10,17],minkowskisoftmax:[10,17],minkowskistableinstancenorm:17,minkowskisumpool:[10,17],minkowskitanh:[10,17],minkowskithreshold:[10,17],minu:[17,23],miscellan:10,miscellanea:10,model:8,modifi:[0,11],modul:[6,11,12,20],momentum:[13,17],more:[7,8,9,13,14,17,19],most:[4,9,17,23],multi:[10,11,14],multipl:[2,9,10,17],multipli:[2,17],must:[4,14,15,17,23],natur:[9,19],ndarrai:[19,24],necessarili:9,need:[7,14,17,18,23],needs_input_grad:17,net:[1,6,7,14],net_metadata:17,network:[1,2,4,6,7,8,9,15,17,23],neural:[9,14,17,23],next:7,non:[4,9,15,17],none:[3,4,5,15,17,18,19,23,24],norm:20,normal:[8,13,17],note:[1,6,9,17],nueral:1,num_devic:7,num_featur:[13,17],num_nonzero:17,num_thread:[5,17],number:[1,3,4,9,11,15,17,19,23,24],numer:19,numpi:[11,14,16,17,19,23,24],nvcc:[11,14],o3d:8,object:[17,19,23],odd:17,offset:[1,3,4,9,15,17],onc:[8,16],one:[7,11,15,17,18,23],onli:[1,2,9,17],open3d:8,openbla:[11,14,16],oper:[2,9,14,17],operation_typ:17,operation_type_to_int:17,operationtyp:17,optim:[6,7,14],option:[3,4,11,15,19,24],origin:[2,9,15,17],other:[1,17,19],otherwis:17,out:[2,4,9,14,15,17],out_channel:[1,4,6,7,14,17],out_coords_kei:[4,5,15,17],out_feat:[6,7,14,17],out_featur:[7,17],out_grad:17,out_tensor_strid:[5,17],output:[2,4,6,7,9,14,15,17],over:1,overlap:19,overridden:[17,18],packag:[14,20,23],page:[0,1,10,11,14],parallel:[7,8,11],parallel_appli:7,part:9,pass:[1,17,18],path:[8,11,16],pattern:7,pcd:8,pdf:14,per:[5,15,17],percept:9,perform:[9,17,18],permute_featur:17,permute_label:[5,17],perturb:19,pip:[0,8,14],plane:18,pleas:[3,6,7,8,11,14,15,17,19,23,24],point:[1,8,9,15,17,19,23,24],pool:[14,15,17,20],posit:[19,24],post:8,precis:19,pred:8,predefin:9,predict:8,prelu:[12,17],prep_arg:17,prepar:8,pretrain:16,print:14,problem:11,process:[1,8,23],properti:[17,23],propos:9,proven:9,provid:[3,4,9,11,14,15,17,23],prune:20,pseudo:8,put:[17,23],py3:[11,14,16],python3:14,python:[8,11,16,19],pytorch:[7,10,11,13,14,16,17],quantiz:[8,14,19,24],quantization_s:[19,24],quantized_coord:8,question:14,quick:10,rais:19,raise_except:19,rang:[4,6,7,17],rank:8,rare:11,rate:4,ravel:[19,24],ravel_hash_vec:19,rceil:[4,17],read_point_cloud:8,readm:0,recip:[17,18],recommend:14,recommonmark:0,rectangular:3,recurr:9,reduc:[2,15,17],reduct:[2,17,18],refer:[3,6,7,8,15,17,23],region:[3,17],region_offset:[3,4,15,17],region_typ:[3,4,5,17],regiontyp:[4,10,15,17],regist:[17,18],reinstal:11,rel:19,relax:9,relu:[12,14,17],replic:7,replica:10,report:1,repositori:16,repres:[17,23],represent:[9,17,23],request:14,requir:4,requires_grad:19,research:9,reset_paramet:[13,17],resnet_block:[17,20],rest:7,restructuredtext:0,result:16,retriev:17,return_index:[19,24],reus:[1,17,23],right:[4,17],rnn:9,room:[1,10,16],root:14,rotat:8,row:[5,17],rst:0,rtol:19,run:[8,11,17,18],runtest:22,rvert:19,same:[1,2,9,14,17,19,23],satisfi:19,save:[9,17,23],save_ctx:17,scan:9,scannet:[1,8],search:10,sebasicblock:18,sebottleneck:18,second:[1,2,9,17],see:[5,8,11,12,13,16,17,24],seed:22,segment:[9,10,14],selay:18,self:[5,6,7,12,13,14,24],selu:[12,17],semant:[9,10,14,16],senet_block:[17,20],sequenti:[1,6,7],set:[1,4,7,8,9,11,17,19],setkei:[5,17],settensorstrid:[5,17],setup:[11,14,16,20],shallow:6,shape:[2,3,4,9,14,15],share:19,should:[3,4,8,15,17,18],show:6,side:[8,19,24],sigmoid:[12,17],signatur:[5,12,13,24],silent:[17,18],similar:7,simpli:[9,17,23],sinc:[17,18],singl:[7,11],sinput:8,size:[1,3,4,6,9,15,17,19,23,24],small:[1,19],snippet:11,softmax:[12,17],solv:11,some:[8,9,11],sometim:11,sourc:0,soutput:8,sp_tensor:[5,17],space:[2,3,4,9,15,17,19,23,24],spars:[2,4,6,7,8,10,13,14,15,17,19,23],sparse_col:[8,19],sparse_quant:[8,10,14,19],sparse_tensor:17,sparsecol:[10,19],sparseconvnet:1,sparsehash:[11,14,16],sparsetensor:[5,6,7,8,9,10,14,20],sparsiti:9,spatial:[4,9,13,14,15,17,23],spatio:[9,14],special:9,specif:[4,9,15],specifi:4,speech:9,speed:[],sphinx_markdown_t:0,sphinx_rtd_them:0,src:11,standard:[14,17,23],stanfordvl:[14,16],start:10,state:9,step:7,store:17,str:[19,24],stride:[1,3,4,5,6,7,9,14,15,17,18,23],subclass:[17,18],submanifold:9,submit:[11,14],submodul:20,subpackag:20,subtract:[8,19],sudo:14,sum:[15,17],sum_:[4,9,15,17],support:[7,14],sure:[4,11,14,23],symbol:11,system:11,system_error:11,take:[1,2,7,8,17,18,19],tanh:[12,17],target:7,target_devic:7,target_tensor_strid:[5,17],task:9,tempor:[9,14],tensor:[1,2,4,6,7,8,10,13,14,15,17,19,23,24],tensor_strid:[3,4,5,15,17,23],test:[1,20],test_avgpool:22,test_avgpooling_gpu:22,test_broadcast:22,test_broadcast_gpu:22,test_coords_kei:22,test_coords_manag:22,test_global_avgpool:22,test_gpu:22,test_hash:22,test_inst_norm:22,test_inst_norm_gpu:22,test_maxpool:22,test_prun:22,test_sumpool:22,test_unpool:22,test_unpooling_gpu:22,testbroadcast:22,testcas:22,testconvolut:22,testconvolutiontranspos:22,testgpuvoxel:22,testnorm:22,testpool:22,text:[2,4,9,15,17],texttt:19,than:9,them:[17,18],thi:[0,1,2,4,6,7,8,9,11,15,17,18,19,23],those:4,thread:[11,14],threshold:[12,17],thrid:3,through:7,thrust:11,thu:[1,6,9,15,17],time:[1,2,3,4,6,9,15,17,19,23,24],titan:1,toctre:0,toler:19,top:[8,16],torch:[3,6,7,12,13,14,17,18,19,23,24],torchvis:[11,14,16],track_running_stat:[13,17],tradit:9,train:[6,8,10,14],transpos:[4,5,15,17],treat:[17,23],troubl:11,tupl:[7,14,17,19],two:3,txt:14,type:[3,5,12,13,15,17,19,24],typic:[2,9,17],ubuntu:14,uncom:16,undefin:11,understand:23,uniqu:[5,17],unittest:22,unpool:[14,15,17],up_strid:17,upsampl:4,usag:[11,14,19,24],use:[1,7,9,11,14,17,23],use_feat:17,used:[1,2,4,7,15,17,19,24],uses:[3,4,11,14,15],using:[6,11],usr:11,util:[8,10,14,17,20],valid:4,valu:[2,17,19,24],vari:[15,17],variabl:11,variou:1,vdot:[9,17,23],vector:[2,6,9,17,23],veri:6,versa:6,version:[14,16,17,23],via:[17,19,23],vice:6,virtual:16,vision:9,visit:14,visual:8,volum:[15,17],voxel:[1,8,14,17,20,24],voxel_s:8,want:[19,24],warn:0,weight:[8,9,10,16],well:1,were:17,what:23,when:[3,4,6,8,9,11,15,16,17,19,23],where:[2,3,4,9,15,17,19,23,24],wherea:1,whether:[17,19],which:[9,11,17,23],wise:[2,17],within:[9,14,15,17,18,23],without:[11,14],work:[9,10,11],would:[3,14],wrap:8,wrapper:6,write:0,x_1:[9,17,23],x_i:[9,17,23],x_n:[9,17,23],you:[0,4,7,8,11,14,16,19,23,24],your:[11,14],zero:[15,17],zero_grad:6,zip:[7,8]},titles:["Documentation with Sphinx","Benchmark","MinkowskiBroadcast","Miscellaneous Classes","MinkowskiConvolution","Coordinate Management","Working with Pytorch Layers","Multi-GPU Training","Semantic Segmentation","Generalized Sparse Convolution","Welcome to MinkowskiEngine\u2019s documentation!","Common Issues","MinkowskiNonlinearities","MinkowskiNormalization","Minkowski Engine","MinkowskiPooling","Quick Start","MinkowskiEngine package","MinkowskiEngine.modules package","MinkowskiEngine.utils package","MinkowskiEngine","setup module","tests package","SparseTensor","Utility Functions and Classes"],titleterms:{"class":[3,24],"function":24,"new":11,after:11,all:[7,11],anaconda:14,appli:7,automat:0,backward:14,batch:7,benchmark:1,broadcast:22,classif:6,collat:19,common:[11,17,22],compil:[11,14,16],conda:[11,14],content:[0,10,17,18,19,22],conv:22,convolut:[1,9],coord:22,coordin:5,coordskei:5,coordsmanag:5,copi:7,cpu:16,creat:14,cuda:11,cuda_hom:11,curat:0,custom:[0,14],depend:0,devic:7,discuss:14,document:[0,10,14],due:11,engin:14,environ:[11,14],exampl:[6,14],experi:1,failur:11,featur:[6,14],file:11,forc:11,forward:14,from:11,gener:[0,3,9],gpu:7,gradcheck:19,hotel:8,html:0,incorrect:11,indic:10,instal:[0,14,16],issu:11,kernel:3,layer:[1,6],list:[0,11],load:7,manag:5,memori:11,minkowski:14,minkowskiavgpool:15,minkowskibatchnorm:13,minkowskibroadcast:[2,17],minkowskibroadcastaddit:2,minkowskibroadcastconcaten:2,minkowskibroadcastmultipl:2,minkowskicelu:12,minkowskiconvolut:[4,17],minkowskiconvolutiontranspos:4,minkowskicoord:17,minkowskidropout:12,minkowskiengin:[10,17,18,19,20],minkowskienginestanford:[],minkowskifunct:17,minkowskiglobalpool:15,minkowskiinstancenorm:13,minkowskimaxpool:15,minkowskinetwork:17,minkowskinonlinear:[12,17],minkowskinorm:[13,17],minkowskiop:17,minkowskipool:[15,17],minkowskipoolingtranspos:15,minkowskiprelu:12,minkowskiprun:17,minkowskirelu:12,minkowskiselu:12,minkowskisigmoid:12,minkowskisoftmax:12,minkowskisumpool:15,minkowskitanh:12,minkowskithreshold:12,miscellan:3,mismatch:11,modul:[0,17,18,19,21,22],multi:7,multipl:7,network:[14,16],norm:22,object:11,onli:[0,16],oom:11,out:11,packag:[17,18,19,22],pool:22,prune:22,python:14,pytorch:6,quick:[14,16],refer:[9,14],regiontyp:3,replica:7,requir:14,resnet_block:18,room:8,run:[14,16],segment:[8,16],semant:8,senet_block:18,setup:[1,21],simpl:1,singl:1,spars:9,sparse_quant:24,sparsecol:24,sparsetensor:[17,23],sphinx:0,start:[14,16],submodul:[17,18,19,22],subpackag:17,tabl:10,tensor:9,test:22,train:7,unet:1,upgrad:11,using:14,util:[19,24],version:11,virtual:[11,14],voxel:[19,22],websit:0,weight:7,welcom:10,work:6}})