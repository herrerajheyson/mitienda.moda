<template>
  <div class="row">
    <div class="p-0 col-12 col-sm-5 mx-auto">
      <form>
        <div>
          <label for="email" class="font-label-form">Email</label>
          <input
            type="email"
            class="form-control form-input-error"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="invalid-form-input mt-1">
            Email Inválido
          </div>
        </div>
        <div>
          <label for="pass" class="font-label-form">Contraseña</label>
          <div class="input-group mb-1">
            <input
              :type="showPass.inputTypePass"
              class="form-control"
              id="pass"
            />
            <span class="input-group-text" @click="showPassword()">
              <i :class="`white ` + showPass.iconBtnPass"></i>
            </span>
          </div>
        </div>
        <div class="forgot-pass">
          <a href="">¿Olvido la contraseña?</a>
        </div>
        <button type="submit" class="btn mt-3 submit-login">Acceder</button>
      </form>
      <div class="row mt-3">
        <div class="col-3"><p class="border border-white mt-3 mb-2"></p></div>
        <div class="col-6 white p-0 fs-13 text-center">Regístrate también con</div>
        <div class="col-3"><p class="border border-white mt-3 mb-2"></p></div>
      </div>
      <SocialItem class="social-items"/>
      <div class="row mt-3">
        <div class="col-12 d-flex justify-content-center white">
          <p class="fs-15">
            Quieres registrarte?
            <span class="font-color-primary">Registrate</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SocialItem from "/src/components/layout/Socials";

export default {
  name: "FormLogin",
  components: {
    [SocialItem.name]: SocialItem,
  },
  data() {
    return {
      showPass: {
        inputTypePass: "password",
        iconBtnPass: "fa fa-eye",
      },
    };
  },
  methods: {
    showPassword() {
      if (this.showPass.inputTypePass === "password") {
        this.showPass.iconBtnPass = "fa fa-eye-slash";
        this.showPass.inputTypePass = "text";
      } else {
        this.showPass.iconBtnPass = "fa fa-eye";
        this.showPass.inputTypePass = "password";
      }
    },
  },
};
</script>
<style scoped>
input.form-control {
  height: 50px;
  background: rgba(255, 255, 255, 0.47) !important;
  box-sizing: border-box !important;
}

input.form-control:nth-child(2) {
  width: 100% !important;
  border-radius: 10px !important;
}

input.form-control:first-child {
  width: 80% !important;
  height: 50px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right-color: rgb(120 120 120) !important;
}

.input-group-text {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.input-group > span {
  background: rgba(255, 255, 255, 0.47) !important;
  border-left-color: rgb(120 120 120) !important;
}

.forgot-pass {
  text-align: end;
}

.forgot-pass > a {
  color: #e487fb !important;
  text-decoration: none;
}

button {
  width: 100%;
  height: 50px;
  background: #e487fb;
  border-radius: 10px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  color: #3e1149;
}

@media (min-width: 375px) {
  .submit-login {
    margin-bottom: 25px !important;
  }

  .social-items {
    margin-bottom: 35px !important;
  }
}

@media (min-width: 576px) {
  .submit-login {
    margin-bottom: initial !important;
  }

  .social-items {
    margin-bottom: initial !important;
  }
}
</style>
