<template>
  <div>
    <b-btn @click="show_editor = !show_editor" size="sm" class="mr-1" variant="outline-secondary"
      >Toggle Editor</b-btn
    >
    <b-btn @click="collapse_all" size="sm" class="mx-1" variant="outline-primary">Collapse All</b-btn>
    <b-btn @click="show_defaults = !show_defaults" size="sm" class="mx-1" variant="outline-info">Config/Defaults</b-btn>
    <b-row class="mt-1">
      <b-col cols="6" v-show="show_editor">
        <b-card v-if="show_defaults" title="config / defaults">
          <b-row>
            <b-col>
          <b-form-group
            size="sm"
              label-cols="3"
              description="eg: first_name -> part_1_first_name"
              label="model prefix">
              <b-form-input size="sm" type="text" v-model="model_prefix"></b-form-input>
            </b-form-group>
            </b-col>
            <b-col>
            <b-form-group
              size="sm">
                <b-form-checkbox id="scaffold_by_default" :value="true" v-model="item_template.scaffold_validation" switch>Scaffold by default</b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-row>
          <span>column size</span>
          <b-row>
            <b-col>
              <b-form-group size="sm" label-cols="6" label="-">
                <b-form-input
                  v-model="item_template.cols"
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
                  v-model="item_template.cols_sm"
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
                  v-model="item_template.cols_md"
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
                  v-model="item_template.cols_lg"
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
                  v-model="item_template.cols_xl"
                  size="sm"
                  @change="save()"
                  min="0"
                  max="12"
                  type="number"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <span>label alignment</span>
          <b-row>
            <b-col>
              <b-form-group label="-" size="sm" label-cols="6">
                <b-form-select
                  v-model="item_template.label_align"
                  size="sm"
                  @change="save()"
                  :options="alignments"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="SM" size="sm" label-cols="6">
                <b-form-select
                  v-model="item_template.label_align_sm"
                  size="sm"
                  @change="save()"
                  :options="alignments"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="MD" size="sm" label-cols="6">
                <b-form-select
                  v-model="item_template.label_align_md"
                  size="sm"
                  @change="save()"
                  :options="alignments"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="LG" size="sm" label-cols="6">
                <b-form-select
                  v-model="item_template.label_align_lg"
                  size="sm"
                  @change="save()"
                  :options="alignments"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="XL" size="sm" label-cols="6">
                <b-form-select
                  v-model="item_template.label_align_xl"
                  size="sm"
                  @change="save()"
                  :options="alignments"
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <span>label size</span>
          <b-row>
            <b-col>
              <b-form-group label="-" label-cols="6" size="sm">
                <b-form-input
                  v-model="item_template.label_cols"
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
                  v-model="item_template.label_cols_sm"
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
                  v-model="item_template.label_cols_md"
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
                  v-model="item_template.label_cols_lg"
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
                  v-model="item_template.label_cols_xl"
                  size="sm"
                  @change="save()"
                  min="0"
                  max="12"
                  type="number"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

        </b-card>        

        <rowbuilder
          v-for="(row, row_index) in rows"
          @add_item="add_item_to_row"
          @delete_row="delete_row"
          @input="update_order($event, row_index)"
          :row_index="row_index"
          :key="row_index"
          :value="row"
          appendTo=".rowbuilder"
          :useDragHandle="true">
          <editelement v-for="(item,item_index) in row" 
							@item_updated="item_updated"
							@item_removed="item_removed"
							@duplicate_item="duplicate_item"
							ref="edititem"
							:index="item_index"
              :row_index="row_index"
							:key="item.id" 
							:pre_loaded_item="item" 
							:model_prefix="model_prefix"
							:collection="row_index"></editelement>
        </rowbuilder>

        <b-row class="mt-1">
          <b-col cols="3">
            <b-btn size="sm" block variant="light" @click="minus_row">
              <font-awesome-icon icon="minus"/>
            </b-btn>
          </b-col>
          <b-col cols="3">
            <b-button size="sm" block variant="secondary" @click="add_row">
              <font-awesome-icon icon="plus" /></b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col :cols="show_editor ? 6 : 12">
        <b-nav tabs fill class="border-bottom:0px !important;">
          <b-nav-item
            @click="current_tab = 'code'"
            :active="current_tab == 'code'">Code</b-nav-item>
          <b-nav-item
            @click="current_tab = 'preview'"
            :active="current_tab == 'preview'"
            >Preview <span class="d-inline-block d-sm-none">(xs)</span>
            <span class="d-none d-sm-inline-block d-md-none">(sm)</span>
            <span class="d-none d-md-inline-block d-lg-none">(md)</span>
            <span class="d-none d-lg-inline-block d-xl-none">(lg)</span>
            <span class="d-none d-xl-inline-block">(xl)</span>
          </b-nav-item>
          <b-nav-item
            @click="current_tab = 'import-export'"
            :active="current_tab == 'import-export'">JSON Import/Export</b-nav-item>
        </b-nav>
        <div class="card p-2" style="border-top:0px; border-top-right-radius: 0rem !important; border-top-left-radius: 0rem !important;">
        <code-output v-if="get_current_tab == 'code-output'" :rows.sync="rows"></code-output>
        <preview-output v-if="get_current_tab == 'preview-output'" :rows.sync="rows"></preview-output>
        <import-export-panel v-if="get_current_tab == 'import-export-panel'" @import="import_rows" :rows.sync="rows"></import-export-panel>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      show_editor: true,
      show_defaults: false,
      current_tab: "code",
      model_prefix: "",
      rows: [],
      alignments: ["", "left", "center", "right"],
      item_template: {
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
  mounted() {
    this.add_row();
  },
  computed: {
    get_current_tab() {
      if (this.current_tab == "code") {
        return 'code-output';
      } else if (this.current_tab == 'import-export') {
        return 'import-export-panel';
      }
      return 'preview-output';
      
    }
    
  },
  methods: {
    collapse_all() {
      this.$refs.edititem.forEach(function(item) {
        item.collapse();
      });
    },
    add_row() {
      let new_row = [];
      var d = new Date();
      let new_item = JSON.parse(JSON.stringify(this.item_template));
      new_item.id = d.getTime();
      new_row.push(new_item);

      this.rows.push(new_row);
    },
    minus_row() {
      this.rows.splice(this.rows.length - 1, 1);
    },
    add_item_to_row(row_index) {
      var d = new Date();
      let new_item = JSON.parse(JSON.stringify(this.item_template));
      new_item.id = d.getTime();
      this.rows[row_index].push(new_item);
    },
    delete_row(row_index) {
      if (confirm("Are you sure you want to delete this row?")) {
        this.rows.splice(row_index,1);
      }
    },
    duplicate_item(row_index, item) {
      var d = new Date();
      let new_item = JSON.parse(JSON.stringify(item));
      new_item.id = d.getTime();
      this.rows[row_index].push(new_item);
    },
    item_updated(row_index, item_index, new_item) {
      this.$set(this.rows[row_index], item_index, new_item);
    },
    item_removed(row_index, item_index) {
      this.rows[row_index].splice(item_index,1);
    },
    update_order(payload,row_index) {
      this.$set(this.rows, row_index, payload);
    },
    import_rows(rows) {
      this.rows = rows;

    }
  }
};
</script>
