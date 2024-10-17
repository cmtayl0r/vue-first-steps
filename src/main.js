import { createApp } from "vue"; // Importing createApp function from vue
import router from "./router"; // Importing the router
import App from "./App.vue"; // Ensure App component is correctly imported
import "./style.css"; // Importing the global css file

// Plugins
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App); // Creating the app
app.use(router); // Using the router
app.use(Toast); // Using the Toast plugin
app.mount("#app"); // Mounting the App component to the div with id app
