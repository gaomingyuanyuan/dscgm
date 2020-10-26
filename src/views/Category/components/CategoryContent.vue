<!--  -->
<template>
  <div class="category-content">
    <CategoryLeft />
    <CategoryRight />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryLeft,
    CategoryRight,
  },
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style lang="less">
.category-content {
  padding: 4.4rem 0 4.9rem 0;
  width: 100%;
  height: 100%;
  height: calc(100% - 9.3rem);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  overflow: hidden;
}
</style>