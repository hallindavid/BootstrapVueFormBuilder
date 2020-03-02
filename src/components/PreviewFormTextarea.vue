<template>
	<b-col :cols="element.cols != '' ? element.cols : null" 
			:sm="element.cols_sm != '' ? element.cols_sm : null" 
			:md="element.cols_md != '' ? element.cols_md : null" 
			:lg="element.cols_lg != '' ? element.cols_lg : null" 
			:xl="element.cols_xl != '' ? element.cols_xl : null">
		<b-form-group 	:description="element.description != '' ? element.description : null" 
						:label="element.label != '' ? element.label : null" 
						:label-for="element.model != '' ? element.model : null" 
						:id="element.model != '' ? 'form_group_'+element.model : null" 
						:label-class="element.label_class != '' ? element.label_class : null"
						:label-size="element.size != '' ? element.size : null"
						:label-cols="element.label_cols != '' ? element.label_cols : null" 
						:label-cols-sm="element.label_cols_sm != '' ? element.label_cols_sm : null" 
						:label-cols-md="element.label_cols_md != '' ? element.label_cols_md : null" 
						:label-cols-lg="element.label_cols_lg != '' ? element.label_cols_lg : null" 
						:label-cols-xl="element.label_cols_xl != '' ? element.label_cols_xl : null"
						:label-align="element.label_align != '' ? element.label_align : null"
						:label-align-sm="element.label_align_sm != '' ? element.label_align_sm : null"
						:label-align-md="element.label_align_md != '' ? element.label_align_md : null"
						:label-align-lg="element.label_align_lg != '' ? element.label_align_lg : null"
						:label-align-xl="element.label_align_xl != '' ? element.label_align_xl : null">
			<b-form-textarea 	:id="element.model != '' ? element.model : null" 
							:placeholder="element.placeholder != '' ? element.placeholder : null" 
							:size="element.size != '' ? element.size : null" 
							trim></b-form-textarea>
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
		methods: {

		}
	}
</script>