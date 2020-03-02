<template>
  <div>
    <b-card class="mb-1">
      <b-btn class="float-right mx-1" variant="outline-danger" size="sm" @click="remove()">
        <font-awesome-icon icon="trash" />
      </b-btn>
      <b-btn class="float-right mx-1" variant="outline-secondary" size="sm" @click="duplicate()">
        <font-awesome-icon icon="copy" />
      </b-btn>
      <strong v-handle class="handle mr-2">
        <font-awesome-icon icon="bars" />
      </strong>
      <strong
        class="curses"
        @click="item.show_editor = !item.show_editor"
        v-text="title_string"
      ></strong>
      <div v-if="item.show_editor">
        <hr />
        <b-row>
          <b-col>
            <b-form-group label="Type">
              <b-form-select @change="save()" v-model="item.type" :options="types"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Label">
              <b-form-input v-model="item.label" @change="save()" @input="update_model()" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="V-Model">
              <b-form-input
                v-model="item.model"
                @change="save()"
                @input="item.custom_model = true"
                trim
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Size">
              <b-form-select v-model="item.size" @change="save()" :options="sizes"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" v-show="show_form_group_fields">
            <b-form-group label="Description">
              <b-form-input v-model="item.description" @change="save()" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group v-show="show_form_group_fields" label="Placeholder">
              <b-form-input v-model="item.placeholder" @change="save()" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col v-show="item.type == 'checkbox'">
            <b-form-checkbox v-model="item.is_switch" @input="save()" switch>Is Switch</b-form-checkbox>
          </b-col>
          <b-col cols="6" v-show="show_form_group_fields">
            <b-form-group label="Label Class">
              <b-form-input v-model="item.label_class" @change="save()" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="4" v-show="show_form_group_fields">
            <b-form-group label="Valid Feedback">
              <b-form-input v-model="item.valid_feedback" @change="save()" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="4" v-show="show_form_group_fields">
            <b-form-group label="Invalid Feedback">
              <b-form-input v-model="item.invalid_feedback" @change="save()" trim></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="4" v-show="show_form_group_fields">
            <b-form-group label="Scaffold Validation">
              <b-form-checkbox
                v-model="item.scaffold_validation"
                switch
                @input="save()"
                size="lg"
              ></b-form-checkbox>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="show_num_rows">
          <b-col>
            <b-form-group size="sm" label-cols="6" label="num rows">
              <b-form-input v-model="item.num_rows" size="sm" @change="save()" type="number"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="max rows">
              <b-form-input v-model="item.max_rows" size="sm" @change="save()" type="number"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="show_min_max">
          <b-col>
            <b-form-group size="sm" label-cols="6" label="Min">
              <b-form-input v-model="item.min" size="sm" @change="save()" type="number"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="Max">
              <b-form-input v-model="item.max" size="sm" @change="save()" type="number"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="Step">
              <b-form-input v-model="item.step" size="sm" @change="save()" type="number"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <strong>column size</strong>
        <b-row>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="-">
              <b-form-input
                v-model="item.cols"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="SM">
              <b-form-input
                v-model="item.cols_sm"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="MD">
              <b-form-input
                v-model="item.cols_md"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="LG">
              <b-form-input
                v-model="item.cols_lg"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group size="sm" label-cols="6" label="XL">
              <b-form-input
                v-model="item.cols_xl"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <strong v-show="show_form_group_fields">label alignment</strong>
        <b-row v-show="show_form_group_fields">
          <b-col>
            <b-form-group label="-" size="sm" label-cols="6">
              <b-form-select
                v-model="item.label_align"
                size="sm"
                @change="save()"
                :options="alignments"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="SM" size="sm" label-cols="6">
              <b-form-select
                v-model="item.label_align_sm"
                size="sm"
                @change="save()"
                :options="alignments"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="MD" size="sm" label-cols="6">
              <b-form-select
                v-model="item.label_align_md"
                size="sm"
                @change="save()"
                :options="alignments"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="LG" size="sm" label-cols="6">
              <b-form-select
                v-model="item.label_align_lg"
                size="sm"
                @change="save()"
                :options="alignments"
              ></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="XL" size="sm" label-cols="6">
              <b-form-select
                v-model="item.label_align_xl"
                size="sm"
                @change="save()"
                :options="alignments"
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <strong v-show="show_form_group_fields">label size</strong>
        <b-row v-show="show_form_group_fields">
          <b-col>
            <b-form-group label="-" label-cols="6" size="sm">
              <b-form-input
                v-model="item.label_cols"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="SM" label-cols="6" size="sm">
              <b-form-input
                v-model="item.label_cols_sm"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="MD" label-cols="6" size="sm">
              <b-form-input
                v-model="item.label_cols_md"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="LG" label-cols="6" size="sm">
              <b-form-input
                v-model="item.label_cols_lg"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="XL" label-cols="6" size="sm">
              <b-form-input
                v-model="item.label_cols_xl"
                size="sm"
                @change="save()"
                min="0"
                max="12"
                type="number"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <strong v-if="item.type == 'select'">select options</strong>
        <b-row v-if="item.type == 'select'">
          <b-col>
            <table class="table table-small">
              <thead>
                <tr>
                  <th>value</th>
                  <th>text</th>
                  <th>add/delete</th>
                </tr>
                <tr>
                  <td>
                    <b-form-input v-model="new_select_option_value"></b-form-input>
                  </td>
                  <td>
                    <b-form-input v-model="new_select_option_text"></b-form-input>
                  </td>
                  <td>
                    <b-btn @click="add_select_option" size="sm" variant="outline-success">
                      <font-awesome-icon icon="plus" />
                    </b-btn>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(option, option_index) in item.select_options" :key="option_index">
                  <td>{{ option.value }}</td>
                  <td>{{ option.text }}</td>
                  <td>
                    <b-btn
                      variant="outline-danger"
                      size="sm"
                      @click="delete_select_option(option_index)"
                    >
                      <font-awesome-icon icon="trash" />
                    </b-btn>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>
<script>
import { HandleDirective, ElementMixin } from "vue-slicksort";
export default {
  data: function() {
    return {
      new_select_option_value: "",
      new_select_option_text: "",
      sizes: ["sm", "md", "lg"],
      alignments: ["", "left", "center", "right"],
      types: [
        { value: null, text: "Select Field Type" },
        { value: "input-text", text: "Input - Text" },
        { value: "input-number", text: "Input - Number" },
        { value: "input-email", text: "Input - Email" },
        { value: "input-password", text: "Input - Password" },
        { value: "input-search", text: "Input - Search" },
        { value: "select", text: "Select Dropdown" },
        { value: "checkbox", text: "Checkbox/Switch" },
        { value: "textarea", text: "Text Area" },
      ],
      item: {
        id: "",
        show_editor: false,
        label: "",
        label_class: "",
        scaffold_validation: false,
        valid_feedback: "",
        invalid_feedback: "",
        custom_model: false,
        model: "",
        is_switch: false,
        type: null,
        description: "",
        placeholder: "",
        min: "",
        max: "",
        num_rows:"",
        max_rows:"",
        size: "md",
        step: "",
        cols: "",
        cols_sm: "",
        cols_md: "",
        cols_lg: "",
        cols_xl: "",
        label_cols: "",
        label_cols_sm: "",
        label_cols_md: "",
        label_cols_lg: "",
        label_cols_xl: "",
        label_align: "",
        label_align_sm: "",
        label_align_md: "",
        label_align_lg: "",
        label_align_xl: "",
        select_options: []
      }
    };
  },
  mixins: [ElementMixin],
  directives: { handle: HandleDirective },
  props: {
    pre_loaded_item: {
      type: Object,
      required: true
    },
    model_prefix: {
      type: String,
      required: true
    },
    row_index: {
      type:Number,
      required:true
    },
    index: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.item = JSON.parse(JSON.stringify(this.pre_loaded_item));
    if (this.item.type == null) {
      this.item.show_editor = true;
    }
  },
  computed: {
    title_string() {
      if (this.item.type == null) {
        return "PLEASE SELECT";
      } else {
        var attributes = [];
        attributes.splice(0, attributes.length);
        if (this.item.label.length) {
          attributes.push("Label: " + this.item.label);
        }

        if (this.item.model.length) {
          attributes.push("Model: " + this.item.model);
        }

        if (this.item.cols.length) {
          attributes.push("COLS:" + this.item.cols);
        }

        if (this.item.cols_sm.length) {
          attributes.push("SM:" + this.item.cols_sm);
        }

        if (this.item.cols_md.length) {
          attributes.push("MD:" + this.item.cols_md);
        }

        if (this.item.cols_lg.length) {
          attributes.push("LG:" + this.item.cols_lg);
        }
        if (this.item.cols_xl.length) {
          attributes.push("XL:" + this.item.cols_xl);
        }
        let retVal = this.item.type;
        if (attributes.length > 0) {
          retVal += " (";
          retVal += attributes.join(", ");
          retVal += " )";
        }
        return retVal;
      }
    },
    show_form_group_fields() {
      return this.item.type != "checkbox";
    },
    show_min_max() {
      return this.item.type == "input-number";
    },
    show_num_rows() {
      return this.item.type == "textarea";
    }
  },
  methods: {
    add_select_option() {
      this.item.select_options.push({
        value: this.new_select_option_value,
        text: this.new_select_option_text
      });
      this.new_select_option_text = "";
      this.new_select_option_value = "";
      this.save();
    },
    delete_select_option(index) {
      this.item.select_options.splice(index, 1);
      this.save();
    },
    collapse() {
      this.item.show_editor = false;
    },
    update_model() {
      if (!this.item.custom_model) {
        this.item.model =
          this.model_prefix +
          this.item.label
            .replace(/\W+/g, " ")
            .split(/ |\B(?=[A-Z])/)
            .map(word => word.toLowerCase())
            .join("_");
      }
    },
    remove() {
      this.$emit("item_removed", this.row_index, this.index);
    },
    save() {
      this.$emit("item_updated", this.row_index, this.index, this.item);
    },
    duplicate() {
      this.$emit("duplicate_item", this.row_index, this.item);
    },
    reset_modal() {
      this.item.label = "";
      this.item.model = "";
      this.item.type = null;
    }
  }
};
</script>
