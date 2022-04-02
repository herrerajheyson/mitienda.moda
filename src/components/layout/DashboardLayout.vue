<template>
  <div class="wrapper">
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content></dashboard-content>
    </div>
  </div>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./DashboardContent.vue";

export default {
  components: {
    TopNavbar,
    [DashboardContent.name]: DashboardContent,
  },
};
</script>
