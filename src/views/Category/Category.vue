<!--  -->
<template>
  <div class="category">
    <CategoryHeader />
    <CategoryContent />
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue
import CategoryHeader from "./components/CategoryHeader";
import CategoryContent from "./components/CategoryContent";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    CategoryHeader,
    CategoryContent,
  },
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style>
</style>