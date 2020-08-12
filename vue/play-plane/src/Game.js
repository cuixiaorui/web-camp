import { Application } from "pixi.js";
// App.vue
// 1. 创建根组件
// 2. 创建根容器
// createApp(rootComponent).mount(rootContainer)
// 初始化game
export const game = new Application({
    width: 750,
    height: 1080,
});

document.body.append(game.view);
