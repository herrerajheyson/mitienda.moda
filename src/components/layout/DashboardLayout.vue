<template>
  <div class="wrapper">
    <div class="main-panel">
      <dashboard-content></dashboard-content>
    </div>
  </div>
</template>
<script>
import DashboardContent from "./DashboardContent.vue";

export default {
  components: {
    [DashboardContent.name]: DashboardContent,
  },
};
</script>
