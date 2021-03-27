<template>
  <div class="chid-box-other">
    <strong>Box-2 Child Component </strong>
    <input
      v-model="passingData"
      type="text"
      placeholder="please pass to parent data"
    />
    <button @click="sendToParentToChild">Send to Parent to other Child</button>
    <strong>EventBus ile Box-1 Child'den gelen data </strong>
    <p>{{ from_box_one }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      passingData: "",
      from_box_one: "",
    };
  },
  methods: {
    sendToParentToChild() {
      // this.$emit("sendingDataFromChild", this.passingData);
      eventBus.$emit("sendingDataFromChild", this.passingData);
    },
  },
  created() {
    eventBus.$on("sendingData", (val) => {
      console.log("compTwo on value :", val);
      this.from_box_one = val;
    });
  },
};
</script>

<style scoped>
.chid-box-other {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30vh;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}

input {
  width: 300px;
  height: 48px;
  margin-top: 1rem;
  border-radius: 8px;
  border: 1px solid #cacaca;
  padding-left: 1rem;
  box-shadow: 0 6px 12px #cacaca;
}

button {
  margin-top: 1rem;
  width: 200px;
  border-radius: 8px;
  border: 1px solid #cacaca;
  box-shadow: 0 3px 12px #cacaca;
  background-color: #0065b5;
  color: white;
  padding: 0.6rem;
}
</style>