<template>
  <div>
    <ServerDetails />
    <ul>
      <li v-for="(server, index) in servers">
        Sunucu = {{ server.id }} | {{ server.status }}
        <button @click="sendToDetail(index)">İncele</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../main";
import ServerDetails from "./ServerDetails";
export default {
  components: {
    ServerDetails,
  },
  data() {
    return {
      servers: [
        { id: 1, status: "normal" },
        { id: 2, status: "Kritik" },
        { id: 3, status: "Sıkıntılı" },
        { id: 4, status: "normal" },
      ],
    };
  },
  methods: {
    sendToDetail(index) {
      eventBus.$emit("status", this.servers[index]);
    },
    created() {
      eventBus.$on("newStatus", (val) => {
        let id = val.id;
        this.servers[id].status = val.status;
      });
    },
  },
};
</script>

<style scoped>
</style>