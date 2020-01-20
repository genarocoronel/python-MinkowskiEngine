Search.setIndex({docnames:["README","benchmark","broadcast","common","convolution","convolution_on_sparse","coords","demo/interop","demo/modelnet40","demo/multigpu","demo/pointnet","demo/segmentation","demo/training","guides","index","issues","misc","nonlinearity","normalization","overview","pooling","pruning","quick_start","sparse_tensor","terminology","tutorial/convolution_basic","tutorial/sparse_tensor_basic","union","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["README.md","benchmark.md","broadcast.rst","common.rst","convolution.rst","convolution_on_sparse.rst","coords.rst","demo/interop.rst","demo/modelnet40.rst","demo/multigpu.md","demo/pointnet.md","demo/segmentation.rst","demo/training.rst","guides.md","index.rst","issues.md","misc.rst","nonlinearity.rst","normalization.rst","overview.md","pooling.rst","pruning.rst","quick_start.md","sparse_tensor.rst","terminology.rst","tutorial/convolution_basic.rst","tutorial/sparse_tensor_basic.rst","union.rst","utils.rst"],objects:{"MinkowskiEngine.CoordsKey":{__init__:[6,1,1,""],getKey:[6,1,1,""],getTensorStride:[6,1,1,""],isKeySet:[6,1,1,""],setKey:[6,1,1,""],setTensorStride:[6,1,1,""]},"MinkowskiEngine.CoordsManager":{__init__:[6,1,1,""],create_coords_key:[6,1,1,""],get_batch_indices:[6,1,1,""],get_batch_size:[6,1,1,""],get_coords:[6,1,1,""],get_coords_map:[6,1,1,""],get_coords_size_by_coords_key:[6,1,1,""],get_kernel_map:[6,1,1,""],get_mapping_by_tensor_strides:[6,1,1,""],get_row_indices_per_batch:[6,1,1,""],get_union_map:[6,1,1,""],initialize:[6,1,1,""],permute_label:[6,1,1,""],print_diagnostics:[6,1,1,""],reduce:[6,1,1,""],set_origin_coords_key:[6,1,1,""],stride:[6,1,1,""],transposed_stride:[6,1,1,""]},"MinkowskiEngine.KernelGenerator":{__init__:[3,1,1,""],get_kernel:[3,1,1,""]},"MinkowskiEngine.MinkowskiAvgPooling":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiBatchNorm":{"double":[18,1,1,""],"float":[18,1,1,""],__init__:[18,1,1,""],cpu:[18,1,1,""],cuda:[18,1,1,""],forward:[18,1,1,""],to:[18,1,1,""],type:[18,1,1,""]},"MinkowskiEngine.MinkowskiBroadcast":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiBroadcastAddition":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiBroadcastConcatenation":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiBroadcastMultiplication":{__init__:[2,1,1,""],forward:[2,1,1,""]},"MinkowskiEngine.MinkowskiCELU":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiConvolution":{"double":[4,1,1,""],"float":[4,1,1,""],__init__:[4,1,1,""],cpu:[4,1,1,""],cuda:[4,1,1,""],forward:[4,1,1,""],to:[4,1,1,""],type:[4,1,1,""]},"MinkowskiEngine.MinkowskiConvolutionTranspose":{"double":[4,1,1,""],"float":[4,1,1,""],__init__:[4,1,1,""],cpu:[4,1,1,""],cuda:[4,1,1,""],forward:[4,1,1,""],to:[4,1,1,""],type:[4,1,1,""]},"MinkowskiEngine.MinkowskiDropout":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiGlobalPooling":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiInstanceNorm":{"double":[18,1,1,""],"float":[18,1,1,""],__init__:[18,1,1,""],cpu:[18,1,1,""],cuda:[18,1,1,""],forward:[18,1,1,""],to:[18,1,1,""],type:[18,1,1,""]},"MinkowskiEngine.MinkowskiMaxPooling":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiPReLU":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiPoolingTranspose":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiPruning":{__init__:[21,1,1,""],forward:[21,1,1,""]},"MinkowskiEngine.MinkowskiReLU":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiSELU":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiSigmoid":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiSoftmax":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiSumPooling":{"double":[20,1,1,""],"float":[20,1,1,""],__init__:[20,1,1,""],cpu:[20,1,1,""],cuda:[20,1,1,""],forward:[20,1,1,""],to:[20,1,1,""],type:[20,1,1,""]},"MinkowskiEngine.MinkowskiSyncBatchNorm":{"double":[18,1,1,""],"float":[18,1,1,""],__init__:[18,1,1,""],cpu:[18,1,1,""],cuda:[18,1,1,""],forward:[18,1,1,""],to:[18,1,1,""],type:[18,1,1,""]},"MinkowskiEngine.MinkowskiTanh":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiThreshold":{MODULE:[17,2,1,""],__init__:[17,1,1,""]},"MinkowskiEngine.MinkowskiUnion":{__init__:[27,1,1,""],forward:[27,1,1,""]},"MinkowskiEngine.RegionType":{CUSTOM:[3,2,1,""],HYBRID:[3,2,1,""],HYPERCROSS:[3,2,1,""],HYPERCUBE:[3,2,1,""]},"MinkowskiEngine.SparseTensor":{SparseTensor:[23,0,1,""]},"MinkowskiEngine.SparseTensor.SparseTensor":{"double":[23,1,1,""],"float":[23,1,1,""],C:[23,1,1,""],D:[23,1,1,""],F:[23,1,1,""],__init__:[23,1,1,""],coords:[23,1,1,""],cpu:[23,1,1,""],dense:[23,1,1,""],device:[23,1,1,""],dtype:[23,1,1,""],feats:[23,1,1,""],get_device:[23,1,1,""],requires_grad:[23,1,1,""],requires_grad_:[23,1,1,""],set_tensor_stride:[23,1,1,""],shape:[23,1,1,""],size:[23,1,1,""],sparse:[23,1,1,""],tensor_stride:[23,1,1,""],to:[23,1,1,""]},"MinkowskiEngine.utils":{SparseCollation:[28,0,1,""],batch_sparse_collate:[28,3,1,""],batched_coordinates:[28,3,1,""],get_coords_map:[28,3,1,""],sparse_collate:[28,3,1,""],sparse_quantize:[28,3,1,""]},"MinkowskiEngine.utils.SparseCollation":{__init__:[28,1,1,""]},MinkowskiEngine:{CoordsKey:[6,0,1,""],CoordsManager:[6,0,1,""],KernelGenerator:[3,0,1,""],MinkowskiAvgPooling:[20,0,1,""],MinkowskiBatchNorm:[18,0,1,""],MinkowskiBroadcast:[2,0,1,""],MinkowskiBroadcastAddition:[2,0,1,""],MinkowskiBroadcastConcatenation:[2,0,1,""],MinkowskiBroadcastMultiplication:[2,0,1,""],MinkowskiCELU:[17,0,1,""],MinkowskiConvolution:[4,0,1,""],MinkowskiConvolutionTranspose:[4,0,1,""],MinkowskiDropout:[17,0,1,""],MinkowskiGlobalPooling:[20,0,1,""],MinkowskiInstanceNorm:[18,0,1,""],MinkowskiMaxPooling:[20,0,1,""],MinkowskiPReLU:[17,0,1,""],MinkowskiPoolingTranspose:[20,0,1,""],MinkowskiPruning:[21,0,1,""],MinkowskiReLU:[17,0,1,""],MinkowskiSELU:[17,0,1,""],MinkowskiSigmoid:[17,0,1,""],MinkowskiSoftmax:[17,0,1,""],MinkowskiSumPooling:[20,0,1,""],MinkowskiSyncBatchNorm:[18,0,1,""],MinkowskiTanh:[17,0,1,""],MinkowskiThreshold:[17,0,1,""],MinkowskiUnion:[27,0,1,""],RegionType:[3,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function"},terms:{"1_i":24,"20l":[],"2_i":24,"5cm":1,"boolean":21,"break":5,"case":[5,9,13,15,16,22,23,24],"class":[2,4,5,6,7,8,12,14,17,18,19,20,21,23,27],"default":[4,15,16,20,23,28],"export":[15,16],"final":[9,11,12,24],"float":[4,12,18,20,23,28],"function":[2,8,9,11,12,14,16,18,19,20,27],"import":[1,7,9,12,13,19],"int":[2,4,6,8,12,18,20,23,28],"long":[12,28],"new":[4,7,8,9,23,24],"return":[4,6,7,8,9,12,18,19,20,21,23,27,28],"super":19,"true":[4,8,12,18,19,20,21,23,27,28],"try":[13,15],"while":[2,4,18,20],For:[1,2,4,9,13,15,16,19,20,24,28],Its:[4,18,20],One:[8,12],The:[0,2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,20,22,23,24,27,28],Then:[5,7,15,19],Use:[],Using:[13,22,24],With:[9,24],__call__:8,__getitem__:12,__init__:[2,3,4,6,7,8,17,18,19,20,21,23,27,28],__iter__:12,_build:0,_n_sampl:8,_sample_nois:12,_sample_x:12,_uniform_to_angl:12,_znk13coordsmanagerilh5eie8tostringb5cxx11ev:15,abc:6,abl:10,abov:[4,5,7,8,15,22,23,24],acc:8,acceler:22,accept:[4,18,20],access:[6,7,23,24],accordingli:7,accum_it:12,accum_loss:12,accur:[6,28],achiev:5,across:1,activ:[15,17,19],adapt:7,add:[2,27],add_modul:[],added:[],addit:[2,4,5,10,18,20,23],adjac:24,adopt:5,advantag:8,affect:12,affin:18,after:[11,19],afterward:[2,18,20],again:15,algorithm:[1,11],alia:[17,23],align:8,all:[1,2,4,5,7,8,10,12,13,14,16,18,19,20,22,23,24,27,28],allow:[9,10,19,23,24],allow_dupl:[],allow_duplicate_coord:[6,23],along:15,alreadi:[19,23,27],also:[4,5,9,10,11,18,20,23,24,28],alter:[],altern:20,although:[2,18,20],among:22,amort:[1,9],anaconda:[15,22],analysi:14,angl:12,ani:[12,21,26],anoth:[5,12,15,23],apart:4,api:[14,19],apidoc:0,append:[9,11],appli:[4,8,14,20,24],applic:[5,15],appropri:12,apt:19,arbitrari:[5,10,24,26],arbitrarili:5,architectur:20,archiv:[],area:8,arg:[2,4,17,18,20,21,23,27,28],argument:[2,4,18,20,28],arrai:[8,11,23],art:5,assembl:[8,12],assign:[],associ:[4,5,8,18,20,23,24,28],assum:15,astyp:[8,12],asynchron:[4,18,20],atla:22,attribut:[],augment:14,author:19,auto:[14,18,19,20],autograd:[],automat:[11,15,16,22,23],avail:16,averag:[1,7,9,20],awai:[4,20],axes:5,axi:[3,4,5,8,20],axis_typ:[3,4],b_1:[5,23],b_i:[5,23],b_n:[5,23],backward:[1,8,9,12],barycentr:8,base:8,bashrc:15,basic:[5,23,24],batch:[5,6,7,8,11,12,14,18,20,23,28],batch_id:[],batch_indic:6,batch_siz:[8,12,20],batch_sparse_col:[12,14],batched_coordin:[12,14,23],batchnorm1d:18,batchnorm:[],bcewithlogitsloss:[],bcoord:12,becom:[5,13],befor:[4,8,11,12,18,20,28],begin:[5,8,23,24],behavior:[],being:[4,10,13,18,20],below:[4,12,18,20,28],benchmark:[11,14],better:[],between:[23,24,26,28],bia:[4,8,18,20],bin:15,binari:12,binary_crossentropi:[],bioconda:[],block:[8,13,24,28],bmatrix:[5,23,24],bn1:19,bn2:19,booktitl:19,bool:[4,6,20,23,28],booltensor:21,bootstrap:19,both:[8,17,18,21,27],bottleneck:9,broadcast:[2,19],buf:[],buffer:[4,18,20],cach:[23,24],call:[2,4,5,11,12,15,18,20,24],can:[1,2,4,5,8,9,10,11,12,13,15,16,18,19,20,21,22,23,24,27,28],cannot:12,cardin:20,care:[2,18,20],cast:[4,18,20],cat:[],cdot:[2,5,23,24],ceil:8,cell:[24,28],celu:17,center:5,certain:[],chang:[1,7,27],channel:[4,8,20,24],check:15,checkout:19,child:[],children:[],choi:[5,19,24],choic:8,choos:12,choy20194d:19,chri:[5,24],chrischoi:8,christoph:19,chromat:8,classif:[12,14,28],classmethod:[],clean:15,clone:[19,22],cloud:[8,9,20],cluster:15,code:[8,12,15,22,23,28],collat:[12,28],collate_fn:[12,28],collation_fn:12,collect:6,color:[8,10,11],column:23,com:[19,22],common:[5,14,19],comon:3,compat:23,complet:[7,9,10,11,24],complex:[],compon:[8,13],comput:[2,5,9,13,18,19,20,23],computation:13,concaten:[2,5,11,12,23,24,28],conda:22,confer:19,config:[8,11,12],confirm:15,conjunct:28,consid:[],consist:[0,8,10,13,23,24],constant:20,construct:[4,18,20],consum:[12,24],contain:[4,8,18,20,28],contigu:23,contract:23,contract_coord:23,contribut:20,control:14,conv1:19,conv2:19,conv4:[],conv5:[],conv:[1,13],convent:[5,20,24],convert:[4,7,12,18,20,23,28],convert_sync_batchnorm:9,convnet:[5,16,19,24],convolut:[3,4,10,14,16,19,20,24],coo:[5,23,24],coord:[4,6,7,8,9,11,12,19,20,21,23,27,28],coordin:[2,4,5,8,9,10,11,12,14,20,21,23,27,28],coordinates_:11,coordmanag:[],coords_batch:[],coords_kei:[6,23],coords_key_or_tensor_strid:6,coords_man:[6,24,27],coords_manag:[23,27],coordskei:[4,14,20,23],coordsmanag:[12,14,23],copi:[2,4,14,18,20,21],correct:[12,15,24],correctli:12,correspond:[6,9,13,20,21,23,24,27,28],cos:12,cost:8,could:[7,9,23],cover:25,cppextens:15,cpu:[4,9,15,16,18,20,23],cpu_onli:22,creat:[3,7,8,9,11,12,13,15,23,24,27,28],create_coords_kei:6,creation:23,credit:[5,24],crit:8,criterion:[7,9,12,19,28],critic:12,cross:[3,8],crossentropyloss:[7,8,9,12,19,28],crucial:5,cubic:13,cublas_v2:15,cuda:[4,9,18,19,20,22,23],cudatoolkit:15,curl:19,curr_it:8,current:[5,9,11,22,23],custom:[3,4,12,20],custom_collation_fn:12,cvpr:[5,16,19],d_f:[7,23,28],d_i:24,data:[5,7,9,11,12,14,19,23,28],data_dict:8,data_label:12,data_load:[7,9,19,28],dataload:[14,28],dataset:[8,14,28],datatyp:[4,18,20],ddot:[5,23,24],deb:[],deconvolut:4,def:[7,8,12,19],defaul:4,defin:[2,3,4,5,8,9,10,12,13,16,18,19,20,21,23,24,27],defini:4,definit:[4,14],demo:[7,14],dens:[5,19,20,23,24],densiti:8,depend:20,deriv:24,descend:[],desir:[4,16,18,20],destin:[],detail:[3,5,9,10,11,18,19,23],detect:22,dev:[19,22],devel:[],devic:[4,7,8,11,14,18,20,22,23],dict:[],dictionari:[],differ:[1,3,4,15,18,20,23],differenti:[14,19],difficult:12,dilat:[1,3,4,5,6,7,13,19,20],dim:[9,23],dimens:[1,2,3,4,5,7,13,16,18,19,20,23,24,28],dimension:[5,19,20,23,24,28],direct:[],directli:19,directori:[15,19],dirnam:15,disassoci:[5,23],discret:12,discrete_coord:12,distanc:[24,26],distort:8,distribut:[19,22],divid:[9,20,23],divis:23,document:28,doe:[4,20],doesn:[6,15],doing:[11,23],done:[2,11,22,23],doubl:[4,18,20,23,27],doubletensor:23,dow:19,down:[5,24],download:[11,22],drastic:12,drop:12,dropout:17,dst_type:[4,18,20],dtype:[4,8,18,20,23,27],due:[5,9],dump_patch:[],duplic:23,dure:[7,9,11,15],dynam:[19,23],each:[0,1,3,4,5,7,9,20,23,24,28],eah:28,easi:[7,12],echo:15,effect:5,effici:[5,9,13],either:28,elem:20,element:[2,4,5,20,23,24,26],empti:[5,13],enabl:[],encompass:5,encount:15,end:[5,8,13,23,24],enforc:[],enforce_cr:[],engin:[1,5,9,12,13,14,20,22,23,24],enough:15,entir:[8,15],enumer:[8,12],environ:16,environment:16,eoan:[],epoch:[8,12],eps:18,equal:[9,20,23],equat:[5,23],equival:[20,24],error:[15,23],etc:[19,24],eval:[],evalu:[],even:[4,5,23],everi:[2,13,18,20],everyth:[12,13],exactli:[],exampl:[2,4,9,10,11,12,14,15,16,18,20,21,22,24,25,26,27,28],examplenetwork:[7,19],excess:15,exist:[5,23,24,27],expens:[13,16],experi:14,experiment:27,explicitli:15,expm:8,exponenti:24,exponentiallr:8,extens:[5,24],extra:[],extra_repr:[],extract:[5,6,7,9,24],extrem:13,eye:8,f_i:24,f_o:24,face:[8,15],face_area:8,face_idx:8,fail:15,failur:[],fall:[],fals:[1,3,4,6,7,18,19,20,21,23,28],familiar:12,fast:[8,12,13,15],faster:[9,14,20],fatal:15,fault:15,feat:[7,8,9,11,12,19,21,23,28],featrues_:11,feats_batch:12,featur:[2,5,6,8,9,10,11,12,13,14,16,20,21,23,24,27,28],feautr:18,fed:9,feed:[1,9,11,23,28],feel:[15,19],few:19,field:[5,24],file:0,file_nam:11,fill:12,fill_:[],filter:21,find:[5,13,15,24],finetun:[],first:[1,2,3,5,7,8,9,11,12,19,20,23],fix:8,flag:[],float16:[4,18,20],float64:[4,18,20],floattensor:23,floor:11,floor_indic:8,floor_num:8,fnv:[],follow:[1,5,9,12,13,15,19,22,24],forc:[4,23],force_cr:[6,23,27],force_remap:6,forg:[],form:24,format:[0,5,8,23,24],former:[2,18,20],fortun:[16,19],forward:[1,2,4,7,11,18,20,21,27],found:[8,12,15],frac:[4,20],free:[15,19],freez:[],from:[4,5,7,9,11,21,23,24,28],from_numpi:12,fulli:19,fundament:5,futur:27,gan:[],gather:9,gaussian:[8,12],gcc:[19,22],gener:[1,4,7,10,12,13,14,15,19,20,23,24,28],generate_new_coord:4,geometr:19,geometri:8,get:[6,7,9,11,15,19,28],get_batch_indic:6,get_batch_s:6,get_coo_broadcast_coord:[],get_coord:6,get_coords_kei:[],get_coords_map:[6,14],get_coords_size_by_coords_kei:6,get_devic:23,get_kernel:3,get_kernel_map:6,get_kernel_map_by_kei:[],get_lr:8,get_mapping_by_tensor_strid:6,get_row_indices_per_batch:6,get_union_map:6,getkei:6,gettensorstrid:6,git:[19,22],github:[8,15,19,22],give:15,given:[3,4,13,18,20,23,24,28],global:[2,10],globalpoolingmod:[18,20],good:13,googl:[],googlegroup:19,gpu1:[4,18,20],gpu:[4,14,18,19,20],grad_input:[],grad_output:[],gradient:[],graph:[19,23],grid:[24,28],group:[],guidelin:14,gwak:19,half:[4,18,20,24],handl:[5,23],happen:23,has:[4,5,12,13,24],has_bia:[1,4,7,13,19],hash:[12,23,24],hash_typ:[],have:[5,8,9,10,12,15,19,22,24,28],heavi:9,help:[6,28],helper:[],here:[12,23],hide:23,hierarch:13,high:[19,20,24],higher:[5,19,22],highli:[19,22],home:15,hook:[2,18,20],host:[4,18,20],hotel:14,how:[5,7,19,25],howev:[5,8,9,10,12,13,15,16,19,20,22,24],hpp:15,hstack:12,http:[8,19,22],hue:8,hybrid:3,hyper:[12,13],hypercross:[3,13],hypercub:[3,5],hyperrectangl:28,iccv:19,ideal:9,ident:[4,20,24],identifi:[],ids:[],idx:[],ieee:19,ignor:[0,2,18,20,28],ignore_index:[12,28],ignore_label:28,illustr:[],imag:[2,4,5,8,20,24],immedi:[],implement:4,in_channel:[1,4,7,13,19,27],in_coords_kei:[],in_feat:[7,19],in_featur:[4,18,20],in_kei:6,in_key_or_tensor_strid:6,in_tensor_strid:6,includ:[0,22],inclus:23,increas:[9,13,16],ind:11,independ:8,index:[0,5,11,12,13,14,20,23,28],indic:[5,6,8,12,23,24,28],individu:[],indoor:[11,19,22],ineffici:[5,13],info:8,inform:19,inherit:12,init:[],init_weight:[],initi:[4,6,9,12,17,18,21,27,28],initialize_enforc:[],inplac:19,inproceed:19,input1:27,input2:27,input:[2,4,5,6,7,9,10,11,12,13,16,18,19,20,21,24,27,28],input_glob:2,ins:[6,28],insid:23,instal:[11,15],instanc:[2,5,9,13,18,20,23],instead:[2,5,8,12,13,18,20,22],instruct:[0,19,22],int32:12,integ:[24,25,28],integr:[4,18,20],intel:22,interact:11,intercept:12,interest:5,intern:[5,12,17,18,21,23,27],intro:[],introduct:14,inttensor:[3,4,6,20,23,28],investig:[5,24],invok:[],iput2:27,is_pool:6,is_transpos:[3,6],iskeyset:6,issu:[14,19],item:12,iter:[8,9,12,28],iterabledataset:12,its:5,itself:0,job:[9,15],junyoung:19,keep:21,keep_var:[],kei:[6,13,23],kernel:[1,4,5,6,9,10,12,14,16,19,20,22],kernel_gener:[4,13,20],kernel_s:[1,3,4,6,7,13,19,20],kernelgener:[3,4,13,20],known:5,kwarg:[4,17,18,20],label:[6,7,8,9,11,12,19,28],label_tensor_strid:6,labels_batch:12,land:0,larg:[1,9,24],larger:9,last:20,latest:[22,23],latter:[2,18,20],layer:[2,4,9,10,14,18,19,20,24,25],lceil:4,lead:15,least:[4,20,24],left:4,length:[4,20,28],let:[5,7,9,12],libopenbla:[],librari:[5,14,15,19,22,24],libtbb:[],like:[12,15,19],likewis:[],limit:[15,28],limit_numpoint:28,line:12,linear:[4,10,18,19,20],link:15,list:[3,4,5,6,11,12,19,20,23,24,25,28],list_of_row_indic:[],live:[4,18,20],load:[8,11,12,13,14,23],load_fil:11,load_state_dict:[],loader:[9,11,12,14,19],local:15,locat:12,log:8,logic:8,longtensor:[6,28],loss:[7,8,9,12,19,28],lot:13,low:8,lower:24,lr_schedul:8,mai:[0,20],main:[8,12,13],maintain:[9,12],make:[0,4,14,15,18,19,20,23],makefil:[],manag:[9,13,14,23,27],mani:[5,13,22,24],manual:23,map:[1,5,6,9,12,16,19,20,28],markdown:0,mask:21,match:[],math:22,mathbb:[4,5,24],mathbf:[2,4,5,20,23,24],mathcal:[2,4,5,20,24],mathscr:24,matric:[5,24],matrix:[3,4,5,16,20,23,24,28],matter:6,max:[8,11,20,23],max_:20,max_coord:23,max_epoch:12,max_it:8,max_label:6,maxim:8,mean:9,member:[],memo:[],memori:[4,8,18,20,24],mention:13,mesh:[2,4,8,20],mesh_cad:8,method:[3,4,15,18,20],might:[15,16],min:[7,8,23],min_coord:23,mini:[5,9,12,23],minimum:[23,24,26],mink:[15,19],minkowski:[5,9,12,13,14,16,22,23,24],minkowskiavgpool:14,minkowskibatchnorm:[7,9,14,19],minkowskibroadcast:14,minkowskibroadcastaddit:14,minkowskibroadcastconcaten:14,minkowskibroadcastmultipl:14,minkowskicelu:14,minkowskiconvolut:[1,7,13,14,19],minkowskiconvolutiononcoord:[],minkowskiconvolutiontranspos:[1,14],minkowskiconvolutiontransposeoncoord:[],minkowskicoord:[4,6,20],minkowskidropout:14,minkowskiengin:[1,2,3,4,5,6,7,9,11,12,13,15,17,18,20,21,22,23,24,27,28],minkowskienign:21,minkowskiglobalpool:[2,7,14,19],minkowskiinstancenorm:14,minkowskilinear:[7,19],minkowskimaxpool:14,minkowskinetwork:19,minkowskinonlinear:14,minkowskinorm:14,minkowskipool:14,minkowskipoolingtranspos:14,minkowskiprelu:14,minkowskiprun:14,minkowskirelu:[7,14,19],minkowskiselu:14,minkowskisigmoid:14,minkowskisoftmax:14,minkowskisumpool:14,minkowskisyncbatchnorm:[9,14],minkowskisynchbatchnorm:9,minkowskitanh:14,minkowskithreshold:14,minkowskiunion:14,minkunet34c:9,minkunet:9,minu:23,miscellan:14,miscellanea:14,miss:[],missing_kei:[],mode:[18,20],model:[4,8,11,18,20],modelnet40:14,modest:9,modifi:[0,4,15,18,20],modul:[2,4,7,15,17,18,20,21,27],momentum:[8,12,18],more:[5,9,10,11,12,18,19,23],most:[4,5,12,23],move:[4,18,20],multi:[10,12,14,15,16,18,19],multipl:[2,5,14,24],multipli:2,must:[4,5,12,19,20,23,25,27,28],n_f:24,n_sampl:8,n_samples_per_fac:8,name:22,named_buff:[],named_children:[],named_modul:[],named_paramet:[],namedtupl:[],natur:5,nchannel:12,ndarrai:[6,28],necessarili:5,need:[2,8,9,12,18,19,20,23,24],neg:24,neighbor:24,net:[1,7,8,9,12,19,28],network:[1,2,4,5,7,8,9,10,11,12,14,16,20,23,24],neural:[5,10,12,16,23,24],new_group:[],next:[8,9,19],nois:[8,12],noise_typ:12,noisi:12,non:[4,5,13,20,24],non_block:[4,18,20],none:[3,4,6,18,20,23,27,28],norm:[8,14],normal:[10,11,18],note:[1,5,7,12],noth:8,nueral:1,num_data:12,num_devic:9,num_featur:18,num_nois:12,num_thread:6,num_work:12,number:[1,3,4,5,9,10,14,15,20,23,24,27,28],numpi:[6,8,15,19,22,23,28],nvcc:[15,19],nvidia:19,o3d:[8,11],object:[4,18,20,23,24],observ:9,obviou:23,offset:[1,3,4,5,20],often:24,old:15,omp_num_thread:16,onc:[11,12],one:[2,9,12,15,18,20,21,23,24,28],ones:12,onli:[1,2,4,5,8,18,20,24],open3d:[8,11],openbla:[15,19,22],oper:[2,5,8,13,16,19,24],optim:[4,7,8,9,12,18,19,20],option:[3,4,12,15,18,20,23,24,28],order:[5,24],origin:[2,5,12,20,24],other:[1,13,19],otherwis:24,our:[],out:[2,4,5,6,9,12,19,20,28],out_channel:[1,4,7,13,19],out_coords_kei:[4,6],out_feat:[7,19],out_featur:[4,9,18,20],out_kei:6,out_key_or_tensor_strid:6,out_nchannel:12,out_sp_tensor:[6,28],out_tensor_strid:6,outer:4,output:[2,4,5,6,7,9,12,13,16,19,20,21,23,24,27,28],outsid:12,over:[1,8,9],overhead:9,overlap:27,overridden:[2,18,20],own:[8,12],packag:[19,22,23],page:[0,1,5,14,15,19],pair:24,parallel:[9,11,15,16],parallel_appli:9,param:8,paramet:[4,8,12,18,20],part:[5,12,16],particular:[],pass:[1,2,18,20],path:[11,15],pattern:[9,19],pcd:11,pdf:19,per:[6,8,9,20],percept:5,perceptron:10,perform:[2,5,9,12,18,20],permute_label:6,persist:[],photo:[5,24],pick:6,pin:[4,18,20],pip3:[19,22],pip:[0,11,22],pipelin:14,pixel:24,place:[4,18,20],platform:19,pleas:[3,5,7,8,9,10,11,15,19,20,23,28],point:[1,4,5,8,9,10,11,18,19,20,23,28],pointcloud:8,pointnet:14,polygon:8,pool:[10,19,20,24],posit:[25,28],possibl:[4,13,18,20],post:11,pre:[],pred:11,predefin:5,predict:11,prefix:[],prelu:17,prepar:11,prepend:28,preprocess:23,present:[],pretrain:22,pretti:9,previou:13,print:[6,12,19,28],print_diagnost:6,problem:15,proce:12,proceed:19,process:[1,10,11,12,16,23],process_group:18,process_id:[],product:4,properti:23,propos:5,proven:5,provid:[3,4,5,12,15,16,19,20,22,23],prune:21,pseudo:11,put:23,py3:[15,19],pypa:19,pypi:[19,22],python3:[19,22],python:[8,11,12,15,16,22,28],pytorch:[9,12,14,15,18,19,22,28],quantiz:[8,11,14,19,23,28],quantization_s:[12,28],quantized_coord:11,question:19,quick:14,quickli:13,quit:24,r_1:8,r_2:8,rand:[8,12,21,27],randn:8,random:[8,12],randomlinedataset:12,randomrot:8,randomscal:8,randomshear:8,randomtransl:8,rang:[4,7,8,9,12],rank:[11,24],rare:15,rate:4,ravel:[],rceil:4,read_point_cloud:11,readm:0,reason:9,recept:24,recip:[2,18,20],recognit:19,recommend:[9,19,22,23],recommonmark:0,recomput:[],record:[],rectangular:3,recurr:5,recurs:[],reduc:[2,6,13,20],reduct:2,refer:[3,7,8,9,10,11,13,14,19,20,23,28],referenc:12,regardless:12,region:3,region_offset:[3,4,6,20],region_typ:[3,4,6,13],regiontyp:[4,13,14,20],regist:[2,18,20],register_backward_hook:[],register_buff:[],register_forward_hook:[],register_forward_pre_hook:[],register_hook:[],register_paramet:[],reimplement:[],reinstal:15,rel:12,relax:5,relu:[17,19],remov:21,removablehandl:[],repeat:13,repetit:24,replac:[8,9],replic:9,replica:14,report:1,repositori:[],repres:[23,24],represent:[5,8,23,24],request:19,requir:[4,9,13,15,24],requires_grad:23,requires_grad_:23,resampl:8,resample_mesh:8,research:[5,8],reset_paramet:[],residu:[13,24],resnet:14,resolut:24,respect:[4,18,20],rest:[9,24],restructuredtext:0,result:[4,20,22],return_index:[12,28],return_numpi:8,reus:[1,23,24],right:[4,15],rightarrow:24,rng:12,rnn:5,robust:8,room:[1,14],root:19,rotat:11,row:[6,13,16,24],rst:0,run:[2,11,14,15,18,20],running_mean:[],running_var:[],same:[1,2,5,8,9,13,19,20,23,24,27,28],sampl:[8,12,20],sample_face_idx:8,satur:8,savares:19,save:[5,23,24],scalar:24,scale:8,scan:5,scannet:[1,11],scene:22,schedul:8,scope:[],scriptmodul:[17,18,21,27],seamlessli:12,search:14,second:[1,2,5],section:13,see:[4,6,11,15,18,20,28],seem:9,segment:[5,14,15,19,28],self:[4,6,7,8,12,18,19,20,23,28],selu:17,semant:[5,14,19,22],separ:12,sequenc:[6,28],sequenti:[1,5,7],seri:[8,10],set:[1,4,5,9,11,12,15,16,18,20,23,24,28],set_ignore_label_when_collis:[],set_origin_coords_kei:6,set_tensor_strid:23,setkei:6,settensorstrid:6,setup:[15,19,22],sgd:[8,12],shallow:7,shape:[2,3,4,5,19,20,23],share:[17,18,21,24,27],share_memori:[],shear:8,should:[2,3,4,11,15,18,20],show:7,shrink:24,side:[11,28],sigmoid:17,signatur:[4,6,18,20,28],signific:9,silent:[2,18,20],silvio:19,similar:[4,9,18,19,20],similarli:24,simpl:[5,8],simpli:[5,16,19,22,23,24],sin:[8,12],sinc:[2,5,8,12,18,20,24],singl:[9,15,24],sinput:11,size:[1,3,4,5,7,8,9,10,12,13,20,21,23,24,28],skip:19,slurm:16,small:[1,9],smaller:9,snippet:[13,15],softmax:17,solut:13,solv:15,some:[5,8,11,12,15,16,24],sometim:15,sourc:0,sout:8,soutput:11,sp_tensor:[6,28],space:[2,3,4,5,20,23,24,28],spare_tensor:23,spars:[2,4,7,8,9,10,11,12,13,14,18,20,21,23,27,28],sparse_col:[11,14,23],sparse_quant:[11,12,14,19],sparse_tensor_bas:26,sparsecol:[12,14],sparseconvnet:1,sparsehash:[],sparsetensor:[4,5,6,7,8,9,11,12,14,19,20,21,24,27,28],sparsiti:5,spatial:[4,5,10,18,19,20,23],spatio:[5,16,19],special:[5,10],specif:[4,5,20,22,24],specifi:[4,6,18,19,20,21],speech:5,speed:[9,16],speedup:14,sphinx_markdown_t:0,sphinx_rtd_them:0,sqrt:8,squeez:12,src:15,standard:[19,23],stanfordvl:[19,22],start:14,stat_freq:8,state:[5,17,18,21,27],state_dict:[],step:[8,9,12,23],str:[],strict:[],strictli:[],stride:[1,3,4,5,6,7,10,19,20,23,27],stride_2_conv:[6,28],string:[4,18,20],structur:[12,13],subclass:[2,18,20],submanifold:5,submit:[15,19],submodul:[],subsequ:[],subset:[],subtract:11,sudo:19,suitabl:[12,28],sum:[8,20,24,27],sum_:[4,5,20],support:[9,19,20],sure:[4,12,15,19,23],surfac:8,swap:13,sync_bn_modul:[],synchron:[14,18],system:[8,15,16],system_error:15,tabl:[12,24],take:[1,2,9,11,18,20],tan:12,tanh:17,target:9,target_devic:9,target_tensor_strid:6,task:5,tbb:[],tediou:12,tee:[],tempor:[5,16,19],tensor:[1,2,4,6,7,8,9,10,11,12,13,14,18,20,21,23,27,28],tensor_strid:[3,4,6,20,23,28],terminolog:[5,14],test:1,text:[2,4,5,20,24],than:[5,12],thei:24,them:[2,18,20,24],theta:[8,12],thi:[0,1,2,4,5,7,8,9,10,11,12,15,16,18,20,22,23,24,25,27],thing:12,think:10,those:[4,8],thread:[9,14,15,19],threshold:17,thrid:3,through:[5,8,9],thrust:15,thu:[1,5,7,9,12,13,20],time:[1,2,3,4,5,7,8,9,12,13,20,23,24,28],titan:[1,9],titl:19,to_dens:[],to_spars:[],toctre:0,top:11,torch:[3,4,6,7,8,9,12,17,18,19,20,21,22,23,27,28],torchvis:[15,19],tot_it:12,total:9,track_running_stat:18,tradit:[5,24],train:[7,11,14,19,28],train_dataload:[8,12],train_dataset:12,train_it:[8,12],tran:8,transform:10,translat:8,transpos:[4,19,20],transposed_strid:6,treat:23,tri:[4,18,20],triangl:8,trianglemesh:8,trivial:13,troubl:15,tupl:[9,19,28],tutori:[8,12,23,25],two:[3,8,13,24],two_dim_train:[],txt:[],type:[3,4,6,18,20,28],typic:[2,5],ubuntu:[19,22],unchang:[4,18,20],uncom:[],unconvent:12,understand:23,unet:12,unexpect:[],unexpected_kei:[],union:[4,6,20,27],uniqu:23,unique_feat:12,unique_label:12,unit:8,univers:[],unless:[],unlimit:19,unord:13,unpool:[19,20],updat:27,upsampl:4,usag:[9,15,19,27,28],use:[1,5,8,9,12,13,15,16,19,20,22,23,24,25,27],used:[1,2,4,8,9,13,20,21,28],useful:12,user:19,uses:[3,8,10,15,19],using:[7,9,13,15,22,24],usr:15,util:[8,11,12,14,19,23],val_dataload:8,val_it:8,valid:[4,24],valu:[2,12,13,24,28],vari:20,variabl:[15,16,27],variou:[1,9],various_output:12,vdot:[5,23,24],vec_cross:8,vectic:8,vector:[2,5,7,8,21,23,24],veri:[7,9,13,24],versa:7,version:[19,20,22,23],vertic:8,via:[19,22,23],vice:7,virtual:[],vision:[5,19],visit:19,visual:[5,11,19,22],volum:20,volumetr:13,voxel:[1,11,19,28],voxel_s:11,vstack:12,wai:12,want:[16,22,28],warn:0,wast:[],weight:[4,5,11,14,18,20,22],weight_decai:[8,12],well:[1,12],what:23,when:[3,4,5,7,8,11,15,18,20,22,23,24],where:[2,3,4,5,8,10,15,20,23,24,28],wherea:[1,24],whether:[],which:[5,6,8,9,13,15,16,19,21,22,23,24],whole:[],whose:[4,12,13,18,20],wise:2,within:[2,5,12,18,20,23,24],without:15,work:[5,12,14,15],world:[],would:[3,19],wrap:11,wrapper:[7,28],write:0,x_1:[5,23,24],x_i:[5,23],x_indic:28,x_n:[5,23,24],xs_data:12,year:19,yield:[],you:[0,4,6,8,9,10,11,12,13,15,16,19,20,22,23,24,28],your:[8,12,15,19,23],your_program:16,ys_data:12,zero:[5,8,12,13,20,24],zero_grad:[7,8,12],zip:[6,9,11,12,28]},titles:["Documentation with Sphinx","Benchmark","MinkowskiBroadcast","Miscellaneous Classes","MinkowskiConvolution","Convolution on a Sparse Tensor","Coordinate Management","Working with Pytorch Layers","ModelNet40 Classification","Multi-GPU Training","PointNet","Semantic Segmentation","Training Pipeline","Guidelines for Faster Networks","Welcome to MinkowskiEngine\u2019s documentation!","Common Issues","Miscellanea","MinkowskiNonlinearities","MinkowskiNormalization","Minkowski Engine","MinkowskiPooling","MinkowskiPruning","Quick Start","SparseTensor","Definitions and Terminology","Convolution Basics","Sparse Tensor Basics","MinkowskiUnion","Utility Functions and Classes"],titleterms:{"class":[3,28],"function":[15,28],"new":15,after:15,all:[9,15],anaconda:19,analysi:9,appli:9,augment:8,automat:0,backward:19,basic:[25,26],batch:9,batch_sparse_col:28,batched_coordin:28,benchmark:1,bla:[19,22],build:19,cach:13,cite:19,classif:[7,8],common:15,compil:[15,19,22],conda:[15,19],configur:19,content:[0,14],control:16,convolut:[1,5,13,25],coordin:[6,24],coordskei:6,coordsmanag:6,copi:9,cpu:[19,22],creat:19,cross:13,cuda:15,cuda_hom:15,curat:0,custom:[0,13,19],data:8,dataload:12,dataset:12,definit:24,depend:0,devic:[9,15],dimension:13,discuss:19,document:[0,14,19],due:15,engin:19,environ:[15,19],exampl:[7,8,19],experi:[1,9],failur:15,faster:13,featur:[7,19],file:15,forc:15,forward:19,from:[15,19],gener:[0,3,5],get_coords_map:28,gpu:9,guidelin:13,high:13,hotel:11,html:0,incorrect:15,indic:14,instal:[0,19,22],invalid:15,issu:15,kei:24,kernel:[3,13,24],latest:19,layer:[1,7,13],list:[0,15],load:9,loader:8,make:[8,12],manag:[6,24],map:[13,24],memori:15,minkowski:19,minkowskiavgpool:20,minkowskibatchnorm:18,minkowskibroadcast:2,minkowskibroadcastaddit:2,minkowskibroadcastconcaten:2,minkowskibroadcastmultipl:2,minkowskicelu:17,minkowskiconvolut:4,minkowskiconvolutiononcoord:[],minkowskiconvolutiontranspos:4,minkowskiconvolutiontransposeoncoord:[],minkowskidropout:17,minkowskiengin:[14,19],minkowskiglobalpool:20,minkowskiinstancenorm:18,minkowskimaxpool:20,minkowskinonlinear:17,minkowskinorm:18,minkowskipool:20,minkowskipoolingtranspos:20,minkowskiprelu:17,minkowskiprun:21,minkowskirelu:17,minkowskiselu:17,minkowskisigmoid:17,minkowskisoftmax:17,minkowskisumpool:20,minkowskisyncbatchnorm:18,minkowskitanh:17,minkowskithreshold:17,minkowskiunion:27,miscellan:3,miscellanea:16,mismatch:15,mkl:[19,22],modelnet40:8,modul:0,multi:9,multipl:9,network:[13,19,22],neural:19,norm:9,number:16,object:15,onli:[0,19,22],oom:15,other:22,out:15,pip:19,pipelin:12,pointnet:10,pool:13,project:19,python:19,pytorch:7,quantiz:12,quick:[19,22],refer:[5,16,24],regiontyp:3,replica:9,requir:[19,22],resnet:8,reus:13,room:11,run:[8,19,22],segment:[11,22],semant:11,setup:1,shape:13,simpl:1,singl:1,sourc:19,space:13,spars:[5,19,24,26],sparse_col:28,sparse_quant:28,sparsecol:28,sparsetensor:23,speedup:9,sphinx:0,start:[19,22],stride:[13,24,26],support:22,symbol:15,synchron:9,system:[19,22],tabl:14,tensor:[5,19,24,26],terminolog:24,thread:16,train:[8,9,12],transpos:13,undefin:15,unet:1,upgrad:15,using:19,util:28,version:15,virtual:[15,19],websit:0,weight:9,welcom:14,work:7}})