<template>
  <div class="chid-box">
    <strong>Box-1 Child Component</strong>
    <input
      v-model="passingData"
      type="text"
      placeholder="please pass to parent data"
    />
    <button @click="sendToParent">Send to Parent</button>
    <strong>EventBus ile Box-2 Child'den gelen data </strong>
    <p>{{ incomingData }}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      passingData: "",
      incomingData: "",
    };
  },
  methods: {
    sendToParent() {
      // this.$emit("sendingData", this.passingData);
      eventBus.$emit("sendingData", this.passingData);
    },
  },
  created() {
    eventBus.$on("sendingDataFromChild", (val) => {
      console.log("compOne on value :", val);
      this.incomingData = val;
    });
  },
};
</script>

<style >
.chid-box {
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

strong {
  margin-top: 1rem;
}
</style>