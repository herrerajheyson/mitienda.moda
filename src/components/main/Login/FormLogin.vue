<template>
  <div class="row">
    <div class="col-12 mx-auto">
      <img src="/static/img/logo.png" class="mt-5 logo" alt="" />
      <h3 class="mt-3 white">
        Ingresa el número de teléfono <br />de tu asesora independiente.
      </h3>
    </div>
    <div class="col-12 col-sm-12 col-md-5 mx-auto">
      <Form class="text-center" @submit="handleLogin">
        <Field
          v-model="model.mobilephone"
          placeholder="Teléfono"
          type="number"
          class="form-control mt-4"
          id="identification"
          :rules="rulePhone"
          @keypress="handleLogin"
          @paste="onPaste"
          @change="handleLogin"
          @focus="handleLogin"
          name="mobilephone"
        />
        <ErrorMessage name="mobilephone"></ErrorMessage>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      model: {
        mobilephone: null,
      },
    };
  },
  name: "FormLogin",
  methods: {
    handleLogin() {
      if (
        this.model.mobilephone &&
        this.model.mobilephone.toString().length == 10
      ) {
        this.signin();
      }
    },

    onPaste (evt) {
      console.log(evt.clipboardData.getData('text'));
      setTimeout(() => {
        this.handleLogin()
      }, 10);
    },

    signin() {
      this.$store
        .dispatch("login", this.model)
        .then(() => {
          this.$router.push("/").catch((error) => {
            console.log(error);
          })
        })
        .catch((error) => {
          console.log(error);
          this.$swal({
            type: "error",
            html: "Ha ocurrido un error al loguearse.",
            confirmButtonClass: "btn btn-danger btn-fill",
            buttonsStyling: false,
          });
        });
    },

    rulePhone(value) {
      if (!value) {
        return "El campo número de teléfono";
      }

      if (value.toString().length > 10) {
        return "El campo número de teléfono no puede tener más de 10 dígitos";
      }
      return true;
    },
  },
};
</script>
<style scoped>
.logo {
  width: 60%;
}

span[role="alert"] {
  color: white;
}

input,
.form-control:focus {
  padding: 0.475rem 0.75rem !important;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-size: 22px;
}

input::placeholder {
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
