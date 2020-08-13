import { Texture, Sprite, Text, Container } from "pixi.js";
import { createRenderer } from "@vue/runtime-core";
const renderer = createRenderer({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
    }
    return element;
  },
  patchProp(el, key, prevValue, nextValue) {
    // pixi
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        el.on("pointertap",nextValue)
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  createText(text) {
    return new Text(text);
  },

  setElementText(node, text) {
    // 创建文本
    const cText = new Text(text);
    node.addChild(cText);
  },
  insert(el, parent) {
    // append
    parent.addChild(el);
  },
  // 新加接口实现
  // 处理注释
  createComment() {},
  // 获取父节点
  parentNode() {},
  // 获取兄弟节点
  nextSibling() {},
  // 删除节点时调用
  remove(el) {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el);
    }
  },
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
