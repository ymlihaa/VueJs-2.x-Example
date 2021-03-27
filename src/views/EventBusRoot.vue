<template>
  <div class="root-box">
    <strong>Parent Component</strong>
    <p>EventBus ile Box-1 Childdan gelen data : {{ childData }}</p>
    <p>EventBus ile Box-2 Childdan gelen data : {{ chidDataFromOtherChild }}</p>
    <div>
      <compOne></compOne>
      <compTwo></compTwo>
    </div>
  </div>
</template>

<script>
import compOne from "../eventBus_example/compOne";
import compTwo from "../eventBus_example/compTwo";
import { eventBus } from "../main";

export default {
  components: {
    compOne,
    compTwo,
  },
  data() {
    return {
      childData: "",
      chidDataFromOtherChild: "",
    };
  },
  created() {
    eventBus.$on("sendingData", (val) => {
      this.childData = val;
    });
    eventBus.$on("sendingDataFromChild", (val) => {
      this.chidDataFromOtherChild = val;
    });
  },
};
</script>

<style >
.root-box {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: 1rem;
  padding: 5rem;
  height: 50vh;
  border: 1px solid black;
}
</style>
