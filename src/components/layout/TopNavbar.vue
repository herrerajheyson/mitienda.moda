<template>
  <nav class="navbar navbar-expand-lg elevation-1">
    <div class="container-fluid top-navbar v-toolbar__title">
      <div class="row">
        <div class="col-10 primary--text pt-2">Ferchitos Store Tissini App</div>
        <div class="col-1 d-flex justify-content-end">
          <a href="tel:786-547-0213">
            <i class="fa fa-phone text-center" aria-hidden="true"> </i>
          </a>
        </div>
        <div class="col-1 d-flex justify-content-center pr-0">
          <i
            class="fa fa-sign-out text-center"
            @click="openModal"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    openModal() {
      this.$emit("openModal")
    }
  }
};
</script>
<style>
.main-panel .navbar {
  margin-bottom: 0;
}

.top-navbar {
  display: block !important;
}

.primary--text {
  color: #f06292 !important;
  caret-color: #f06292 !important;
  font-family: Montserrat, sans-serif;
}

i.fa {
  font-size: 24px;
  color: #f06292 !important;
  cursor: pointer;
  width: 36px;
  height: 36px;
  padding-top: 5px;
  padding-left: 1px;
}

i.fa.fa-phone:hover, i.fa.fa-sign-out:hover {
  background: #f6d8d8;
  justify-content: center;
  min-width: 0;
  box-shadow: none !important;
  border-radius: 50%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-shadow: none !important;
}

.v-toolbar__title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.navbar {
  border: 0;
  font-size: 16px;
  border-radius: 0;
  min-height: 50px;
  max-height: 61px;
  background-color: whitesmoke;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.elevation-1 {
  -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
}
</style>
