<template>
  <div class="root-box">
    <strong>Parent Component</strong>
    <p>Childdan gelen data : {{ childData }}</p>
    <example-child @sendingData="childData = $event"></example-child>
  </div>
</template>

<script>
import ExampleChild from "../components/ExampleChild";
export default {
  components: {
    ExampleChild,
  },
  data() {
    return {
      childData: "",
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