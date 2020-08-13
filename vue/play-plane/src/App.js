// vue3
import { ref,computed, defineComponent, h } from "@vue/runtime-core";
import StartPage from "./page/StartPage";
import GamePage from "./page/GamePage";
import EndPage from "./page/EndPage";

// template -> render
export default defineComponent({
  setup() {
    // vue2 data
    // 创建响应式对象 ref
    // const currentPageName = ref("StartPage");
    const currentPageName = ref("GamePage");
    // 计算属性
    // 依赖别的属性的属性
    const currentPage = computed(() => {
      if (currentPageName.value === "StartPage") {
        return StartPage;
      } else if (currentPageName.value === "GamePage") {
        return GamePage;
      } else if (currentPageName.value === "EndPage") {
        return EndPage;
      }
    });

    return {
      currentPage,
      currentPageName
    }
  },
  render(ctx) {
    return h("Container", [
      h(ctx.currentPage, {
        onChangePage(page) {
          ctx.currentPageName = page;
        },
      }),
    ]);
    // return h("Container", [h(GamePage)]);
  },
});
