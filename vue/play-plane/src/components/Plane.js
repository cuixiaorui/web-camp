// 飞机逻辑
import {
  toRefs,
  reactive,
  watch,
  ref,
  h,
  defineComponent,
} from "@vue/runtime-core";
import planeImg from "../../assets/plane.png";
export default defineComponent({
  props: ["x", "y"],
  setup(props) {
    // vue2 watch
    // props 是一个只读的响应式对象
    //target is readonly.

    // 方案一
    // const point = reactive({ x: props.x, y: props.y });
    // watch(props, (value) => {
    // //   console.log(value);
    //   //   props.x = value.x;
    //   point.x = value.x;
    //   point.y = value.y;
    // });

    // return {
    //   point,
    // };

    // 响应式丢失问题
    const { x, y } = toRefs(props);
    return {
      x,
      y,
    };
  },

  render(ctx) {
    return h("Container", { x: ctx.x, y: ctx.y }, [
      h("Sprite", { texture: planeImg }),
    ]);
  },
});
