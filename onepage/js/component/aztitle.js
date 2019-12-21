define(['vue'],function(Vue){
	return Vue.extend({
		props: ['prop'],
		data(){
			return{
			}
		},
		template: `
			<div class="title">
				这是第{{prop.num}}页
			</div>
		`,
		methods:{
		},
	});
});