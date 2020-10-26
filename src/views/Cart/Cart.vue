<!--  -->
<template>
  <div class="cart">
    <Head title="购物车123" :left="left" :right="right" />
    <div class="cart-content" v-if="!nocart">
      <ul>
        <li v-for="(cart,index) in cartLists" :key="cart.goods_id">
          <!-- 选择框 -->
          <div class="select" @click="changeSelect(cart,index)">
            <i class="iconfont icon-danxuankuang" v-if="!cart.isSelect"></i>
            <i class="iconfont icon-danxuankuangxuanzhong" v-else style="color:red"></i>
          </div>
          <!-- 图片 -->
          <div class="cart-img">
            <img :src="`http://localhost:3000/${cart.goods_img}`" alt />
          </div>
          <!-- 右边内容 -->
          <div class="cart-info">
            <div class="cart-title">{{cart.goods_name}}</div>
            <div class="cart-wrap">
              <span class="price">{{cart.shop_price}}</span>
              <div class="cart-num">
                <a href="javascript:;" @click="jianCart(index)">-</a>
                <input
                  type="number"
                  value="1"
                  ref="val"
                  min="1"
                  @input="changeValue(index)"
                  v-model="cart.value"
                />
                <a href="javascript:;" @click="addCart(index)">+</a>
                <button class="dele iconfont icon-shanchu1" @click="dele(index)"></button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="nocart" v-else>
      <i class="iconfont icon-gouwuche"></i>
      <p>
        购物车空空如也！
        <router-link to="/home">去逛逛</router-link>
      </p>
    </div>
    <div class="cartFooter" v-if="!nocart">
      <div class="checkAll" @click="selectAllFn">
        <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
        <i class="iconfont icon-danxuankuangxuanzhong" v-else style="color:red"></i>
        <span>全选</span>
      </div>
      <div class="priceAll">
        合计:
        <span style="color:red; font-size:1.6rem">{{total}}</span>
      </div>
      <div class="gobuy">去结算({{count}})</div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue
import Head from "@/components/Head.vue";
import {mapMutations} from "vuex"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Head,
  },
  computed: {
    cartLists() {
      return this.$store.state.carts;
    },
    selectAll() {
      return this.$store.state.checkAll;
    },
    total() {
      let totalPrice = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          totalPrice += item.value * item.shop_price;
        }
      });
      return totalPrice;
    },
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          count += item.value;
        }
      });
      return count;
    },
    nocart() {
      return this.$store.state.carts.length == 0;
    },
  },
  data() {
    //这里存放数据
    return {
      left: true,
      right: false,
    };
  },
  methods: {
    ...mapMutations(["addCart", "jianCart", "dele"]),
    selectAllFn() {
      //全选
      this.$store.commit("selectAllFn");
    },
    // addCart(index) {
    //   //数字++
    //   console.log(index);
    //   this.$store.commit("addCart", index);
    // },
    // jianCart(index) {
    //   //数字--
    //   this.$store.commit("jianCart", index);
    // },
    // dele(index) {
    //   //删除
    //   this.$store.commit("dele", index);
    // },
    changeValue(index) {
      //直接修改数字
      console.log(this.$refs.val[index].value);
      console.log(index);
      let val = this.$refs.val[index].value;
      this.$store.commit("changeValue", { index, val });
    },
    changeSelect(cart, index) {
      //单选商品
      console.log(cart);
      cart.isSelect = !cart.isSelect;
      this.$store.commit("changeSelect", { cart, index });
    },
  },
};
</script>
<style lang="less">
.cart-content {
  margin: 4.4rem 0 4.9rem 0;
  width: 100%;
  li {
    display: flex;
    height: 10rem;
    border-bottom: 1px solid #efefef;
    .select {
      display: flex;
      flex-direction: column;
      width: 10%;
      justify-content: center;
      text-align: center;
    }
    .cart-img {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .cart-info {
      width: 65%;
      margin-left: 3%;
      margin-right: 2%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .cart-title {
        font-size: 1.2rem;
        height: 4rem;
        line-height: 2rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 1rem;
      }
      .price {
        color: red;
        font-size: 1.6rem;
        float: left;
        &::before {
          content: "￥";
        }
      }
      .cart-num {
        float: right;
        a {
          width: 2rem;
          height: 2rem;
          background: #ccc;
          text-align: center;
          line-height: 2rem;
          font-size: 1.4rem;
          float: left;
        }
        input {
          width: 3rem;
          height: 2rem;
          float: left;
          border: 1px solid #efefef;
          box-sizing: border-box;
          text-align: center;
        }
        .dele {
          margin-left: 2rem;
          background: transparent;
          color: #999;
        }
      }
    }
  }
}
.nocart {
  margin-top: 8rem;
  text-align: center;
  i {
    font-size: 10rem;
    color: #999;
  }
  p {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
}
.cartFooter {
  position: fixed;
  height: 4.4rem;
  bottom: 4.9rem;
  width: 100%;
  border-right: 10px solid #fff;
  border-left: 10px solid #fff;
  box-sizing: border-box;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  .gobuy {
    width: 30%;
    text-align: center;
    color: #fff;
    background-color: #f55;
    height: 4.4rem;
    line-height: 4.4rem;
    font-size: 1.4rem;
  }
}
</style>