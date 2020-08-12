import App from "./src/App.js";
import { createApp } from "./src/runtime-canvas";
import { getRootContainer } from "./src/Game";

createApp(App).mount(getRootContainer());
