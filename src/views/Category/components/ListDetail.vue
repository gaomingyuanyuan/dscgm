<!-- 列表页面 -->
<template>
  <div class="list-detail">
    <CategoryHeader />
    <List :lists="goodsLists" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHeader from "./CategoryHeader";
import List from "@/components/List.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryHeader,
    List,
  },
  data() {
    //这里存放数据
    return {
      lists: [],
    };
  },
  computed: {
    goodsLists() {
      return this.$store.state.goodsLists;
    },
  },
  mounted() {
    // console.log(this.$route.query.cat_id);
    // getGoodsList({ cat_id: this.$route.query.cat_id }).then((res) => {
    //   console.log(res);
    // });
    this.$store.dispatch("getGoodsList", { cat_id: this.$route.query.cat_id });
  },
};
</script>
<style>
</style>