<template>
<b-row>
  <b-col class="pt-5">
    <b-card>
        <button type="button"
        class="btn btn-primary float-right btn-sm mb-2"
        v-clipboard:copy="output"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"><font-awesome-icon icon="copy" />Copy!</button>
        <strong @click="showExport = !showExport" class="curses">JSON Export</strong>
        <br />
        <p class="my-3 alert alert-success" v-if="copySucceeded === true">
          <span class="float-right curses" @click="copySucceeded = null"><font-awesome-icon icon="times" /></span>
          Copied!</p>
        <p class="my-3 alert alert-danger" v-if="copySucceeded === false">Unable to copy, try doing it manually with Ctrl+C/Cmd+C</p>
        <textarea v-if="showExport" class="form-control mt-2" rows="10" v-model="output"></textarea>
    </b-card>
    <b-card class="my-3">
        <strong @click="showImport = !showImport" class="curses">JSON Import</strong>
        <div v-if="showImport">
          <p class="my-3 alert alert-success" v-if="importSucceeded === true">
            <span class="float-right curses" @click="importSucceeded = null"><font-awesome-icon icon="times" /></span>
            Imported!</p>
          <p class="my-3 alert alert-danger" v-if="importSucceeded === false">Unable to import - possibly incorrect JSON syntax</p>
          <textarea class="form-control my-2" rows="10" v-model="importable_data"></textarea>
          <b-btn @click="import_json" variant="success"><font-awesome-icon icon="play" /> Import</b-btn>
        </div>
    </b-card>
  </b-col>
</b-row>
</template>
<script>
export default {
  data() {
      return {
        importable_data: "",
        copySucceeded:null,
        importSucceeded:null,
        showExport:false,
        showImport:false,
      }
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  computed: {
      output() {
          return JSON.stringify(this.rows);
      }
  },
   methods: {
    onCopy() {
      this.copySucceeded = true;
      setTimeout(function() {
        this.copySucceeded = null;
      },2500);
      this.showExport = true;
    },
    onError() {
      this.copySucceeded = false;
    },
    import_json() {
      if(this.importable_data) {
          try {
              let a = JSON.parse(this.importable_data);
              this.$emit("import", a);
              this.importSucceeded = true;
          } catch(e) {
              this.importSucceeded = false;
          }
      }
    }
  }
};
</script>
