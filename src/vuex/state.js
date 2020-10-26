//state是vuex中储存数据的
const state = {
    num: 1,
    catetoryDatas: [],  //分类--类别数据
    swipeDatas: [],   //首页轮播图
    userInfo: {},  //用户信息
    goodsLists: [], //产品列表
    goodsDetails: [], //产品详情
    //购物车数据
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    // 全选按钮的状态
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false,
    searchList: []
}

export default state