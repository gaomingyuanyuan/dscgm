<!--  -->
<template>
  <div class="mine">
    <div v-if="!userInfo.user_id">
      <SelectLogin />
    </div>
    <h2>{{userInfo.user_name}}</h2>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue
import SelectLogin from "../Login/SelectLogin";
// import bus from "@/styles/tools.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    SelectLogin,
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  data() {
    //这里存放数据
    return {};
  },
  mounted() {
    console.log(this.$store.state.userInfo);
  },
};
</script>
<style>
</style>