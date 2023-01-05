import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// const app = createApp({});

// app.use(router).mount("#app");
// app.component('');

createApp(App).use(router).mount("#app");
