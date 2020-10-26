<!--  -->
<template>
  <div class="search">
    <!-- 头部 -->
    <div class="category-header">
      <header>
        <a href="javascript:;" class="iconfont icon-jiantou3" onclick="window.history.back()"></a>
        <form action>
          <input type="search" placeholder="请输入关键字" v-model="keywords" />
          <i class="iconfont icon-sousuo2"></i>
        </form>
        <a href="javascript:;" style="font-size:1.4rem" @click="searchKeywords">搜索</a>
      </header>
    </div>
    <!-- 最近搜索 -->
    <div class="search-wrap">
      <div class="search-wrap-title">
        <div class="search-title">最近搜索</div>
        <div class="iconfont icon-shanchu"></div>
      </div>
      <ul class="search-list">
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
      </ul>
    </div>

    <!-- 热搜 -->
    <div class="search-wrap" style="margin-top:1rem">
      <div class="search-wrap-title">
        <div class="search-title">热搜</div>
      </div>
      <ul class="search-list">
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
        <li>手机</li>
      </ul>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      keywords: "",
    };
  },
  methods: {
    searchKeywords() {
      if (this.keywords) {
        this.$store.dispatch("searchKeywords", { keywords: this.keywords });
        this.$router.push("/searchlist");
      }
    },
  },
};
</script>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
  header {
    display: flex;
    form {
      width: 70%;
      position: relative;
      input {
        height: 3rem;
        border: 1px solid #efefef;
        width: 100%;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        text-indent: 10px;
      }
      i {
        position: absolute;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        color: #ccc;
      }
    }
    a {
      display: block;
      width: 15%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
.search-wrap {
  margin-top: 6rem;
  .search-wrap-title {
    display: flex;
    height: 4.4rem;
    line-height: 4.4rem;
    justify-content: space-between;
    margin: 0 10px;
    .search-title {
      font-size: 1.4rem;
    }
  }
  .search-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      width: 20%;
      height: 3rem;
      border: 1px solid #ccc;
      background: #efefef;
      box-sizing: border-box;
      text-align: center;
      line-height: 3rem;
      margin: 1% 2.5%;
    }
  }
}
</style>