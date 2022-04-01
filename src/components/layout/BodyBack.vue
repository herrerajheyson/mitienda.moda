<template>
  <div :class="`container-fluid text-center d-flex align-items-center justify-content-center ` + (!backgroundClass ? `` : backgroundClass)">
    <slot name="custom"></slot>
  </div>
</template>
<script>
export default {
  name: "BodyBack",
  props: {
    backgroundClass: {
      type: String,
      default: "",
      validator: (value) => {
        let acceptedValues = ["", "portada-1", "portada-2"];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style scoped>
.container-fluid {
  background-size: cover !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat !important;
}

.portada-1 {
  background: url("/public/static/img/portada1.png")
}

.portada-2 {
  background: url("/public/static/img/portada2.png");
}
</style>
