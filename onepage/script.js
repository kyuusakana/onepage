var OPTION={
	page:{
		a:'a',
		b:'b',
		c:'c'
	},
	component:{
		aztitle:'aztitle'
	},
	class:{
		fn:'common'
	},
	config:{
		base:'loader'
	},
	library:{
		rcss:'require-css',
		vue:'vue.min'
	},
	require:{
		paths: {
			app:'js/app'
		},
		shim:{}
	}
};
Object.keys(OPTION.page).forEach(function(key){
	OPTION.require.paths[key]='js/page/'+OPTION.page[key];
});
Object.keys(OPTION.component).forEach(function(key){
	OPTION.require.paths[key]='js/component/'+OPTION.component[key];
	OPTION.require.shim[key]={deps: ['rcss!css/component/'+OPTION.component[key]+'.css']};
});
Object.keys(OPTION.class).forEach(function(key){
	OPTION.require.paths[key]='js/class/'+OPTION.class[key];
});
Object.keys(OPTION.config).forEach(function(key){
	OPTION.require.paths[key]='js/config/'+OPTION.config[key];
});
Object.keys(OPTION.library).forEach(function(key){
	OPTION.require.paths[key]='library/'+OPTION.library[key];
});
require.config(OPTION.require);
require(['app','fn'],(app,fn)=>{
	var hash=window.location.hash.substring(1);
	var bool=false;
	var fisrt='';
	Object.keys(OPTION.page).forEach(function(key){
		if(fisrt==''){
			fisrt=OPTION.page[key];
		};
		if(hash==OPTION.page[key]){
			bool=true;
		};
	});
	if(bool){
		fn.topage(window.location.hash.substring(1));
	}else{
		fn.topage(fisrt);
	};
	window.onhashchange=function(){
		fn.topage(window.location.hash.substring(1));
	};
});
