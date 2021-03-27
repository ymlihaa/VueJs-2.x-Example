<template>
  <div class="chid-box">
    <strong>Child Component</strong>
    <input
      v-model="passingData"
      type="text"
      placeholder="please pass to parent data"
    />
    <button @click="sendToParent">Send to Parent</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passingData: "",
    };
  },
  methods: {
    sendToParent() {
      this.$emit("sendingData", this.passingData);
    },
  },
};
</script>

<style >
.chid-box {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 30vh;
  border: 1px solid black;
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