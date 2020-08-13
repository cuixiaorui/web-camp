// 游戏页面
import {
  h,
  defineComponent,
  reactive,
  onMounted,
  onUnmounted,
} from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import { game } from "../Game";
import { hitTestObject } from "../utils";
export default defineComponent({
  setup(props, { emit }) {
    // 入口
    // 响应式数据
    // ref 值类型 string number
    const { planeInfo } = useCreatePlane();
    // 敌军飞机数据
    const { enemyPlanes, moveEnemyPlanes } = useCreateEnemyPlanes();

    const handleTicker = () => {
      // 敌军飞机移动
      moveEnemyPlanes();

      // 检测碰撞
      enemyPlanes.forEach((enemyPlaneInfo) => {
        if (hitTestObject(enemyPlaneInfo, planeInfo)) {
          console.log("hit");
          // game over
          emit("changePage", "EndPage");
        }
      });
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
    // vue2

    return {
      enemyPlanes,
      planeInfo,
    };
  },
  render(ctx) {
    // 创建敌军
    const createEnemyPlanes = () => {
      return ctx.enemyPlanes.map((info) => {
        return h(EnemyPlane, { x: info.x, y: info.y });
      });
    };

    return h("Container", [
      h(Map),
      h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y }),
      ...createEnemyPlanes(),
    ]);
  },
});

function useCreateEnemyPlanes() {
  const enemyPlanes = reactive([
    {
      x: 0,
      y: 50,
      width: 308,
      height: 207,
    },
  ]);

  //飞机移动
  // 写好代码
  // 表达它的意图
  // 1. 表达它的意图
  // 2. 写测试
  const moveEnemyPlanes = () => {
    enemyPlanes.forEach((enemyPlaneInfo) => {
      enemyPlaneInfo.y += 5;
    });
  };
  return {
    enemyPlanes,
    moveEnemyPlanes,
  };
}

function useCreatePlane() {
  const planeInfo = reactive({ x: 150, y: 450, width: 258, height: 364 });

  // 通过键盘去控制飞机的移动
  const speed = 10;
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        planeInfo.y -= speed;
        break;
      case "ArrowDown":
        planeInfo.y += speed;
        break;
      case "ArrowLeft":
        planeInfo.x -= speed;
        break;
      case "ArrowRight":
        planeInfo.x += speed;
        break;
    }
  });

  return {
    planeInfo,
  };
}
