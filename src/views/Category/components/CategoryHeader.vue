<!-- 分类头部组件 -->
<template>
  <div class="category-header">
    <header>
      <a href="javascript:;" class="iconfont icon-jiantou3" onclick="window.history.back()"></a>
      <form action>
        <input type="search" placeholder="请输入关键字" @click="toSearch" />
        <i class="iconfont icon-sousuo2"></i>
      </form>
    </header>
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
  methods: {
    toSearch() {
      // this.$router.replace("/search");  //替换
      this.$router.push("/search"); //前进一步
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
      width: 80%;
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
</style>