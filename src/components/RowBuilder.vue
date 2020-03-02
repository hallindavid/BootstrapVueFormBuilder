<template>
  <div class="my-1 rowbuilder">
    <b-row class="mb-1">
      <b-col class="pt-2">
        <strong v-text="'row '+row_index"></strong>
      </b-col>
      <b-col cols="12" sm="4">
        <b-form-group
          label-cols="6"
          label="custom row class"
          label-for="custom_row_class"
          id="form_group_custom_row_class"
        >
          <b-form-input id="custom_row_class" v-model="value.custom_class" size="sm" trim></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-btn
          @click="show_row = !show_row"
          size="sm"
          variant="outline-secondary"
          class="float-right"
        >
          <font-awesome-icon class="fa-fw" :icon="current_caret" />Hide/Show Row
        </b-btn>
        <b-btn @click="delete_row" size="sm" variant="outline-danger" class="float-right mr-1">
          <font-awesome-icon class="fa-fw" icon="trash" />Delete Row
        </b-btn>
      </b-col>
    </b-row>
    <b-row v-show="show_row">
      <b-col>
        <slot />
        <b-button size="sm" variant="outline-secondary" @click="add_item()">
          <font-awesome-icon icon="plus" />Field
        </b-button>
      </b-col>
    </b-row>
    <hr />
  </div>
</template>
<script>
import { ContainerMixin } from "vue-slicksort";

export default {
  data: function() {
    return {
      show_row: true
    };
  },
  props: {
    row_index: {
      type: Number,
      required: true
    },
    value: {
      type: Array,
      required: true
    }
  },
  mixins: [ContainerMixin],
  methods: {
    add_item() {
      this.$emit("add_item", this.row_index);
    },
    delete_row() {
      this.$emit("delete_row", this.row_index);
    }
  },
  computed: {
    current_caret() {
      if (this.show_row) {
        return "caret-down";
      } else {
        return "caret-left";
      }
    }
  }
};
</script>