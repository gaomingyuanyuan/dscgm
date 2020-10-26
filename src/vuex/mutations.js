//mutations里面定义的方法是用来修改state
import { MessageBox } from 'mint-ui';
const mutations = {
    addNum(state) {
        console.log(state);
        ++state.num
    },
    addNumX(state, data) {
        console.log(state);
        state.num = state.num + data
    },
    getCategoryDatas(state, data) {
        state.catetoryDatas = data
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getUserInfo(state, data) {
        state.userInfo = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },
    getGoodsDetails(state, data) {
        state.goodsDetails = data
    },
    // 设置购物车中的数据
    setCartDatas(state, data) {
        console.log(data);
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 数字++
    addCart(state, index) {
        console.log(state.carts[index]);
        state.carts[index].value++  //修改对应索引数据中的value值
        localStorage.setItem("carts", JSON.stringify(state.carts))  //重新设置本地存储数据
    },
    //数字--
    jianCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value = 1
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            });
        } else {
            state.carts[index].value--  //修改对应索引数据中的value值
            localStorage.setItem("carts", JSON.stringify(state.carts))  //重新设置本地存储数据
        }
    },
    // 输入数字
    changeValue(state, data) {
        console.log(state);
        console.log(data);

        if (data.val <= 1) {
            data.val = 1
            MessageBox({
                title: '提示',
                message: '亲，至少要购买一个哦！'
            });
        }
        state.carts[data.index].value = data.val
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 商品删除
    dele(state, index) {
        MessageBox.confirm('亲,您确定要放弃该宝贝吗？').then(() => {
            console.log("确定");
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))  //重新设置本地存储数据
        }, () => {
            console.log("点击了取消");
        });
    },
    // 商品的选中状态
    changeSelect(state, isSelect) {
        console.log(state);
        console.log(isSelect);
        state.carts[isSelect.index] = isSelect.cart

        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })
        console.log(isCheck);

        state.checkAll = isCheck
        localStorage.setItem("checkAll", state.checkAll)

        localStorage.setItem("carts", JSON.stringify(state.carts))  //重新设置本地存储数据
    },
    // 全选按钮
    selectAllFn(state) {
        state.checkAll = !state.checkAll
        state.carts.forEach(item => {
            item.isSelect = state.checkAll
        })
        localStorage.setItem("carts", JSON.stringify(state.carts))
        localStorage.setItem("checkAll", state.checkAll)
    },
    // 搜索页面
    searchKeywords(state, data) {
        state.searchList = data
    }

}

export default mutations