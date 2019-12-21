define(['vue'],function(Vue){
	Vue.component('app', {
		props:['prop'],
		data(){
		},
		template: `,
			<component v-bind:is="prop.component"></component>
		`,
	});
	return new class {
		constructor(arg) {
			this.vue=null;
			this.init();
		}
		init(){
			this.vue=new Vue({
				el: 'app',
				data:{
					prop:{
						component:'',
					},
				},
			});
		}
	}
});