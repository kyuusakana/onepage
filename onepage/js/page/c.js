define(['vue','app','fn','aztitle'],function(Vue,app,fn,aztitle){
	app.vue.prop.component='button-counter3';
	Vue.component("button-counter3", {
	  data: function() {
	    return {
	      count: 0,
				prop:{
					num:'三',
				}
	    };
	  },
	  template:`,
			<div>
				<aztitle v-bind:prop="prop"></aztitle>
				<button v-on:click="count++">点了c {{ count }} 次</button>
				<button v-on:click="toa">切到a</button>
			</div>
		`,
		components:{
			aztitle:aztitle,
		},
		methods:{
			toa(){
				fn.topage('a');
			},
		},
	});
});