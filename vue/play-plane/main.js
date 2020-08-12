import App from "./src/App.js";
import { createApp } from "./src/runtime-canvas";
import { game } from "./src/Game";

createApp(App).mount(game.stage);
