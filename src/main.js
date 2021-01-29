import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
import "bulma/css/bulma.css";
import authConfig from "../auth_config.json";
import { setupAuth } from "./auth";
import UUID from "vue-uuid";


let app = createApp(App).use(router);
const emitter = mitt();

app.config.globalProperties.emitter = emitter;

function callbackRedirect(appState) {
  router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth, UUID).mount("#app");
});
