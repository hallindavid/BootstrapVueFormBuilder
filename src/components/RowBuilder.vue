<template>
	<div class="my-1 rowbuilder">
		<slot />	
		<b-button size="sm" variant="outline-secondary" @click="add_item()"><font-awesome-icon icon="plus" /> Field</b-button>
		<hr>
	</div>
</template>
<script>
	import { ContainerMixin  } from 'vue-slicksort';

	export default {
		mounted() {
			this.add_item();
		},
		props: {
			row_index: {
				type: Number,
				required:true,
			},
			value: {
				type: Array,
				required:true
			}
		},
		mixins: [ContainerMixin],
		methods: {
			add_item() {
				this.$emit('add_item', this.row_index);
			},
		},
	}
</script>