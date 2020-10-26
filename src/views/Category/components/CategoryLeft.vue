<!-- 左边菜单 -->
<template>
  <div class="category-wrap">
    <div class="category-left">
      <ul class="category-nav">
        <li v-for="list in this.$store.state.catetoryDatas" :key="list.category_id">
          <router-link :to="'/category/'+list.category_id">{{list.menu_name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
// import bus from "@/styles/tools.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      is_active: 0,
    };
  },
  methods: {
    getCategoryDatas() {
      //http://192.168.0.161:3000/api/v1/category
      Axios.get("/api/v1/category").then((res) => {
        console.log(res.data);
        if (res.data.status == 200) {
          this.$store.dispatch("actgetCategoryDatas", res.data.data); 
        }
      });
    },
    changeTab(index) {
      this.is_active = index;
    },
  },
  mounted() {
    this.getCategoryDatas();
    // console.log(bus);
    // bus.$emit("eventa", "123456");
  },
};
</script>
<style lang="less">
.category-wrap {
  height: 100%;
  .category-left {
    height: 100%;
    width: 8.4rem;
    overflow-y: scroll;
    background: #efefef;
    ul {
      li {
        height: 3.8rem;
        font-size: 1.4rem;
        line-height: 3.8rem;
        text-align: center;
      }
      .router-link-active {
        display: block;
        background: #fff;
        color: red;
      }
    }
  }
}
</style>