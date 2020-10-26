<!-- 秒杀 -->
<template>
  <div class="miaosha">
    <span>{{dd}}天</span>
    <span>{{hh}}时</span>
    <span>{{mm}}分</span>
    <span>{{ss}}秒</span>
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
    return {
      dd: "00",
      hh: "00",
      mm: "00",
      ss: "00",
      timer: "",
    };
  },
  methods: {
    timeFn() {
      //获取当前时间
      var date = new Date();
      var nowTime = date.getTime(); //当前时间的时间戳
      // 设置一个截至时间
      var endDate = new Date("2020-10-9 18:00:00");
      var endTime = endDate.getTime();

      // 时间差
      var oTime = endTime - nowTime;
      if (oTime > 0) {
        this.dd = Math.floor(oTime / 1000 / 60 / 60 / 24); //天
        this.hh = Math.floor((oTime / 1000 / 60 / 60) % 24); //时
        this.mm = Math.floor((oTime / 1000 / 60) % 60); //分
        this.ss = Math.floor((oTime / 1000) % 60);
      }
    },
  },
  mounted() {
    this.timer = setInterval(this.timeFn, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style>
</style>