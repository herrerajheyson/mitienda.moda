<template>
  <div>
    <div class="main-panel">
      <top-navbar @openModal="openModal"></top-navbar>
      <dashboard-content></dashboard-content>
    </div>
  </div>
  <LogoutDialog ref="logout"/>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./DashboardContent.vue";
import LogoutDialog from "/src/components/main/Logout/LogoutDialog"

export default {
  components: {
    TopNavbar,
    [LogoutDialog.name]: LogoutDialog,
    [DashboardContent.name]: DashboardContent,
  },
  methods: {
    openModal() {
      this.$refs.logout.logout = true
    }
  }
};
</script>
