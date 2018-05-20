<template>	
	<div class="interface">
		<InterfaceComponentnnii :Field001='daxa_1' :Field002='daxa_2' :Field003='daxa_3' :Field004='daxa_4'>
		</InterfaceComponentnnii>
	</div>
</template>
<script>
	import InterfaceComponentnnii from './spares/InterfaceComponentnnii.vue'	
	export default {
		name: 'Interface',
		components: { InterfaceComponentnnii },
		data(){
			return {
				daxa_1: 'Quarteaur I',
				daxa_2: 'Quarteaur II',
				daxa_3: 'Quarteaur III',
				daxa_4: 'Quarteaur IV'
			};
		}
	};
</script>