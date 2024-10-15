import { createApp } from "vue"; // Importing createApp function from vue
import router from "./router"; // Importing the router
import "./style.css"; // Importing the global css file
import App from "./App.vue"; // Ensure App component is correctly imported

const app = createApp(App); // Creating the app
app.use(router); // Using the router
app.mount("#app"); // Mounting the App component to the div with id app
