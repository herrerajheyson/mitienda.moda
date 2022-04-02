import {store} from "@/store/auth"
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

axios.defaults.baseURL = "https://v3.tissini.app/api/v3/";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

import router from "./routes/router";

import { configure } from "vee-validate";

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
});

import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).use(store).mount('#app')
