<template>
  <div>
    <strong>Detail</strong>
    <p>{{ obj }}</p>
    <button
      @click="handleRepair"
      :disabled="obj.status != 'normal' ? false : true"
    >
      Düzelt
    </button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      obj: "",
    };
  },
  methods: {
    handleRepair() {
      this.obj.status = "normal";
      eventBus.$emit("newStatus", this.obj);
    },
  },
  created() {
    eventBus.$on("status", (val) => {
      this.obj = val;
    });
  },
};
</script>

<style scoped>
</style>