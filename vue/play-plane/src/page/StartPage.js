// 开始页面
import { h, defineComponent } from "@vue/runtime-core";
import startPageImg from "../../assets/startPage.jpg";
import startBtn from "../../assets/startBtn.png";
export default defineComponent({
  setup(props, ctx) {
    // ctx.emit

    const handleClick = () => {
      ctx.emit("changePage","GamePage")
    };
    return {
      handleClick,
    };
  },
  render(ctx) {
    // vue2 this.$emit
    // <div><img src=""></div>
    return h("Container", [
      h("Sprite", { texture: startPageImg }),
      h("Sprite", {
        texture: startBtn,
        x: 250,
        y: 530,
        interactive: true,
        onClick: ctx.handleClick
      }),
    ]);
  },
});
