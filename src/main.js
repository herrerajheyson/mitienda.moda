import {store} from "@/store/auth"
import { createApp } from "vue";
import App from "./App.vue";

import router from "./routes/router";

import { configure } from "vee-validate";

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).use(store).mount('#app')
