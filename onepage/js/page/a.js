define(['vue','app','aztitle'],function(Vue,app,aztitle){
	app.vue.prop.component='button-counter';
	Vue.component("button-counter", {
	  data: function() {
	    return {
	      count: 0,
				prop:{
					num:'一',
				}
	    };
	  },
	  template:`,
			<div>
				<aztitle v-bind:prop="prop"></aztitle>
				<button v-on:click="count++">点了a {{ count }} 次</button>
				<button v-on:click="tob">切到b</button>
			</div>
		`,
		components:{
			aztitle:aztitle,
		},
		methods:{
			tob(){
				require.undef('b');
				require(['b']);
			},
		},
	});
});