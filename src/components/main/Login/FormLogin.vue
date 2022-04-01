<template>
  <div class="row">
    <div class="col-12 mx-auto">
      <img src="/static/img/logo.png" class="mt-5 logo" alt="" />
      <h3 class="mt-3 white">
        Ingresa el número de teléfono <br />de tu asesora independiente.
      </h3>
    </div>
    <div class="col-12 col-sm-12 col-md-5 mx-auto">
      <form class="text-center">
        <div>
          <input placeholder="Teléfono" type="number" class="form-control mt-4" id="identification" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormLogin",
};
</script>
<style scoped>
.logo {
  width: 60%;
}

input,
.form-control:focus {
  padding: 0.475rem 0.75rem !important;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-size: 22px;
}

input::placeholder  {
  color: white;
  font-size: 16px;
}

.form-control:hover {
  border: 2px solid black;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

h3 {
  font-size: 1.17em;
}

@media (min-width: 600px) {
  .logo {
    width: 15%;
  }
}

@media (min-width: 475px) {
  .logo {
    margin-top: 30%;
  }
}
</style>
