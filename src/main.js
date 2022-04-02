import { store } from "@/store/auth";

import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

axios.defaults.baseURL = "https://v3.tissini.app/api/v3/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded; charset=UTF-8";

import router from "./routes/router";

import { configure } from "vee-validate";

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
});

import "bootstrap/dist/css/bootstrap.css";

store.subscribe((mutation) => {
  switch (mutation.type) {
    case "customer":
      if (mutation.payload) {
        axios.defaults.headers.common["Authorization"] = `${mutation.payload}`;
        localStorage.setItem("customer", JSON.stringify(mutation.payload));
      } else {
        axios.defaults.headers.common["Authorization"] = null;
        localStorage.removeItem("customer");
      }
      break;
    case "categories":
      if (mutation.payload) {
        localStorage.setItem("categories", JSON.stringify(mutation.payload));
      } else {
        localStorage.removeItem("categories");
      }
      break;
  }
});

let data_access = {
  customer: JSON.parse(localStorage.getItem("customer")),
  categories: JSON.parse(localStorage.getItem("categories")),
};

store.dispatch("attempt", data_access).then(() => {
  createApp(App).use(router).use(store).use(VueSweetalert2).mount("#app");
});
