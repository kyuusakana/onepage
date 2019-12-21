require.config({
	paths: {
		rcss:'library/require-css',
		vue:'library/vue.min',
		base:'js/config/loader',
		app:'js/app',
		a:'js/page/a',
		b:'js/page/b',
		c:'js/page/c',
		aztitle:'js/component/aztitle',
	},
	shim:{
		aztitle:{deps: ['rcss!css/component/aztitle.css']},
	}
});
require(['app'],(app)=>{
	require(['a']);
});