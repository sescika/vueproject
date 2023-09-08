import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//components
import ModalComponent from "./components/EditModal.vue";
import PopupComponent from "./components/Popup.vue";

//custom directives
import RoleDirective from "./directives/RoleDIrective.js";

//utilities
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App)
  .use(store)
  .use(router)
  .component("Modal", ModalComponent)
  .component("Popup", PopupComponent)
  .directive("role", RoleDirective)
  .mount("#app");
