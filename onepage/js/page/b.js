define(['vue','app','aztitle'],function(Vue,app,aztitle){
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
			</div>
		`,
		components:{
			aztitle:aztitle,
		},
		methods:{
			toc(){
				require.undef('c');
				require(['c']);
			},
		},
	});
});