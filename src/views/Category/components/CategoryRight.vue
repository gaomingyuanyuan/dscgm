<!-- 右边 -->
<template>
  <div class="category-wrap2">
    <div class="category-right">
      <div class="category-ad">
        <a href>
          <img :src="ad" alt />
        </a>
      </div>
      <div class="category-content2">
        <div v-for="lists in categoryRightDatas" :key="lists.cat_id">
          <h3>
            -
            <span>{{lists.cat_name}}</span>
            -
          </h3>
          <ul>
            <li v-for="list in lists.child" :key="list.cat_id">
              <router-link :to="'/listdetail?cat_id='+list.cat_id">
                <img
                  src="https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg"
                  alt
                />
                <h4>{{list.cat_name}}</h4>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      categoryRightDatas: [],
      ad: "",
    };
  },
  methods: {
    getCategoryRightDatas(cid) {
      Axios.get(`/api/v1/category/categorylist/${cid}`).then((res) => {
        console.log(res.data);
        if (res.status == 200) {
          this.categoryRightDatas = res.data.data;
          var arr = this.$store.state.catetoryDatas.filter((item) => {
            return item.category_id == cid;
          });
          console.log(arr);
          this.ad = arr[0].menu_img;
        }
      });
    },
  },
  watch: {
    $route(to) {
      console.log(to); //对象，包含路由的信息
      let cid = to.params.cid;
      console.log(cid);
      this.getCategoryRightDatas(cid);
      var arr = this.$store.state.catetoryDatas.filter((item) => {
        return item.category_id == cid;
      });
      console.log(arr);
      this.ad = arr[0].menu_img;
    },
  },
  mounted() {
    console.log(this.$route);
    this.getCategoryRightDatas("858");
  },
};
</script>
<style lang="less">
.category-right {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  .category-ad {
    width: 100%;
    margin-top: 10px;
    img {
      width: 90%;
      margin-left: 5%;
    }
  }
  .category-content2 {
    h3 {
      font-size: 1.4rem;
      text-align: center;
      height: 4.4rem;
      line-height: 4.4rem;
      color: #666;
      font-weight: normal;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      li {
        width: 33%;
        height: 8.2rem;
        margin-bottom: 1rem;
        img {
          width: 5.2rem;
          height: 5.2rem;
        }
        h4 {
          color: #666;
          font-weight: normal;
          height: 3rem;
          line-height: 3rem;
        }
      }
    }
  }
}
</style>