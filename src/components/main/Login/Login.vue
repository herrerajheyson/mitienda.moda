<template>
  <div class="full-height">
    <BodyBack backgroundClass="portada-1">
      <template v-slot:custom>
        <FormLogin />
      </template>
    </BodyBack>
  </div>
</template>
<script>
import BodyBack from "/src/components/layout/BodyBack.vue"
import FormLogin from "./FormLogin"

export default {
  name: "LoGin",
  components: {
    [BodyBack.name]: BodyBack,
    [FormLogin.name]: FormLogin
  }
};
</script>
