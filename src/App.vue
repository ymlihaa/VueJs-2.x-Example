<template>
  <div><Server /></div>
</template>


<script>
// import ExampleZone from "./views/ExampleZone.vue";
import EventBusRoot from "./views/EventBusRoot";
import Server from "./example_server_app/Servers";
export default {
  components: {
    Server,
  },
};
</script>

<style>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
