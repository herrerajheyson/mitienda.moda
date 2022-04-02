import { store } from "@/store/auth";

const guest = (to, from, next) => {
  if (!store.getters["authenticated"]) {
    return next({
      name: "Login",
    });
  }
  next();
};

const auth = (to, from, next) => {
  if (store.getters["authenticated"]) {
    return next({
      name: "Home",
    });
  }
  next();
};

export default { guest, auth };
