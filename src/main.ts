import { createApp } from "vue";
import "virtual:windi.css";
import "./main.scss";
import { FontAwesomeIcon } from "./plugins/FontAwesome";
import App from "./App.vue";
import { store } from "./store";
import ClickOutside from "./plugins/ClickOutside";

const app = createApp(App);
app.use(store);
ClickOutside(app);
app.component("FaIcon", FontAwesomeIcon);

app.mount("#app");
