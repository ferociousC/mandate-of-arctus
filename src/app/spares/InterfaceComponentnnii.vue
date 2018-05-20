<template>
	<div>
		<div class="interface--quarter--outer top--left">
			<div class="interface--quarter--body">
				<p>
					{{ Field001 }}
	 			</p>
			</div>
		</div>
		<div class="interface--quarter--outer top--right">
			<div class="interface--quarter--body">
				<p>
					{{ Field002 }}
				</p>
			</div>
		 </div>
		<div class="interface--quarter--outer bot--left">
			<div class="interface--quarter--body">
				 <p>
				 	{{ Field003 }}
				 </p>
			 </div>
		</div>
		<div class="interface--quarter--outer bot--right">
			<div class="interface--quarter--body">
				 <p>
					{{ Field004 }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'InterfaceComponentnnii',
		props: ['Field001', 'Field002','Field003','Field004']
	};
</script>
