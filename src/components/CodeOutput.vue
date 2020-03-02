<template>
  <pre>
&lt;template&gt;
<template v-for="row in rows">   &lt;b-row<template v-if="row.custom_class.length"> class="{{ row.custom_class }}"</template>&gt;
<template v-for="item in row.items">{{ output_element(item) }}</template>
   &lt;/b-row&gt;
</template>&lt;/template&gt;

&lt;script&gt;
	export default {
		data: function() {
			return {
				<template
  v-for="item in text_models"
><span :key="item.id" v-text="item.model"></span>:"",
				</template><template
  v-for="item in checkbox_models"
><span :key="item.id" v-text="item.model"></span>:false,
				</template><template
  v-for="item in textarea_models"
><span :key="item.id" v-text="item.model"></span>:"",
				</template><template v-for="item in select_models"><span :key="item.id" v-text="item.model"></span>:null,
				{{item.model}}_options: [
					<template v-for="(option, option_index) in item.select_options"><span :key="'select_'+item.id+'_option_'+option_index">{ value:"{{ option.value }}", text: "{{ option.text }}" },</span></template>
				],
				</template><template v-for="item in datepicker_models"><span :key="item.id" v-text="item.model"></span>: "", 
                                {{item.model}}_settings: { 
                                    weekday: 0, 
                                    min_date: null, 
                                    max_date: null, 
                                    value_as_date: false, 
                                }</template>
			}
		},
		computed: {
			<template v-for="item in validation_models">is_{{ item.model }}_valid() {
				if (this.{{item.model}}.length == 0) {
					return null;
				} else {
					return false;
				}
			},
			</template>
		}
	}
}
&lt;/script&gt;
</pre>
</template>
<script>
export default {
  data: function() {
    return {
      text_types: [
        "input-text",
        "input-email",
        "input-password",
        "input-search",
        "input-number"
      ]
    };
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  computed: {
    all_models() {
      return this.rows.map(function(r) {
        return r.items;
      }).flat();
    },
    text_models() {
      return this.all_models.filter(
        item => this.text_types.includes(item.type) && item.model.length > 0
      );
    },
    textarea_models() {
      return this.all_models.filter(
        item => item.type == "textarea" && item.model.length > 0
      );
    },
    datepicker_models() {
      return this.all_models.filter(
        item => item.type == "datepicker" && item.model.length > 0
      );
    },
    checkbox_models() {
      return this.all_models.filter(
        item => item.type == "checkbox" && item.model.length > 0
      );
    },
    select_models() {
      return this.all_models.filter(
        item => item.type == "select" && item.model.length > 0
      );
    },
    validation_models() {
      return this.all_models.filter(
        item => item.scaffold_validation && item.model.length > 0
      );
    }
  },
  methods: {
    output_element(item) {
      if (item.type == "checkbox") {
        return this.output_checkbox(item);
      } else if (item.type == "select") {
        return this.output_select(item);
      } else if (item.type == "textarea") {
        return this.output_textarea(item);
      } else if (item.type == "datepicker") {
        return this.output_datepicker(item);  
      } else {
        return this.output_input_box(item);
      }
    },
    output_checkbox(item) {
      let retval = "";
      //Making the column wrapper
      let attributes = [];
      if (item.cols.length > 0) {
        attributes.push('cols="' + item.cols + '"');
      }

      if (item.cols_sm.length > 0) {
        attributes.push('sm="' + item.cols_sm + '"');
      }

      if (item.cols_md.length > 0) {
        attributes.push('md="' + item.cols_md + '"');
      }

      if (item.cols_lg.length > 0) {
        attributes.push('lg="' + item.cols_lg + '"');
      }

      if (item.cols_xl.length > 0) {
        attributes.push('xl="' + item.cols_xl + '"');
      }
      retval +=
        this.get_spaces(6) +
        "<b-col " +
        attributes.join(" ") +
        ">" +
        this.line_break();

      //Collect the Input Attributes
      let input_attributes = [];

      if (item.model.length > 0) {
        input_attributes.push('id="' + item.model + '"');
        input_attributes.push('v-model="' + item.model + '"');
      }

      if (item.size != "md") {
        input_attributes.push('size="' + item.size + '"');
      }

      if (item.is_switch) {
        input_attributes.push("switch");
      }

      //Smush all the form group attributes and input attributes into a form group

      retval +=
        this.get_spaces(12) +
        "<b-form-checkbox " +
        input_attributes.join(" ") +
        ">";
      if (item.label.length > 0) {
        retval += item.label;
      }

      retval += "</b-form-checkbox>" + this.line_break();

      //Wrap up the column wrapper
      retval += this.get_spaces(6) + "</b-col>" + this.line_break();
      return retval;
    },
    output_input_box(item) {
      let retval = "";
      //Making the column wrapper
      let attributes = [];
      if (item.cols.length > 0) {
        attributes.push('cols="' + item.cols + '"');
      }

      if (item.cols_sm.length > 0) {
        attributes.push('sm="' + item.cols_sm + '"');
      }

      if (item.cols_md.length > 0) {
        attributes.push('md="' + item.cols_md + '"');
      }

      if (item.cols_lg.length > 0) {
        attributes.push('lg="' + item.cols_lg + '"');
      }

      if (item.cols_xl.length > 0) {
        attributes.push('xl="' + item.cols_xl + '"');
      }
      retval +=
        this.get_spaces(6) +
        "<b-col " +
        attributes.join(" ") +
        ">" +
        this.line_break();

      //Collect the Form Group and Input Attributes
      let form_group_attributes = [];
      let input_attributes = [];
      if (item.description.length > 0) {
        form_group_attributes.push('description="' + item.description + '"');
      }

      if (item.label_class.length > 0) {
        form_group_attributes.push('label-class="' + item.label_class + '"');
      }

      if (item.label_cols.length > 0) {
        form_group_attributes.push('label-cols="' + item.label_cols + '" ');
      }

      if (item.label_cols_sm.length > 0) {
        form_group_attributes.push(
          'label-cols-sm="' + item.label_cols_sm + '" '
        );
      }

      if (item.label_cols_md.length > 0) {
        form_group_attributes.push(
          'label-cols-md="' + item.label_cols_md + '" '
        );
      }

      if (item.label_cols_lg.length > 0) {
        form_group_attributes.push(
          'label-cols-lg="' + item.label_cols_lg + '" '
        );
      }

      if (item.label_cols_xl.length > 0) {
        form_group_attributes.push(
          'label-cols-xl="' + item.label_cols_xl + '" '
        );
      }

      if (item.label_align.length > 0) {
        form_group_attributes.push('label-align="' + item.label_align + '" ');
      }

      if (item.label_align_sm.length > 0) {
        form_group_attributes.push(
          'label-align-sm="' + item.label_align_sm + '" '
        );
      }

      if (item.label_align_md.length > 0) {
        form_group_attributes.push(
          'label-align-md="' + item.label_align_md + '" '
        );
      }

      if (item.label_align_lg.length > 0) {
        form_group_attributes.push(
          'label-align-lg="' + item.label_align_lg + '" '
        );
      }

      if (item.label_align_xl.length > 0) {
        form_group_attributes.push(
          'label-align-xl="' + item.label_align_xl + '" '
        );
      }

      if (item.valid_feedback.length > 0) {
        form_group_attributes.push(
          'valid-feedback="' + item.valid_feedback + '" '
        );
      }

      if (item.invalid_feedback.length > 0) {
        form_group_attributes.push(
          'invalid-feedback="' + item.invalid_feedback + '" '
        );
      }

      if (item.scaffold_validation) {
        form_group_attributes.push(':state="is_' + item.model + '_valid"');
      }

      if (item.label.length > 0) {
        form_group_attributes.push('label="' + item.label + '"');
      }

      if (item.model.length > 0) {
        form_group_attributes.push('label-for="' + item.model + '"');
        form_group_attributes.push('id="form_group_' + item.model + '"');
        input_attributes.push('id="' + item.model + '"');
        input_attributes.push('v-model="' + item.model + '"');
      }
      if (item.placeholder.length > 0) {
        input_attributes.push('placeholder="' + item.placeholder + '"');
      }

      if (item.size != "md") {
        input_attributes.push('size="' + item.size + '"');
      }

      if (item.type == "input-number") {
        input_attributes.push('type="number"');
        if (item.min.length > 0) {
          input_attributes.push('min="' + item.min + '"');
        }
        if (item.max.length > 0) {
          input_attributes.push('max="' + item.max + '"');
        }
      }

      if (item.type == "input-email") {
        input_attributes.push('type="email"');
      }

      if (item.type == "input-password") {
        input_attributes.push('type="password"');
      }

      if (item.type == "input-search") {
        input_attributes.push('type="search"');
      }

      //Smush all the form group attributes and input attributes into a form group
      retval +=
        this.get_spaces(9) +
        "<b-form-group " +
        form_group_attributes.join(" ") +
        ">" +
        this.line_break();
      retval +=
        this.get_spaces(12) +
        "<b-form-input " +
        input_attributes.join(" ") +
        " trim></b-form-input>" +
        this.line_break();
      retval += this.get_spaces(9) + "</b-form-group>" + this.line_break();

      //Wrap up the column wrapper
      retval += this.get_spaces(6) + "</b-col>";
      return retval;
    },
    output_textarea(item) {
      let retval = "";
      //Making the column wrapper
      let attributes = [];
      if (item.cols.length > 0) {
        attributes.push('cols="' + item.cols + '"');
      }

      if (item.cols_sm.length > 0) {
        attributes.push('sm="' + item.cols_sm + '"');
      }

      if (item.cols_md.length > 0) {
        attributes.push('md="' + item.cols_md + '"');
      }

      if (item.cols_lg.length > 0) {
        attributes.push('lg="' + item.cols_lg + '"');
      }

      if (item.cols_xl.length > 0) {
        attributes.push('xl="' + item.cols_xl + '"');
      }
      retval +=
        this.get_spaces(6) +
        "<b-col " +
        attributes.join(" ") +
        ">" +
        this.line_break();

      //Collect the Form Group and Input Attributes
      let form_group_attributes = [];
      let input_attributes = [];
      if (item.description.length > 0) {
        form_group_attributes.push('description="' + item.description + '"');
      }

      if (item.label_class.length > 0) {
        form_group_attributes.push('label-class="' + item.label_class + '"');
      }

      if (item.label_cols.length > 0) {
        form_group_attributes.push('label-cols="' + item.label_cols + '" ');
      }

      if (item.label_cols_sm.length > 0) {
        form_group_attributes.push(
          'label-cols-sm="' + item.label_cols_sm + '" '
        );
      }

      if (item.label_cols_md.length > 0) {
        form_group_attributes.push(
          'label-cols-md="' + item.label_cols_md + '" '
        );
      }

      if (item.label_cols_lg.length > 0) {
        form_group_attributes.push(
          'label-cols-lg="' + item.label_cols_lg + '" '
        );
      }

      if (item.label_cols_xl.length > 0) {
        form_group_attributes.push(
          'label-cols-xl="' + item.label_cols_xl + '" '
        );
      }

      if (item.label_align.length > 0) {
        form_group_attributes.push('label-align="' + item.label_align + '" ');
      }

      if (item.label_align_sm.length > 0) {
        form_group_attributes.push(
          'label-align-sm="' + item.label_align_sm + '" '
        );
      }

      if (item.label_align_md.length > 0) {
        form_group_attributes.push(
          'label-align-md="' + item.label_align_md + '" '
        );
      }

      if (item.label_align_lg.length > 0) {
        form_group_attributes.push(
          'label-align-lg="' + item.label_align_lg + '" '
        );
      }

      if (item.label_align_xl.length > 0) {
        form_group_attributes.push(
          'label-align-xl="' + item.label_align_xl + '" '
        );
      }

      if (item.valid_feedback.length > 0) {
        form_group_attributes.push(
          'valid-feedback="' + item.valid_feedback + '" '
        );
      }

      if (item.invalid_feedback.length > 0) {
        form_group_attributes.push(
          'invalid-feedback="' + item.invalid_feedback + '" '
        );
      }

      if (item.scaffold_validation) {
        form_group_attributes.push(':state="is_' + item.model + '_valid"');
      }

      if (item.label.length > 0) {
        form_group_attributes.push('label="' + item.label + '"');
      }

      if (item.model.length > 0) {
        form_group_attributes.push('label-for="' + item.model + '"');
        form_group_attributes.push('id="form_group_' + item.model + '"');
        input_attributes.push('id="' + item.model + '"');
        input_attributes.push('v-model="' + item.model + '"');
      }
      if (item.placeholder.length > 0) {
        input_attributes.push('placeholder="' + item.placeholder + '"');
      }

      if (item.size != "md") {
        input_attributes.push('size="' + item.size + '"');
      }

      if (item.num_rows.length > 0)
      {
        input_attributes.push('rows="'+ item.num_rows + '"');
      }

      if (item.max_rows.length > 0)
      {
        input_attributes.push('max-rows="'+ item.max_rows + '"');
      }

      //Smush all the form group attributes and input attributes into a form group
      retval +=
        this.get_spaces(9) +
        "<b-form-group " +
        form_group_attributes.join(" ") +
        ">" +
        this.line_break();
      retval +=
        this.get_spaces(12) +
        "<b-form-textarea " +
        input_attributes.join(" ") +
        " trim></b-form-textarea>" +
        this.line_break();
      retval += this.get_spaces(9) + "</b-form-group>" + this.line_break();

      //Wrap up the column wrapper
      retval += this.get_spaces(6) + "</b-col>";
      return retval;
    },
    output_datepicker(item) {
      let retval = "";
      //Making the column wrapper
      let attributes = [];
      if (item.cols.length > 0) {
        attributes.push('cols="' + item.cols + '"');
      }

      if (item.cols_sm.length > 0) {
        attributes.push('sm="' + item.cols_sm + '"');
      }

      if (item.cols_md.length > 0) {
        attributes.push('md="' + item.cols_md + '"');
      }

      if (item.cols_lg.length > 0) {
        attributes.push('lg="' + item.cols_lg + '"');
      }

      if (item.cols_xl.length > 0) {
        attributes.push('xl="' + item.cols_xl + '"');
      }
      retval +=
        this.get_spaces(6) +
        "<b-col " +
        attributes.join(" ") +
        ">" +
        this.line_break();

      //Collect the Form Group and Input Attributes
      let form_group_attributes = [];
      let input_attributes = [];

      

      if (item.description.length > 0) {
        form_group_attributes.push('description="' + item.description + '"');
      }

      if (item.label_class.length > 0) {
        form_group_attributes.push('label-class="' + item.label_class + '"');
      }

      if (item.label_cols.length > 0) {
        form_group_attributes.push('label-cols="' + item.label_cols + '" ');
      }

      if (item.label_cols_sm.length > 0) {
        form_group_attributes.push(
          'label-cols-sm="' + item.label_cols_sm + '" '
        );
      }

      if (item.label_cols_md.length > 0) {
        form_group_attributes.push(
          'label-cols-md="' + item.label_cols_md + '" '
        );
      }

      if (item.label_cols_lg.length > 0) {
        form_group_attributes.push(
          'label-cols-lg="' + item.label_cols_lg + '" '
        );
      }

      if (item.label_cols_xl.length > 0) {
        form_group_attributes.push(
          'label-cols-xl="' + item.label_cols_xl + '" '
        );
      }

      if (item.label_align.length > 0) {
        form_group_attributes.push('label-align="' + item.label_align + '" ');
      }

      if (item.label_align_sm.length > 0) {
        form_group_attributes.push(
          'label-align-sm="' + item.label_align_sm + '" '
        );
      }

      if (item.label_align_md.length > 0) {
        form_group_attributes.push(
          'label-align-md="' + item.label_align_md + '" '
        );
      }

      if (item.label_align_lg.length > 0) {
        form_group_attributes.push(
          'label-align-lg="' + item.label_align_lg + '" '
        );
      }

      if (item.label_align_xl.length > 0) {
        form_group_attributes.push(
          'label-align-xl="' + item.label_align_xl + '" '
        );
      }

      if (item.valid_feedback.length > 0) {
        form_group_attributes.push(
          'valid-feedback="' + item.valid_feedback + '" '
        );
      }

      if (item.invalid_feedback.length > 0) {
        form_group_attributes.push(
          'invalid-feedback="' + item.invalid_feedback + '" '
        );
      }

      if (item.scaffold_validation) {
        form_group_attributes.push(':state="is_' + item.model + '_valid"');
      }

      if (item.label.length > 0) {
        form_group_attributes.push('label="' + item.label + '"');
      }

      if (item.model.length > 0) {
        form_group_attributes.push('label-for="' + item.model + '"');
        form_group_attributes.push('id="form_group_' + item.model + '"');
        input_attributes.push('id="' + item.model + '"');
        input_attributes.push('v-model="' + item.model + '"');

        input_attributes.push(':start-weekday="'+ item.model+'_settings.start_weekday"');
        input_attributes.push(':min="'+ item.model+'_settings.min_date"');
        input_attributes.push(':max="'+ item.model+'_settings.max_date"');
        input_attributes.push(':value-as-date="'+ item.model+'_settings.value_as_date"');

      }
      if (item.placeholder.length > 0) {
        input_attributes.push('placeholder="' + item.placeholder + '"');
      }

      if (item.size != "md") {
        input_attributes.push('size="' + item.size + '"');
      }

      //Smush all the form group attributes and input attributes into a form group
      retval +=
        this.get_spaces(9) +
        "<b-form-group " +
        form_group_attributes.join(" ") +
        ">" +
        this.line_break();
      retval +=
        this.get_spaces(12) +
        "<b-form-datepicker " +
        input_attributes.join(" ") +
        " trim></b-form-datepicker>" +
        this.line_break();
      retval += this.get_spaces(9) + "</b-form-group>" + this.line_break();

      //Wrap up the column wrapper
      retval += this.get_spaces(6) + "</b-col>";
      return retval;
    },
    output_select(item) {
      let retval = "";
      //Making the column wrapper
      let attributes = [];
      if (item.cols.length > 0) {
        attributes.push('cols="' + item.cols + '"');
      }

      if (item.cols_sm.length > 0) {
        attributes.push('sm="' + item.cols_sm + '"');
      }

      if (item.cols_md.length > 0) {
        attributes.push('md="' + item.cols_md + '"');
      }

      if (item.cols_lg.length > 0) {
        attributes.push('lg="' + item.cols_lg + '"');
      }

      if (item.cols_xl.length > 0) {
        attributes.push('xl="' + item.cols_xl + '"');
      }
      retval +=
        this.get_spaces(6) +
        "<b-col " +
        attributes.join(" ") +
        ">" +
        this.line_break();

      //Collect the Form Group and Input Attributes
      let form_group_attributes = [];
      let input_attributes = [];
      if (item.description.length > 0) {
        form_group_attributes.push('description="' + item.description + '"');
      }

      if (item.label_class.length > 0) {
        form_group_attributes.push('label-class="' + item.label_class + '"');
      }

      if (item.label_cols.length > 0) {
        form_group_attributes.push('label-cols="' + item.label_cols + '" ');
      }

      if (item.label_cols_sm.length > 0) {
        form_group_attributes.push(
          'label-cols-sm="' + item.label_cols_sm + '" '
        );
      }

      if (item.label_cols_md.length > 0) {
        form_group_attributes.push(
          'label-cols-md="' + item.label_cols_md + '" '
        );
      }

      if (item.label_cols_lg.length > 0) {
        form_group_attributes.push(
          'label-cols-lg="' + item.label_cols_lg + '" '
        );
      }

      if (item.label_cols_xl.length > 0) {
        form_group_attributes.push(
          'label-cols-xl="' + item.label_cols_xl + '" '
        );
      }

      if (item.label_align.length > 0) {
        form_group_attributes.push('label-align="' + item.label_align + '" ');
      }

      if (item.label_align_sm.length > 0) {
        form_group_attributes.push(
          'label-align-sm="' + item.label_align_sm + '" '
        );
      }

      if (item.label_align_md.length > 0) {
        form_group_attributes.push(
          'label-align-md="' + item.label_align_md + '" '
        );
      }

      if (item.label_align_lg.length > 0) {
        form_group_attributes.push(
          'label-align-lg="' + item.label_align_lg + '" '
        );
      }

      if (item.label_align_xl.length > 0) {
        form_group_attributes.push(
          'label-align-xl="' + item.label_align_xl + '" '
        );
      }

      if (item.valid_feedback.length > 0) {
        form_group_attributes.push(
          'valid-feedback="' + item.valid_feedback + '" '
        );
      }

      if (item.invalid_feedback.length > 0) {
        form_group_attributes.push(
          'invalid-feedback="' + item.invalid_feedback + '" '
        );
      }

      if (item.scaffold_validation) {
        form_group_attributes.push(':state="is_' + item.model + '_valid"');
      }

      if (item.label.length > 0) {
        form_group_attributes.push('label="' + item.label + '"');
      }

      if (item.model.length > 0) {
        form_group_attributes.push('label-for="' + item.model + '"');
        form_group_attributes.push('id="form_group_' + item.model + '"');
        input_attributes.push('id="' + item.model + '"');
        input_attributes.push('v-model="' + item.model + '"');
        input_attributes.push(':options="' + item.model + '_options"');
      }

      if (item.size != "md") {
        input_attributes.push('size="' + item.size + '"');
      }

      //Smush all the form group attributes and input attributes into a form group
      retval +=
        this.get_spaces(9) +
        "<b-form-group " +
        form_group_attributes.join(" ") +
        ">" +
        this.line_break();
      retval +=
        this.get_spaces(12) +
        "<b-form-select " +
        input_attributes.join(" ") +
        "></b-form-select>" +
        this.line_break();
      retval += this.get_spaces(9) + "</b-form-group>" + this.line_break();

      //Wrap up the column wrapper
      retval += this.get_spaces(6) + "</b-col>";
      return retval;
    },
    line_break() {
      return "\n";
    },
    get_spaces(num_spaces) {
      let retval = "";
      for (let i = 0; i <= num_spaces; i++) {
        retval += " ";
      }
      return retval;
    },
    start_row() {
      return this.get_spaces(3) + "<b-row>" + this.line_break();
    },
    end_row() {
      return this.get_spaces(3) + "</b-row>" + this.line_break();
    }
  }
};
</script>