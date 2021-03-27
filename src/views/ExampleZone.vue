<template>
  <div class="root-box">
    <strong>Parent Component</strong>
    <p>Box-1 Childdan gelen data : {{ childData }}</p>
    <p>Box-2 Childdan gelen data : {{ chidDataFromOtherChild }}</p>
    <div>
      <example-child
        :incomingData="chidDataFromOtherChild"
        @sendingData="childData = $event"
      ></example-child>
      <example-child-other
        :from_box_one="childData"
        @sendingDataFromChild="chidDataFromOtherChild = $event"
      ></example-child-other>
    </div>
  </div>
</template>

<script>
import ExampleChild from "../components/ExampleChild";
import ExampleChildOther from "../components/ExampleChild_other";
export default {
  components: {
    ExampleChild,
    ExampleChildOther,
  },
  data() {
    return {
      childData: "",
      chidDataFromOtherChild: "",
    };
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