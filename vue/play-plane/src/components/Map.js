// 地图逻辑
import { ref, h, defineComponent } from "@vue/runtime-core";
import mapImg from "../../assets/map.jpg";
import { game } from "../Game";
export default defineComponent({
  setup() {
    const viewHeight = 1080;
    // 需要改变 y
    const mapY1 = ref(0);
    const mapY2 = ref(-viewHeight);

    const speed = 5;
    game.ticker.add(() => {
      mapY1.value += speed;
      mapY2.value += speed;

      if (mapY1.value >= viewHeight) {
        mapY1.value = -viewHeight;
      }
      if (mapY2.value >= viewHeight) {
        mapY2.value = -viewHeight;
      }
    });

    return {
      mapY1,
      mapY2,
    };
  },

  render(ctx) {
    return h("Container", [
      h("Sprite", { texture: mapImg, y: ctx.mapY1 }),
      h("Sprite", { texture: mapImg, y: ctx.mapY2 }),
    ]);
  },
});
