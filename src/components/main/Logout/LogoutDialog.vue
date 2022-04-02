<template>
  <div class="modal-dialog modal-dialog-centered" tabindex="-1" v-if="logout">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pink lighten-2">
          <h5 class="modal-title">¿Quieres Salir?</h5>
        </div>
        <div class="modal-body">
          <p class="mb-0">
            Dándole un toque a este botón sales de la Tienda. Si quieres navegar
            en la Tienda utiliza las opciones de la parte inferior:
          </p>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          Carrito 
          <i class="fa fa-home" aria-hidden="true"></i>
          Catalogo 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">
            SALIR DE LA TIENDA
          </button>
          <button type="button" class="btn" @click="closeModal">VOLVER</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogoutDialog",
  data() {
    return {
      logout: false,
    };
  },
  methods: {
    openModal() {
      this.logout = true;
    },

    closeModal() {
      this.logout = false;
    },
  },
};
</script>
<style scoped>
.modal-dialog-centered {
    margin-top: 15%;
}

.pink.lighten-2 {
  background-color: #f06292 !important;
  border-color: #f06292 !important;
  padding-top: 24px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  color: white;
  border-radius: 0% !important;
}

.modal-title {
  font-size: 24px !important;
  line-height: 32px !important;
  font-weight: 400;
  letter-spacing: normal !important;
  font-family: Roboto, sans-serif !important;
}

.modal-content {
  border-radius: 0% !important;
}

.modal-body {
  font-family: Montserrat, sans-serif;
}

.modal-footer {
  padding: 0.3rem;
}

button {
  color: #f06292 !important;
  caret-color: #f06292 !important;
  font-family: Montserrat, sans-serif;
}

button:hover {
  background-color: #fdedf2;
}
</style>
