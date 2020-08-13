// 结束页面
import { h, defineComponent } from "@vue/runtime-core";
import endPageImg from "../../assets/endPage.jpg";
import restartBtn from "../../assets/restartBtn.png";
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
    return h("Container", [
      h("Sprite", { texture: endPageImg }),
      h("Sprite", {
        texture: restartBtn,
        x: 250,
        y: 530,
        interactive: true,
        onClick: ctx.handleClick
      }),
    ]);
  },
});
