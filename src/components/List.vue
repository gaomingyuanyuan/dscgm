<!-- 一行两列列表 -->
<template>
  <div class="list-container">
    <ul>
      <li v-for="list in lists" :key="list.goods_id">
        <router-link :to="'/goodsdetail/?goods_id='+list.goods_id">
          <img :src="`http://localhost:3000/${list.goods_img}`" alt />
          <h3>{{list.goods_name}}</h3>
          <p>{{list.shop_price}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    lists: Array,
  },
};
</script>
<style lang="less">
.list-container {
  width: 100%;
  margin-top: 5rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    // background: #efefef;
    li {
      width: 50%;
      text-align: center;
      img {
        width: 90%;
      }
      h3 {
        font-size: 1.2rem;
        color: #333;
        text-align: left;
        width: 90%;
        margin-left: 5%;
        line-height: 2rem;
        height: 4rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p {
        font-size: 1.6rem;
        color: red;
        line-height: 3rem;
        &::before {
          content: "￥";
        }
      }
    }
  }
}
</style>