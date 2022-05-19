import { createApp } from "vue";
import App from "./App.vue";
import { nanoid } from "nanoid";

createApp(App).use(nanoid).mount("#app");
