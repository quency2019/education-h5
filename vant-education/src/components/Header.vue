<!--  -->
<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :right-text="rightText"
      :left-arrow="leftArrow"
      :fixed="fixed"
      :border="border"
      :click-left="back"
      :z-index="zIndex"
    />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    title: {
      type: String,
      default: "标题",
    },
    leftText: {
      type: String,
      default: "返回",
    },
    rightText: {
      type: String,
      default: "右侧文案",
    },
    leftArrow: {
      type: Boolean,
      default: true,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 9999,
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    back() {
      console.log("$router", $router);
      // $router.go(-1)
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped></style>
