Search.setIndex({docnames:["README","benchmark","broadcast","common","convolution","convolution_on_sparse","coords","demo/interop","demo/modelnet40_classification","demo/multigpu","demo/pointnet","demo/segmentation","demo/sparse_tensor_completion","demo/sparse_tensor_reconstruction","demo/training","guides","index","issues","misc","nonlinearity","normalization","overview","pooling","pruning","quick_start","sparse_tensor","terminology","tutorial/convolution_basic","tutorial/sparse_tensor_basic","union","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["README.md","benchmark.md","broadcast.rst","common.rst","convolution.rst","convolution_on_sparse.rst","coords.rst","demo/interop.rst","demo/modelnet40_classification.rst","demo/multigpu.md","demo/pointnet.md","demo/segmentation.rst","demo/sparse_tensor_completion.rst","demo/sparse_tensor_reconstruction.rst","demo/training.rst","guides.md","index.rst","issues.md","misc.rst","nonlinearity.rst","normalization.rst","overview.md","pooling.rst","pruning.rst","quick_start.md","sparse_tensor.rst","terminology.rst","tutorial/convolution_basic.rst","tutorial/sparse_tensor_basic.rst","union.rst","utils.rst"],objects:{"MinkowskiEngine.CoordsKey":{__init__:[6,1,1,""],getKey:[6,1,1,""],getTensorStride:[6,1,1,""],isKeySet:[6,1,1,""],setKey:[6,1,1,""],setTensorStride:[6,1,1,""]},"MinkowskiEngine.CoordsManager":{__init__:[6,1,1,""],create_coords_key:[6,1,1,""],get_batch_indices:[6,1,1,""],get_batch_size:[6,1,1,""],get_coords:[6,1,1,""],get_coords_map:[6,1,1,""],get_coords_size_by_coords_key:[6,1,1,""],get_kernel_map:[6,1,1,""],get_mapping_by_tensor_strides:[6,1,1,""],get_row_indices_at:[6,1,1,""],get_row_indices_per_batch:[6,1,1,""],get_union_map:[6,1,1,""],initialize:[6,1,1,""],permute_label:[6,1,1,""],print_diagnostics:[6,1,1,""],reduce:[6,1,1,""],set_origin_coords_key:[6,1,1,""],stride:[6,1,1,""],transposed_stride:[6,1,1,""]},"MinkowskiEngine.KernelGenerator":{__init__:[3,1,1,""],get_kernel:[3,1,1,""]},"MinkowskiEngine.MinkowskiAvgPooling":{"double":[22,1,1,""],"float":[22,1,1,""],__init__:[22,1,1,""],cpu:[22,1,1,""],cuda:[22,1,1,""],forward:[22,1,1,""],to:[22,1,1,""],type:[22,1,1,""]},"MinkowskiEngine.MinkowskiBatchNorm":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiBroadcast":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiBroadcastAddition":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiBroadcastConcatenation":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiBroadcastMultiplication":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiCELU":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiConvolution":{"double":[4,1,1,""],"float":[4,1,1,""],__init__:[4,1,1,""],cpu:[4,1,1,""],cuda:[4,1,1,""],forward:[4,1,1,""],to:[4,1,1,""],type:[4,1,1,""]},"MinkowskiEngine.MinkowskiConvolutionTranspose":{"double":[4,1,1,""],"float":[4,1,1,""],__init__:[4,1,1,""],cpu:[4,1,1,""],cuda:[4,1,1,""],forward:[4,1,1,""],to:[4,1,1,""],type:[4,1,1,""]},"MinkowskiEngine.MinkowskiDropout":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiGlobalPooling":{"double":[22,1,1,""],"float":[22,1,1,""],__init__:[22,1,1,""],cpu:[22,1,1,""],cuda:[22,1,1,""],forward:[22,1,1,""],to:[22,1,1,""],type:[22,1,1,""]},"MinkowskiEngine.MinkowskiInstanceNorm":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiMaxPooling":{"double":[22,1,1,""],"float":[22,1,1,""],__init__:[22,1,1,""],cpu:[22,1,1,""],cuda:[22,1,1,""],forward:[22,1,1,""],to:[22,1,1,""],type:[22,1,1,""]},"MinkowskiEngine.MinkowskiPReLU":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiPoolingTranspose":{"double":[22,1,1,""],"float":[22,1,1,""],__init__:[22,1,1,""],cpu:[22,1,1,""],cuda:[22,1,1,""],forward:[22,1,1,""],to:[22,1,1,""],type:[22,1,1,""]},"MinkowskiEngine.MinkowskiPruning":{__init__:[23,1,1,""],forward:[23,1,1,""]},"MinkowskiEngine.MinkowskiReLU":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiSELU":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiSigmoid":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiSoftmax":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiSumPooling":{"double":[22,1,1,""],"float":[22,1,1,""],__init__:[22,1,1,""],cpu:[22,1,1,""],cuda:[22,1,1,""],forward:[22,1,1,""],to:[22,1,1,""],type:[22,1,1,""]},"MinkowskiEngine.MinkowskiSyncBatchNorm":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiTanh":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiThreshold":{MODULE:[19,2,1,""],__init__:[19,1,1,""]},"MinkowskiEngine.MinkowskiUnion":{__init__:[29,1,1,""],forward:[29,1,1,""]},"MinkowskiEngine.RegionType":{CUSTOM:[3,2,1,""],HYBRID:[3,2,1,""],HYPERCROSS:[3,2,1,""],HYPERCUBE:[3,2,1,""]},"MinkowskiEngine.SparseTensor":{SparseTensor:[25,0,1,""]},"MinkowskiEngine.SparseTensor.SparseTensor":{"double":[25,1,1,""],"float":[25,1,1,""],C:[25,1,1,""],D:[25,1,1,""],F:[25,1,1,""],__init__:[25,1,1,""],coordinates_at:[25,1,1,""],coords:[25,1,1,""],cpu:[25,1,1,""],decomposed_coordinates:[25,1,1,""],decomposed_coordinates_and_features:[25,1,1,""],decomposed_features:[25,1,1,""],dense:[25,1,1,""],device:[25,1,1,""],dtype:[25,1,1,""],feats:[25,1,1,""],features_at:[25,1,1,""],get_device:[25,1,1,""],requires_grad:[25,1,1,""],requires_grad_:[25,1,1,""],set_tensor_stride:[25,1,1,""],shape:[25,1,1,""],size:[25,1,1,""],sparse:[25,1,1,""],tensor_stride:[25,1,1,""],to:[25,1,1,""]},"MinkowskiEngine.utils":{SparseCollation:[30,0,1,""],batch_sparse_collate:[30,3,1,""],batched_coordinates:[30,3,1,""],get_coords_map:[30,3,1,""],sparse_collate:[30,3,1,""],sparse_quantize:[30,3,1,""]},"MinkowskiEngine.utils.SparseCollation":{__init__:[30,1,1,""]},MinkowskiEngine:{CoordsKey:[6,0,1,""],CoordsManager:[6,0,1,""],KernelGenerator:[3,0,1,""],MinkowskiAvgPooling:[22,0,1,""],MinkowskiBatchNorm:[20,0,1,""],MinkowskiBroadcast:[2,0,1,""],MinkowskiBroadcastAddition:[2,0,1,""],MinkowskiBroadcastConcatenation:[2,0,1,""],MinkowskiBroadcastMultiplication:[2,0,1,""],MinkowskiCELU:[19,0,1,""],MinkowskiConvolution:[4,0,1,""],MinkowskiConvolutionTranspose:[4,0,1,""],MinkowskiDropout:[19,0,1,""],MinkowskiGlobalPooling:[22,0,1,""],MinkowskiInstanceNorm:[20,0,1,""],MinkowskiMaxPooling:[22,0,1,""],MinkowskiPReLU:[19,0,1,""],MinkowskiPoolingTranspose:[22,0,1,""],MinkowskiPruning:[23,0,1,""],MinkowskiReLU:[19,0,1,""],MinkowskiSELU:[19,0,1,""],MinkowskiSigmoid:[19,0,1,""],MinkowskiSoftmax:[19,0,1,""],MinkowskiSumPooling:[22,0,1,""],MinkowskiSyncBatchNorm:[20,0,1,""],MinkowskiTanh:[19,0,1,""],MinkowskiThreshold:[19,0,1,""],MinkowskiUnion:[29,0,1,""],RegionType:[3,0,1,""],cat:[30,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function"},terms:{"1_i":26,"20l":[],"2_i":26,"5cm":1,"boolean":23,"break":5,"case":[5,9,15,17,18,24,25,26,28],"class":[2,4,5,6,7,8,14,16,19,20,21,22,23,25,29],"default":[4,17,18,22,25,30],"export":[17,18],"final":[9,11,12,13,14,26],"float":[4,14,20,22,25,30],"function":[2,8,9,11,14,16,18,20,21,22,28,29],"import":[1,7,9,14,15,21,30],"int":[2,4,6,8,14,20,22,25,30],"long":[14,30],"new":[4,7,8,9,25,26],"return":[4,6,7,8,9,14,20,21,22,23,25,28,29,30],"super":21,"true":[4,8,14,20,22,23,25,28,29,30],"try":[12,13,15,17,28],"while":[2,4,20,22],For:[1,2,4,9,15,17,18,21,22,26,28,30],Its:[4,20,22],One:[8,12,13,14,28],The:[0,2,4,5,6,7,8,9,11,12,13,14,15,16,17,18,20,21,22,24,25,26,28,29,30],Then:[5,7,17,21],There:[],Use:[],Using:[15,24,26],With:[9,26],__call__:8,__getitem__:14,__init__:[2,3,4,6,7,8,19,20,21,22,23,25,29,30],__iter__:14,_build:0,_n_sampl:8,_sample_nois:14,_sample_x:14,_uniform_to_angl:14,_znk13coordsmanagerilh5eie8tostringb5cxx11ev:17,abc:6,abl:10,abov:[4,5,7,8,17,24,25,26],abs:25,acc:8,acceler:24,accept:[4,20,22],access:[6,7,25,26],accordingli:7,accum_it:14,accum_loss:14,accur:[6,12,13,30],achiev:5,across:1,activ:[17,19,21],adapt:7,add:[2,28,29],add_modul:[],added:[],addit:[2,4,10,20,22,25],adjac:26,adopt:5,advantag:8,affect:14,affin:20,after:11,afterward:[2,20,22],again:17,aid:[12,13],algorithm:[1,11],alia:[19,25],align:8,all:[1,2,4,5,7,8,10,14,15,16,18,20,21,22,24,25,26,28,29,30],allow:[9,10,21,25,26,28],allow_dupl:[],allow_duplicate_coord:[6,25],along:[12,13,17,28],alreadi:[21,25,29],also:[4,5,9,10,11,12,13,20,22,25,26,30],alter:[],altern:22,although:[2,20,22],among:24,amort:[1,9],anaconda:[17,24],analysi:16,angl:14,ani:[14,23],anoth:[5,14,17,25],anyth:28,apart:4,api:[16,21],apidoc:0,append:[9,11,28],appli:[4,8,16,22,26],applic:[5,17,21,28],appropri:14,apt:21,arbitrari:[5,10,26],arbitrarili:5,architectur:[8,12,13,21,22],archiv:[],area:8,arg:[2,4,19,20,22,23,25,29,30],argument:[2,4,20,22,30],arithmet:16,arrai:[8,11,25,28],art:5,artifici:28,assembl:[8,14],assert:28,assign:[],associ:[4,5,8,20,22,25,26,28,30],assum:[17,28],astyp:[8,14],asynchron:[4,20,22],atla:24,attribut:28,augment:16,author:21,auto:[16,20,21,22],autograd:[],automat:[11,17,18,24,25],avail:18,averag:[1,7,9,22],awai:[4,22],axes:5,axi:[3,4,5,8,22],axis_typ:[3,4],b_1:25,b_i:25,b_n:25,backward:[1,8,9,14],barycentr:8,base:8,bashrc:17,basic:[5,16,25,26],batch:[6,7,8,11,14,16,20,22,25,30],batch_id:[],batch_index:[6,25,28],batch_indic:[],batch_siz:[8,14,22],batch_sparse_col:[14,16],batched_coordin:[14,16,25,28],batchnorm1d:20,batchnorm:[],bcewithlogitsloss:[],bcoord:14,becom:[5,15],befor:[4,8,11,12,13,14,20,22,30],begin:[8,25,26],behavior:[],being:[4,10,15,20,22],below:[4,14,20,22,30],benchmark:[11,16],better:[],between:[25,26,28,30],bia:[4,8,20,22],bin:17,binari:[14,28,30],binary_crossentropi:[],bioconda:[],block:[8,12,13,15,26,30],bmatrix:[25,26],bn1:[],bn2:[],booktitl:21,bool:[4,6,22,25,30],booltensor:23,bootstrap:21,both:[8,19,20,23,29],bottleneck:9,broadcast:[2,21],buf:[],buffer:[4,20,22],built:21,cach:[25,26],cad:[12,13],call:[2,4,5,11,14,17,20,22,26],came:28,can:[1,2,4,5,8,9,10,11,12,13,14,15,17,18,20,21,22,23,24,25,26,28,29,30],cannot:14,captur:[12,13],cardin:22,care:[2,20,22],carv:[],cast:[4,20,22],cat:28,cdot:[2,25,26],ceil:8,cell:[26,30],celu:19,center:[5,28],certain:[],chair:[12,13],chang:[1,7,29],channel:[4,8,22,26],check:17,checkout:21,child:[],children:[],choi:[5,21,26],choic:8,choos:14,choy20194d:21,chri:[5,26],chrischoi:8,christoph:21,chromat:8,classif:[12,13,14,16,21,30],classmethod:[],clean:17,clone:[21,24],cloud:[8,9,21,22],cluster:17,code:[8,12,13,14,17,24,25,30],collaps:28,collat:[14,30],collate_fn:[14,30],collation_fn:14,collect:6,color:[8,10,11],column:25,com:[21,24],command:21,common:[5,16,21],comon:3,compat:[25,28],complet:[7,9,10,11,21,26],complex:[],compon:[8,15],comput:[2,5,9,12,13,15,20,21,22,25,28],computation:15,concaten:[2,11,14,16,25,26,30],conda:24,confer:21,config:[8,11,14],confirm:17,conjunct:30,consid:[],consist:[0,8,10,12,13,15,25,26],constant:22,construct:[4,20,22],consum:[14,26],contain:[4,8,20,22,30],contigu:25,contract:25,contract_coord:25,contribut:22,control:16,conv1:21,conv2:21,conv4:[],conv5:[],conv:[1,15,28],convent:[5,22,26],convert:[4,7,14,20,22,25,28,30],convert_sync_batchnorm:9,convnet:[5,18,21,26],convolut:[3,4,8,10,12,13,16,18,21,22,26],coo:[25,26],coord:[4,6,7,8,9,11,14,21,22,23,25,28,29,30],coordin:[2,4,5,8,9,10,11,14,16,22,23,25,28,29,30],coordinates_:11,coordinates_at:[25,28],coordmanag:[],coords0:28,coords1:28,coords_batch:[],coords_kei:[6,25,28,30],coords_key_or_tensor_strid:6,coords_man:[6,26,28,29,30],coords_manag:[25,28,29],coordskei:[4,16,22,25],coordsmanag:[14,16,25],copi:[2,4,16,20,22,23],correct:[14,17,26],correctli:14,correspond:[6,9,15,22,23,25,26,29,30],cos:14,cost:8,could:[7,9,25],coupl:28,cover:27,cppextens:17,cpu:[4,9,17,18,20,22,25],cpu_onli:24,creat:[3,7,8,9,11,12,13,14,15,17,25,26,28,29,30],create_coords_kei:6,creation:[25,28],credit:[5,26],crit:8,criterion:[7,9,14,21,30],critic:14,cross:[3,8],crossentropyloss:[7,8,9,14,21,30],crucial:5,cubic:15,cublas_v2:17,cuda:[4,9,20,21,22,24,25],cudatoolkit:17,curl:21,curr_it:8,current:[5,9,11,24,25],custom:[3,4,14,22],custom_collation_fn:14,cvpr:[5,18,21],d_f:[7,25,30],d_i:26,data:[5,7,9,11,12,13,14,16,21,25,30],data_batch_0:28,data_batch_1:28,data_dict:8,data_gener:[],data_label:14,data_load:[7,9,21,30],dataload:[16,30],dataset:[8,12,13,16,30],datatyp:[4,20,22],ddot:[25,26],deb:[],decompos:28,decomposed_coordin:[25,28],decomposed_coordinates_and_featur:[25,28],decomposed_featur:[25,28],decomposit:16,deconvolut:4,def:[7,8,14,21,28],defaul:4,defin:[2,3,4,5,8,9,10,12,13,14,15,18,20,21,22,23,25,26,29],defini:4,definit:[4,16,28],demo:[7,8,12,13,16,28],dens:[5,21,22,25,26],densiti:8,depend:22,deriv:26,descend:[],design:[12,13],desir:[4,18,20,22],destin:[],detail:[3,5,9,10,11,12,13,20,21,25,28],detect:24,dev:[21,24],devel:[],devic:[4,7,8,11,16,20,22,24,25],diagram:[12,13],dict:[],dictionari:[],differ:[1,3,4,12,13,17,20,22,25,28,30],differenti:[16,21],difficult:14,dilat:[1,3,4,5,6,7,15,21,22],dim:[9,25],dimens:[1,2,3,4,5,7,15,18,20,21,22,25,26,28,30],dimension:[5,21,22,25,26,28,30],direct:[],directli:[21,28],directori:[12,13,17,21],dirnam:17,disassoci:25,discret:[14,28],discrete_coord:14,distanc:26,distort:8,distribut:[21,24],divid:[9,22,25],divis:25,document:30,doe:[4,22],doesn:[6,17],doing:[11,25],done:[2,11,24,25],doubl:[4,20,22,25,29],doubletensor:25,dow:21,down:[5,26],download:[11,24],drastic:14,drop:14,dropout:19,dst_type:[4,20,22],dtype:[4,8,20,22,25,29],due:[5,9],dump_patch:[],duplic:25,dure:[7,9,11,12,13,17],dynam:[21,25],each:[0,1,3,4,5,7,9,22,25,26,30],eah:30,easi:[7,14],echo:17,effect:5,effici:[5,9,15,28],either:30,elem:22,element:[2,4,5,22,25,26,28],empti:[5,15],enabl:[],encompass:5,encount:17,end:[8,15,25,26],enforc:[],enforce_cr:[],engin:[1,5,9,12,13,14,15,16,22,24,25,26],enough:17,entir:[8,12,13,17],enumer:[8,14,28],environ:18,environment:18,eoan:[],epoch:[8,14],eps:20,equal:[9,22,25],equat:[5,25],equival:[22,26],error:[17,25,28],etc:[21,26],eval:[],evalu:[],even:[4,5,25],everi:[2,15,20,22],everyth:[14,15],exactli:[],exampl:[2,4,9,10,11,14,16,17,18,20,22,23,24,26,27,28,29,30],examplenetwork:[7,21],excess:17,excit:[],exist:[5,25,26,28,29],expens:[15,18],experi:16,experiment:29,explicitli:17,expm:8,exponenti:26,exponentiallr:8,extens:[5,8,26,28],extra:[],extra_repr:[],extract:[5,6,7,9,26,28],extrem:15,eye:8,f_i:26,f_o:26,face:[8,17],face_area:8,face_idx:8,factor:[12,13],fail:17,failur:[],fall:[],fals:[1,3,4,6,7,20,21,22,23,25,30],familiar:14,fast:[8,14,15,17],faster:[9,16,22],fatal:17,fault:17,feat:[7,8,9,11,14,21,23,25,28,30],featrues_:11,feats0:28,feats1:28,feats2:30,feats_batch:14,featur:[2,5,6,8,9,10,11,12,13,14,15,16,18,22,23,25,26,29,30],features_at:[25,28],feautr:20,fed:9,feed:[1,9,11,25,28,30],feel:[17,21],few:21,field:[5,26],figur:[12,13],file:0,file_nam:11,fill:14,fill_:[],filter:23,find:[5,15,17,26],finetun:[],finish:[],first:[1,2,3,5,7,8,9,11,12,13,14,21,22,25],fix:8,flag:[],float16:[4,20,22],float64:[4,20,22],floattensor:[25,28],floor:11,floor_indic:8,floor_num:8,fnv:[],follow:[1,5,8,9,12,13,14,15,17,21,24,26],forc:[4,25,28],force_cr:[6,25,28,29],force_remap:6,fore:5,forg:[],form:26,format:[0,5,8,25,26],former:[2,20,22],fortun:[18,21],forward:[1,2,4,7,11,12,13,20,22,23,28,29],found:[8,12,13,14,17],frac:[4,22],free:[17,21],freez:[],from:[4,5,7,9,11,12,13,23,25,26,30],from_numpi:14,fulli:21,fundament:5,futur:[28,29],gan:[],gather:9,gaussian:[8,14],gcc:[21,24],gener:[1,4,7,10,12,13,14,15,16,17,21,22,25,26,30],generate_new_coord:4,geometr:21,geometri:[8,12,13],get:[6,7,9,11,17,21,28,30],get_batch_indic:6,get_batch_s:6,get_coo_broadcast_coord:[],get_coord:6,get_coords_kei:[],get_coords_map:[6,16],get_coords_size_by_coords_kei:6,get_devic:25,get_kernel:3,get_kernel_map:6,get_kernel_map_by_kei:[],get_lr:8,get_mapping_by_tensor_strid:6,get_row_indices_at:6,get_row_indices_at_batch_index:[],get_row_indices_per_batch:6,get_union_map:6,getkei:6,gettensorstrid:6,gist:[],git:[21,24],github:[8,17,21,24],give:[17,28],given:[3,4,15,20,22,25,26,30],global:[2,10],globalpoolingmod:[20,22],goe:28,good:15,googl:[],googlegroup:21,gpu1:[4,20,22],gpu:[4,16,20,21,22],grad_input:[],grad_output:[],gradient:[],graph:[21,25,28],grid:[12,13,26,30],group:[],guidelin:16,gwak:21,half:[4,20,22,26],handl:25,happen:25,has:[4,5,14,15,26],has_bia:[1,4,7,15,21],hash:[14,25,26],hash_typ:[],have:[5,8,9,10,14,17,21,24,26,28,30],heavi:9,help:[6,30],helper:[],here:[12,13,14,21,25,28],hidden:28,hide:25,hierarch:[12,13,15],high:[21,22,26,28],higher:[5,21,24],highli:[21,24],home:17,hook:[2,20,22],host:[4,20,22],hot:[12,13],hotel:16,how:[5,7,21,27],howev:[5,8,9,10,14,15,17,18,21,22,24,26,28],hpp:17,hstack:14,http:[8,21,24],hue:8,hybrid:3,hyper:[14,15],hypercross:[3,15],hypercub:[3,5],hyperrectangl:30,iccv:[12,13,21],ideal:9,ident:[4,22,26],identifi:[],ids:[],idx:[],ieee:21,ignor:[0,2,20,22,30],ignore_index:[14,30],ignore_label:30,illustr:[],imag:[2,4,5,8,22,26],immedi:[],implement:4,in_channel:[1,4,7,15,21,28,29],in_coords_kei:[],in_feat:[7,21],in_featur:[4,20,22],in_kei:6,in_key_or_tensor_strid:6,in_tensor_strid:6,includ:[0,24],inclus:25,increas:[9,15,18],ind:11,independ:8,index:[0,6,11,12,13,14,15,16,22,25,28,30],indic:[6,8,12,13,14,25,26,28,30],individu:[],indoor:[11,21,24],ineffici:[5,15,28],info:8,inform:[5,21,28],inherit:14,init:[],init_weight:[],initi:[4,6,9,14,16,19,20,23,29,30],initialize_enforc:[],inplac:28,inproceed:21,input1:29,input2:29,input:[2,4,5,6,7,8,9,10,11,12,13,14,15,18,20,21,22,23,26,29,30],input_glob:2,ins:[6,30],insid:25,instal:[11,17],instanc:[2,9,15,20,22,25],instead:[2,5,8,14,15,20,22,24],instruct:[0,21,24],int32:14,integ:[26,27,30],integr:[4,20,22],intel:24,interact:11,intercept:14,interest:5,intern:[14,19,20,23,25,28,29],intro:[],introduct:16,inttensor:[3,4,6,22,25,28,30],intuit:28,investig:[5,26],invok:[],iput2:29,is_pool:6,is_transpos:[3,6],iskeyset:6,issu:[16,21],item:14,iter:[8,9,14,30],iterabledataset:14,its:5,itself:0,job:[9,17],junyoung:21,keep:23,keep_var:[],kei:[6,15,25,28],kernel:[1,4,5,6,9,10,14,16,18,21,22,24],kernel_gener:[4,15,22],kernel_s:[1,3,4,6,7,15,21,22,28],kernelgener:[3,4,15,22],known:5,kwarg:[4,19,20,22],label:[6,7,8,9,11,14,21,30],label_tensor_strid:6,labels_batch:14,land:0,larg:[1,9,26],larger:9,last:22,latest:[24,25],latter:[2,20,22],layer:[2,4,8,9,10,16,20,21,22,26,27],lceil:4,lead:17,learn:21,least:[4,22,26],left:[4,12,13],length:[4,22,30],let:[5,7,9,14],libopenbla:[],librari:[5,16,17,21,24,26,28],libtbb:[],like:[14,17,21],likewis:[],limit:[17,30],limit_numpoint:30,line:14,linear:[4,10,20,21,22],link:17,list:[3,4,5,6,11,14,21,22,25,26,27,28,30],list_of_row_indic:[],live:[4,20,22],load:[8,11,12,13,14,15,16,25],load_fil:11,load_state_dict:[],loader:[9,11,14,16,21],local:17,locat:14,log:8,logic:8,longtensor:[6,30],look:[12,13],loss:[7,8,9,14,21,30],lot:[8,15],low:8,lower:26,lr_schedul:8,mai:[0,22],main:[8,12,13,14,15],maintain:[9,14],make:[0,4,16,17,20,21,22,25],makefil:[],manag:[9,15,16,25,28,29],mani:[5,15,24,26,28],manual:25,map:[1,5,6,9,14,18,21,22,30],markdown:0,mask:23,match:[],math:24,mathbb:[4,5,26],mathbf:[2,4,5,22,25,26],mathcal:[2,4,5,22,25,26],mathscr:26,matric:[5,26],matrix:[3,4,5,18,22,25,26,28,30],matter:6,max:[8,11,22,25],max_:22,max_coord:25,max_epoch:14,max_it:8,max_label:6,maxim:8,mean:9,member:[],memo:[],memori:[4,8,20,22,26],mention:15,mesh:[2,4,8,22],mesh_cad:8,method:[3,4,17,20,22],might:[12,13,17,18],min:[7,8,25],min_coord:25,mini:[9,14,25],minimum:[25,26],mink:[17,21],minkowski:[5,9,12,13,14,15,16,18,24,25,26],minkowskiavgpool:16,minkowskibatchnorm:[7,9,16,21],minkowskibroadcast:16,minkowskibroadcastaddit:16,minkowskibroadcastconcaten:16,minkowskibroadcastmultipl:16,minkowskicelu:16,minkowskiconvolut:[1,7,12,13,15,16,21,28],minkowskiconvolutiononcoord:[],minkowskiconvolutiontranspos:[1,12,13,16],minkowskiconvolutiontransposeoncoord:[],minkowskicoord:[4,6,22],minkowskidropout:16,minkowskiengin:[1,2,3,4,5,6,7,9,11,12,13,14,15,17,19,20,21,22,23,24,25,26,28,29,30],minkowskienign:23,minkowskiglobalpool:[2,7,16,21],minkowskiinstancenorm:16,minkowskilinear:[7,21],minkowskimaxpool:16,minkowskinetwork:21,minkowskinonlinear:16,minkowskinorm:16,minkowskipool:16,minkowskipoolingtranspos:16,minkowskiprelu:16,minkowskiprun:[12,13,16],minkowskirelu:[7,16,21],minkowskiselu:16,minkowskisigmoid:16,minkowskisoftmax:16,minkowskisumpool:16,minkowskisyncbatchnorm:[9,16],minkowskisynchbatchnorm:9,minkowskitanh:16,minkowskithreshold:16,minkowskiunion:[16,30],minkunet34c:9,minkunet:9,minu:25,miscellan:16,miscellanea:16,miss:[],missing_kei:[],mode:[20,22],model:[4,8,11,12,13,20,22],modelnet40:[12,13,16,21],modelnet_reconstruct:[],modest:9,modifi:[0,4,17,20,22],modul:[2,4,7,17,19,20,22,23,29],momentum:[8,14,20],more:[5,8,9,10,11,14,20,21,25,28],most:[4,5,14,25],move:[4,20,22],multi:[10,14,16,17,18,20,21],multipl:[2,5,16,26,30],multipli:2,multiview:21,must:[4,5,14,21,22,25,27,28,29,30],n_f:[25,26],n_i:25,n_sampl:8,n_samples_per_fac:8,name:24,named_buff:[],named_children:[],named_modul:[],named_paramet:[],namedtupl:[],natur:5,nchannel:14,ndarrai:[6,30],necessarili:5,need:[2,8,9,12,13,14,20,21,22,25,26,28],neg:26,neighbor:26,net:[1,7,8,9,14,21,30],network:[1,2,4,5,7,8,9,10,11,14,16,18,22,25,26,28],neural:[5,8,10,12,13,14,18,25,26,28],new_coord:28,new_feat:28,new_group:[],next:[8,9,21,28],nois:[8,14],noise_typ:14,noisi:14,non:[4,5,15,22,25,26,28],non_block:[4,20,22],none:[3,4,6,20,22,25,29,30],norm:[8,16],normal:[10,11,20],note:[1,5,7,12,13,14,28],noth:8,now:28,nueral:1,num_data:14,num_devic:9,num_featur:20,num_nois:14,num_thread:6,num_work:14,number:[1,3,4,5,9,10,16,17,22,25,26,29,30],numpi:[6,8,17,21,24,25,30],nvcc:[17,21],nvidia:21,o3d:[8,11],object:[4,20,22,25,26],observ:9,obviou:25,octre:[12,13],offset:[1,3,4,5,22],often:26,old:17,omp_num_thread:18,onc:[11,14],one:[2,9,12,13,14,17,20,22,23,25,26,30],ones:14,onli:[1,2,4,5,8,20,22,26,28],open3d:[8,11],openbla:[17,21,24],oper:[2,5,8,15,18,21,26,28,30],optim:[4,7,8,9,14,20,21,22],option:[3,4,14,17,20,22,25,26,30],order:[5,26],origin:[2,5,14,22,26,28],other:[1,15,21,28],otherwis:26,our:[],out:[2,4,5,6,9,12,13,14,21,22,30],out_channel:[1,4,7,15,21,28],out_cl:[12,13],out_coords_kei:[4,6],out_feat:[7,21],out_featur:[4,9,20,22],out_kei:6,out_key_or_tensor_strid:6,out_nchannel:14,out_sp_tensor:[6,30],out_tensor_strid:6,outer:4,output:[2,4,5,6,7,9,14,15,18,21,22,23,25,26,28,29,30],outsid:14,over:[1,8,9,12,13],overhead:9,overlap:29,overridden:[2,20,22],own:[8,14],packag:[21,24,25],page:[0,1,5,8,12,13,16,17,21,28],pair:26,parallel:[9,11,17,18],parallel_appli:9,param:8,paramet:[4,8,14,20,22],part:[5,14,18],particular:[],pass:[1,2,12,13,20,22],path:[11,12,13,17],pattern:[9,16,21,28,30],pcd:11,pdf:21,per:[6,8,9,22,25,28],percept:5,perceptron:10,perform:[2,5,9,14,20,22],permute_label:6,persist:[],photo:[5,26],pick:6,pin:[4,20,22],pip3:[21,24],pip:[0,11,24],pipelin:[16,28],pixel:26,place:[4,20,22,28],platform:21,pleas:[3,5,7,8,9,10,11,12,13,17,21,22,25,28,30],point:[1,4,8,9,10,11,20,21,22,25,30],pointcloud:8,pointnet:16,polygon:8,pool:[10,21,22,26],popular:21,posit:[27,30],possibl:[4,15,20,22],post:11,pre:[],pred:11,predefin:5,predict:[11,12,13],prefix:[],prelu:19,prepar:11,prepend:30,preprocess:25,present:28,pretrain:[12,13,24],pretti:9,previou:15,print:[6,14,21,30],print_diagnost:6,problem:17,proce:[8,12,13,14],proceed:21,process:[1,10,11,12,13,14,18,25],process_group:20,process_id:[],product:4,program:[12,13],properti:25,propos:5,proven:5,provid:[3,4,5,14,17,18,21,22,24,25,28],prune:[12,13,23],pseudo:11,pth:[],put:25,py3:[17,21],pypa:21,pypi:[21,24],python3:[21,24],python:[8,11,12,13,14,17,18,24,30],pytorch:[9,14,16,17,20,21,24,30],quantiz:[8,11,16,21,25,28,30],quantization_s:[14,30],quantized_coord:11,question:21,quick:16,quickli:15,quit:[26,28],r_1:8,r_2:8,rand:[8,14,23,29],randn:8,random:[8,14],randomlinedataset:14,randomrot:8,randomscal:8,randomshear:8,randomtransl:8,rang:[4,7,8,9,14],rank:[11,26],rare:17,rate:4,rather:28,ravel:[],rceil:4,reach:[12,13],read_point_cloud:11,readm:0,real:28,reason:9,recept:26,recip:[2,20,22],recognit:21,recommend:[9,21,24,25],recommonmark:0,recomput:[],reconstruct:[16,21],record:[],rectangular:3,recurr:5,recurs:[],reduc:[2,6,15,22],reduct:2,refer:[3,7,8,9,10,11,15,16,21,22,25,28,30],referenc:14,regardless:14,region:3,region_offset:[3,4,6,22],region_typ:[3,4,6,15],regiontyp:[4,15,16,22],regist:[2,20,22],register_backward_hook:[],register_buff:[],register_forward_hook:[],register_forward_pre_hook:[],register_hook:[],register_paramet:[],registr:21,reimplement:[],reinstal:17,rel:14,relax:5,relu:19,remov:[12,13,23],removablehandl:[],repeat:[12,13,15],repetit:26,replac:[8,9],replic:9,replica:16,report:1,repositori:[],repres:[25,26,28],represent:[5,8,25,26],request:21,requir:[4,9,15,17,26,28],requires_grad:25,requires_grad_:25,resampl:8,resample_mesh:8,research:[5,8],reset_paramet:[],residu:[8,15,26],resnet:16,resolut:[12,13,26],respect:[4,20,22],rest:[9,26],restructuredtext:0,result:[4,12,13,22,24,28],return_index:[14,30],return_numpi:8,reus:[1,25,26],right:[4,12,13,17],rightarrow:26,rng:14,rnn:5,robust:8,room:[1,16],root:[12,13,21],rotat:11,row:[6,15,18,26,28],row_indic:6,rst:0,run:[2,11,16,17,20,21,22],running_mean:[],running_var:[],same:[1,2,5,8,9,15,21,22,25,26,28,29,30],sampl:[8,14,22],sample_face_idx:8,satur:8,savares:21,save:[5,25,26,28],scalar:26,scale:8,scan:5,scannet:[1,11],scene:24,schedul:8,scope:[],scriptmodul:[19,20,23,29],seamlessli:14,search:16,second:[1,2,5,28],section:15,see:[4,6,11,17,20,22,30],seem:9,segment:[5,16,17,21,30],self:[4,6,7,8,14,20,21,22,25,30],selu:19,semant:[5,16,21,24,28],separ:14,sequenc:[6,30],sequenti:[1,5,7,12,13,21],seri:[8,10,12,13],set:[1,4,5,9,11,14,17,18,20,22,25,26,28,30],set_ignore_label_when_collis:[],set_origin_coords_kei:6,set_tensor_strid:25,setkei:6,settensorstrid:6,setup:[17,21,24],sgd:[8,14],shallow:7,shape:[2,3,4,5,12,13,21,22,25],share:[19,20,23,26,28,29],share_memori:[],shear:8,should:[2,3,4,11,17,20,22],show:7,shrink:26,side:[11,30],sigmoid:19,signatur:[4,6,20,22,30],signific:9,silent:[2,20,22],silvio:21,similar:[4,9,12,13,20,21,22],similarli:26,simpl:[5,8,12,13,28],simpli:[18,21,24,25,26],sin2:30,sin:[8,14,30],sinc:[2,5,8,14,20,22,26,28],singl:[9,17,26],sinput:11,size:[1,3,4,5,7,8,9,10,14,15,22,23,25,26,30],skip:21,slurm:18,small:[1,9],smaller:9,snippet:[15,17],softmax:19,solut:15,solv:17,some:[5,8,11,12,13,14,17,18,26,28],sometim:17,sourc:0,sout2:30,sout:[8,30],soutput:11,sp_tensor:[6,30],space:[2,3,4,5,22,25,26,30],spare_tensor:25,spars:[2,4,7,8,9,10,11,12,13,14,15,16,20,22,23,25,29,30],sparse_col:[11,16,25,28],sparse_quant:[11,14,16,21],sparse_tensor:30,sparse_tensor_bas:28,sparsecol:[14,16],sparseconvnet:1,sparsehash:[],sparsetensor:[4,5,6,7,8,9,11,14,16,21,22,23,26,28,29,30],sparsiti:[5,16,28,30],spatial:[4,5,10,20,21,22,25,28],spatio:[5,18,21],special:[5,10],specif:[4,5,22,24,26,28],specifi:[4,6,20,21,22,23,25,28],speech:5,speed:[9,18],speedup:16,sphinx_markdown_t:0,sphinx_rtd_them:0,sqrt:8,squeez:14,src:17,standard:[21,25],stanfordvl:[21,24],start:16,stat_freq:8,state:[5,19,20,23,29],state_dict:[],step:[8,9,14,25,28],str:[],strict:[],strictli:[],stride:[1,3,4,5,6,7,10,21,22,25,28,29],stride_2_conv:[6,30],string:[4,20,22],structur:[14,15,28],subclass:[2,20,22],submanifold:5,submit:[17,21],submodul:[],subsequ:[],subset:[],subtract:11,sudo:21,suitabl:[14,30],sum:[8,22,26,29],sum_:[4,5,22],support:[9,21,22],sure:[4,14,17,21,25],surfac:8,swap:15,sync_bn_modul:[],synchron:[16,20],system:[8,17,18],system_error:17,tabl:[14,26],take:[1,2,9,11,20,22],tan:14,tanh:19,target:[9,12,13],target_devic:9,target_tensor_strid:6,task:5,tbb:[],tediou:14,tee:[],tempor:[5,18,21],tensor:[1,2,4,6,7,8,9,10,11,12,13,14,15,16,20,22,23,25,29,30],tensor_strid:[3,4,6,22,25,30],termin:[],terminolog:[5,16,28],test:1,text:[2,4,5,22,26],than:[5,14],thei:[26,28],them:[2,20,22,26],theta:[8,14],thi:[0,1,2,4,5,7,8,9,10,11,12,13,14,17,18,20,22,24,25,26,27,28,29],thing:14,think:10,those:[4,8],thread:[9,16,17,21],threshold:19,thrid:3,through:[5,8,9],thrust:17,thu:[1,5,7,9,14,15,22],time:[1,2,3,4,5,7,8,9,12,13,14,15,22,25,26,30],titan:[1,9],titl:21,to_dens:[],to_spars:[],to_sparse_coo:28,toctre:0,top:11,torch:[3,4,6,7,8,9,14,19,20,21,22,23,24,25,28,29,30],torchvis:[17,21],tot_it:14,total:9,track_running_stat:20,tradit:[5,26],train:[7,11,12,13,16,21,28,30],train_dataload:[8,14],train_dataset:14,train_it:[8,14],tran:8,transform:10,translat:8,transpos:[4,21,22],transposed_strid:6,treat:25,tri:[4,20,22],triangl:8,trianglemesh:8,trivial:15,troubl:17,tupl:[9,21,30],tutori:[8,12,13,14,16,25,27],two:[3,8,12,13,15,26,28],two_dim_train:[],txt:[],type:[3,4,6,12,13,20,22,30],typic:[2,5],ubuntu:[21,24],ugli:28,unchang:[4,20,22],uncom:[],unconvent:[14,28],understand:25,unet:[14,30],unexpect:[],unexpected_kei:[],union:[4,6,22,29],uniqu:25,unique_feat:14,unique_label:14,unit:8,univers:[],unless:[],unlik:28,unlimit:21,unnecessari:[12,13],unord:15,unpool:[21,22],until:[12,13],updat:29,upsampl:[4,12,13],upsample_block:[12,13],usag:[9,17,21,29,30],use:[1,5,8,9,12,13,14,15,17,18,21,22,24,25,26,27,28,29,30],used:[1,2,4,8,9,15,22,23,28,30],useful:14,user:21,uses:[3,8,10,17,21],using:[7,9,15,17,24,26],usr:17,util:[8,11,14,16,21,25,28],val:28,val_dataload:8,val_it:8,valid:[4,26],valu:[2,14,15,26,28,30],vari:22,variabl:[17,18,29],variou:[1,9,21],various_output:14,vdot:[25,26],vec_cross:8,vectic:8,vector:[2,5,7,8,12,13,23,25,26],veri:[7,9,12,13,15,26],versa:7,version:[21,22,24,25],vertic:8,via:[21,24,25],vice:7,virtual:[],vision:[5,21],visit:21,visual:[5,11,12,13,21,24],volum:22,volumetr:15,voxel:[1,11,12,13,21,30],voxel_s:11,vstack:14,wai:[14,28],want:[18,24,30],warn:0,wast:[],weight:[4,5,11,16,20,22,24],weight_decai:[8,14],well:[1,8,14],what:25,when:[3,4,5,7,8,11,17,20,22,24,25,26],where:[2,3,4,5,8,10,17,22,25,26,28,30],wherea:[1,26],whether:[],which:[5,6,8,9,15,17,18,21,23,24,25,26],whole:[],whose:[4,14,15,20,22],why:28,wise:[2,16],within:[2,14,20,22,25,26,28],without:17,work:[5,14,16,17],world:[12,13],would:[3,21],wrap:11,wrapper:[7,30],write:0,x_1:[25,26],x_i:25,x_indic:30,x_n:[25,26],xs_data:14,year:21,yield:[],you:[0,4,6,8,9,10,11,14,15,17,18,21,22,24,25,26,28,30],your:[8,14,17,21,25],your_program:18,ys_data:14,zero:[5,8,14,15,22,25,26,28],zero_grad:[7,8,14],zip:[6,9,11,14,30]},titles:["Documentation with Sphinx","Benchmark","MinkowskiBroadcast","Miscellaneous Classes","MinkowskiConvolution","Convolution on a Sparse Tensor","Coordinate Management","Working with Pytorch Layers","ModelNet40 Classification","Multi-GPU Training","PointNet","Semantic Segmentation","3D Sparsity Pattern Completion","3D Sparsity Pattern Reconstruction","Training Pipeline","Guidelines for Faster Networks","Welcome to MinkowskiEngine\u2019s documentation!","Common Issues","Miscellanea","MinkowskiNonlinearities","MinkowskiNormalization","Minkowski Engine","MinkowskiPooling","MinkowskiPruning","Quick Start","SparseTensor","Definitions and Terminology","Convolution Basics","Sparse Tensor Basics","MinkowskiUnion","Utility Functions and Classes"],titleterms:{"class":[3,30],"function":[17,30],"new":17,Using:[],after:17,all:[9,17],anaconda:21,analysi:9,appli:9,arithmet:28,augment:8,automat:0,backward:21,basic:[27,28],batch:[9,28],batch_sparse_col:30,batched_coordin:30,benchmark:1,bla:[21,24],build:21,cach:15,cat:30,cite:21,classif:[7,8],common:17,compil:[17,21,24],complet:12,concaten:28,conda:[17,21],configur:21,content:[0,16],control:18,convolut:[1,5,15,27],coordin:[6,26],coordskei:6,coordsmanag:6,copi:9,cpu:[21,24],creat:21,cross:15,cuda:17,cuda_hom:17,curat:0,custom:[0,15,21],data:[8,28],dataload:14,dataset:14,decomposit:28,definit:26,depend:0,devic:[9,17],dimension:15,discuss:21,document:[0,16,21],due:17,engin:21,environ:[17,21],exampl:[7,8,12,13,21],experi:[1,9],failur:17,faster:15,featur:[7,21,28],file:17,forc:17,forward:21,from:[17,21],gener:[0,3,5,28],get_coords_map:30,gpu:9,guidelin:15,high:15,hotel:11,html:0,incorrect:17,indic:16,initi:28,instal:[0,21,24],invalid:17,issu:17,kei:26,kernel:[3,15,26],latest:21,layer:[1,7,15],list:[0,17],load:9,loader:8,make:[8,12,13,14],manag:[6,26],map:[15,26],memori:17,minkowski:21,minkowskiavgpool:22,minkowskibatchnorm:20,minkowskibroadcast:2,minkowskibroadcastaddit:2,minkowskibroadcastconcaten:2,minkowskibroadcastmultipl:2,minkowskicelu:19,minkowskiconvolut:4,minkowskiconvolutiononcoord:[],minkowskiconvolutiontranspos:4,minkowskiconvolutiontransposeoncoord:[],minkowskidropout:19,minkowskiengin:16,minkowskiglobalpool:22,minkowskiinstancenorm:20,minkowskimaxpool:22,minkowskinonlinear:19,minkowskinorm:20,minkowskipool:22,minkowskipoolingtranspos:22,minkowskiprelu:19,minkowskiprun:23,minkowskirelu:19,minkowskiselu:19,minkowskisigmoid:19,minkowskisoftmax:19,minkowskisumpool:22,minkowskisyncbatchnorm:20,minkowskitanh:19,minkowskithreshold:19,minkowskiunion:29,miscellan:3,miscellanea:18,mismatch:17,mkl:[21,24],modelnet40:8,modul:0,multi:9,multipl:9,network:[12,13,15,21,24],neural:21,norm:9,number:18,object:17,onli:[0,21,24],oom:17,other:24,out:17,pattern:[12,13],pip:21,pipelin:14,pointnet:10,pool:15,pretrain:[],project:21,python:21,pytorch:7,quantiz:14,quick:[21,24],reconstruct:[12,13],refer:[5,18,26],regiontyp:3,replica:9,requir:[21,24],resnet:8,reus:15,room:11,run:[8,12,13,24],segment:[11,24],semant:11,setup:1,shape:15,simpl:1,singl:1,sourc:21,space:15,spars:[5,21,26,28],sparse_col:30,sparse_quant:30,sparsecol:30,sparsetensor:25,sparsiti:[12,13],speedup:9,sphinx:0,start:[21,24],stride:[15,26],support:24,symbol:17,synchron:9,system:[21,24],tabl:16,tensor:[5,21,26,28],terminolog:26,thread:18,train:[8,9,14],transpos:15,undefin:17,unet:1,upgrad:17,using:21,util:30,version:17,virtual:[17,21],websit:0,weight:9,welcom:16,wise:28,work:7}})