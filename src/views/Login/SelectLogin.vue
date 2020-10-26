<!-- 选择登录方式 -->
<template>
  <div class="select-login">
    <div class="logo">
      <img src="@/assets/logo.png" alt />
    </div>
    <h2>请选择登录方式</h2>
    <router-link to="/login" tag="button">手机登录</router-link>
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
};
</script>
<style lang="less">
.select-login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 10rem;
    height: 10rem;
    border: 6px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  h2 {
    font-size: 1.4rem;
    height: 4.4rem;
    line-height: 4.4rem;
  }
  button {
    width: 20rem;
    height: 4.4rem;
    text-align: center;
    line-height: 4.4rem;
    font-size: 1.4rem;
    background: red;
    color: #fff;
  }
}
</style>