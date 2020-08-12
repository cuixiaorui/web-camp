// vue3
import { defineComponent, h } from "@vue/runtime-core";
import Circle from "./components/Circle";

// template -> render
export default defineComponent({
  render() {
    // <div></div>
    // <div x="100" y="100">开课吧nb<circle></circle></div>
    // <circle>
    const vnode = h("rect", { x: 100, y: 100 }, [
      "开课吧nb",
      // h("circle", { x: 200, y: 200 }),
      h(Circle),
    ]);
    console.log(vnode);
    return vnode;
  },
});
