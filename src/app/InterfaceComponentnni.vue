<template>
	<div>
  		<InterfaceComponentnnii :Inquar001='data_1' :Inquar002='data_2' :Inquar003='data_3' :Inquar004='data_4'></spares/InterfaceComponentnnii>
	</div>
</template>

<script>
	import InterfaceComponentnnii from './spares/InterfaceComponentnnii.vue';
	export default {
		name: 'InterfaceComponentnni',
		props: [ 'prta_1' , 'prta_2' , 'prta_3' , 'prta_4' ],
		components: { InterfaceComponentnnii },
		data(){
			return {
				data_1: 'prta_1',
				data_2: 'prta_2',
				data_3: 'prta_3',
				data_4: 'prta_4'
			};
		}	
	};


</script>