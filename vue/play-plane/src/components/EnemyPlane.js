// 敌方飞机逻辑
import { ref, h, defineComponent } from "@vue/runtime-core";
import enemyPlaneImg from "../../assets/enemy.png";
export default defineComponent({
  setup() {},

  render(ctx) {
    return h("Container", [h("Sprite", { texture: enemyPlaneImg })]);
  },
});
