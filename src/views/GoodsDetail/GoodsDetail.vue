<!-- 商品详情页 -->
<template>
  <div class="detail-container">
    <Head title="商品详情" :left="left" :right="right" />
    <!-- 轮播图 -->
    <div class="detail-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="`http://localhost:3000/${goodsdetail.goods_img}`" alt />
          </div>
          <div class="swiper-slide">
            <img :src="`http://localhost:3000/${goodsdetail.goods_img}`" alt />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="detail-content">
      <div class="detail-price">{{goodsdetail.shop_price}}</div>
      <div class="detail-title">{{goodsdetail.goods_name}}</div>
      <div v-html=goodsdetail.goods_desc></div>
    </div>

    <!-- 详情页底部 -->
    <div class="detail-footer">
      <div class="kefu">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div class="shoucang">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <div :class="{addNum:flag}" v-show="flag">+1</div>
          <em>{{count}}</em>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="addcart" @click="addCartFn(goodsdetail)">加入购入车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper"; //cnpm install swiper @4 --save
import Head from "@/components/Head.vue";
import "swiper/dist/css/swiper.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
  },
  data() {
    //这里存放数据
    return {
      flag: false,
      timer: "",
      left: true,
      right: false,
    };
  },
  computed: {
    goodsdetail() {
      return this.$store.state.goodsDetails;
    },
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        count += item.value;
      });
      return count;
    },
  },
  methods: {
    //添加购物车方法
    addCartFn(data) {
      console.log(data);
      //处理数据
      //1、判断购物车列表中是否有当前数据
      //有---将购物车中的商品数字++
      //没有---新增加一个商品
      console.log(this.$store.state.carts);
      this.flag = true;
      this.timer = setTimeout(() => {
        this.flag = false;
      }, 1000);
      var isCart = this.$store.state.carts.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });

      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          goods_img: data.goods_img,
          value: 1,
          isSelect: false,
        };
      }

      this.$store.commit("setCartDatas", cartData);
    },
  },
  mounted() {
    this.$store.dispatch("getGoodsDetails", {
      goods_id: this.$route.query.goods_id,
    });

    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style lang="less">
.detail-swiper {
  width: 100%;
  height: 37.5rem;
  img {
    width: 100%;
    height: 37.5rem;
  }
}
.detail-content {
  width: 100%;
  border: 10px solid #fff;
  // box-sizing: border-box;
  width: calc(100% - 20px);
  img {
    width: 90%;
    margin-left: 5%;
  }
  .detail-price {
    font-size: 1.8rem;
    color: #f00;
    &::before {
      font-size: 1.2rem;
      content: "￥";
    }
  }
  .detail-title {
    margin: 2rem 0;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #333;
  }
}
.detail-footer {
  width: 100%;
  height: 4.9rem;
  border-top: 1px solid #efefef;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  > div {
    font-size: 1.2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    i {
      font-size: 2rem;
    }
  }
  .addcart {
    flex: 2;
    background: #f55;
    color: #fff;
    font-size: 1.4rem;
  }
  .buy {
    flex: 2;
    background: #ff976a;
    color: #fff;
    font-size: 1.4rem;
  }
  .shoucang {
    border-left: 1px solid #efefef;
    border-right: 1px solid #efefef;
  }
  .cart {
    position: relative;
    a {
      display: block;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    em {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      min-width: 1.4rem;
      height: 1.4rem;
      border-radius: 0.8rem;
      background: red;
      color: #fff;
      text-align: center;
      line-height: 1.4rem;
      font-style: normal;
      padding: 0.2rem;
    }
    .addNum {
      color: #f00;
      position: absolute;
      font-size: 2rem;
      width: 100%;
      top: 1rem;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      opacity: 0;
      text-align: center;
      animation: moveup 1s linear;
    }
    @keyframes moveup {
      0% {
        top: 1rem;
        opacity: 0;
      }
      50% {
        top: -2rem;
        opacity: 1;
      }
      100% {
        top: -2rem;
        opacity: 0;
      }
    }
  }
}
</style>