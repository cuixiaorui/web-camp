import { Graphics, Text } from "pixi.js";
import { createRenderer } from "@vue/runtime-core";
const renderer = createRenderer({
  createElement(type) {
    console.log(type);

    // 基于type 创建 基于 canvas 的元素
    let element;

    if (type === "rect") {
      // 创建矩形
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 500, 500);
      element.endFill();
    } else if (type === "circle") {
      // 创建矩形
      element = new Graphics();
      element.beginFill(0xffff00);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }

    return element;
  },
  patchProp(el, key, prevValue, nextValue) {
    // pixi
    if (key === "x") {
      el.x = nextValue;
    }
    if (key === "y") {
      el.y = nextValue;
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
    console.log(el, parent);
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
