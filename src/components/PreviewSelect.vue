<template>
	<b-col :cols="element.cols" :sm="element.cols_sm" :md="element.cols_md" :lg="element.cols_lg" :xl="element.cols_xl">
		<b-form-group :description="element.description" :label="element.label" :label-for="element.model" :id="'form_group_'+element.model" 
						:label-class="element.label_class != '' ? element.label_class : null"
						:label-size="element.size"
						:label-cols="element.label_cols != '' ? element.label_cols : null" 
						:label-cols-sm="element.label_cols_sm != '' ? element.label_cols_sm : null" 
						:label-cols-md="element.label_cols_md != '' ? element.label_cols_md : null" 
						:label-cols-lg="element.label_cols_lg != '' ? element.label_cols_lg : null" 
						:label-cols-xl="element.label_cols_xl != '' ? element.label_cols_xl : null"
						:label-align="element.label_align"
						:label-align-sm="element.label_align_sm"
						:label-align-md="element.label_align_md"
						:label-align-lg="element.label_align_lg"
						:label-align-xl="element.label_align_xl">
			<b-form-select :id="element.model" :options="element.select_options" :size="element.size"></b-form-select>
		</b-form-group>
	</b-col>
</template>
<script>
	export default {
		props: {
			element: {
				type: Object,
				required:true,
			}
		},
	}
</script>