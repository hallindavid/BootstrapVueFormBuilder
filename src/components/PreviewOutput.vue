<template>
	<div>
		<template v-for="(row,row_index) in rows">
			<b-row :key="row_index" class="mt-2">
				<template v-for="(element, element_index) in row.items">
					<component v-bind:is="get_preview_component(element)" v-bind:element="element" :key="element_index"></component>
				</template>
			</b-row>
		</template>
	</div>
</template>
<script>
	export default {
		props: {
			rows: {
				type: Array,
				required:true,
			}
		},
		methods: {
			get_preview_component(element) {
				if (element.type == "checkbox")
				{
					return "preview-checkbox";
				} else if (element.type == "select")
				{
					return "preview-select";
				} else if (element.type == "textarea") {
					return "preview-form-textarea";
				} else {
					return "preview-form-input";
				}


			}
		}
	}
</script>