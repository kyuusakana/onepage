define([],function(){
	return new class {
		constructor(arg) {
			
		}
		topage(page){
			window.location.hash=page;
			require.undef(page);
			require([page]);
		}
		openpage(page){
			window.open('home.html#'+page);
		}
	}
});
