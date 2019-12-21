define(['vue','app','fn','aztitle'],function(Vue,app,fn,aztitle){
	app.vue.prop.component='button-counter2';
	Vue.component("button-counter2", {
	  data: function() {
	    return {
	      count: 0,
				prop:{
					num:'二',
				}
	    };
	  },
	  template:`,
			<div>
				<aztitle v-bind:prop="prop"></aztitle>
				<button v-on:click="count++">点了b {{ count }} 次</button>
				<button v-on:click="toc">切到c</button>
				<button v-on:click="openc">打开新页面c</button>
			</div>
		`,
		components:{
			aztitle:aztitle,
		},
		methods:{
			toc(){
				fn.topage('c');
			},
			openc(){
				fn.openpage('c');
			},
		},
	});
});