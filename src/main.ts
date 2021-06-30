import { createApp } from "vue";
import "virtual:windi.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./main.scss";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");

library.add(faCode, faArchive);

app.component("FaIcon", FontAwesomeIcon);
