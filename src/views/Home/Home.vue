<!--  -->
<template>
  <div class="home">
    <HomeHeader />
    <div class="nav-list">
      <ly-tab v-model="selectedId" :items="items" :options="options" @change="changeFn"></ly-tab>
      <div class="category-link">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>
      </div>
    </div>
    <div style="height:8.8rem"></div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue
import HomeHeader from "./components/HomeHeader.vue";



export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    HomeHeader,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        {
          label: "首页",
        },
        {
          label: "家用电器",
        },
        {
          label: "男装女装",
        },
        {
          label: "鞋靴箱包",
        },
        {
          label: "手机数码",
        },
        {
          label: "电脑办公",
        },
        {
          label: "家具家访",
        },
        {
          label: "个人化妆",
        },
      ],
      options: {
        activeColor: "#fff", //设置选中的颜色
      },
      childrenRouter: [
        "/home/index",
        "/home/ele",
        "/home/person",
        "/home/box",
        "/home/phone",
        "/home/computer",
        "/home/house",
        "/home/face",
      ],
    };
  },
  methods: {
    changeFn(item, index) {
      console.log(item);
      console.log(index);
      this.$router.push(this.childrenRouter[index]);
    },
  },
};
</script>
<style lang="less" >
.home {
  .nav-list {
    display: flex;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 4.4rem;
    .ly-tab {
      width: 85%;
      .ly-tabbar {
        background: red;
        border: 0;
        box-shadow: 0 0px 0px 0px #eee;
        .ly-tab-list {
          padding: 0;
          height: 4.4rem;
        }
        a {
          color: #fff;
        }
      }
    }
    .category-link {
      background: red;
      width: 15%;
      line-height: 4.4rem;
      text-align: center;
      color: #fff;
      height: 4.4rem;
      i {
        font-size: 1.6rem;
        padding-left: 5px;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      }
      span {
        font-size: 1.4rem;
      }
    }
  }
}
</style>