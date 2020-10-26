import ajax from "./ajax"

//定义一个全局变量--全局路径
const Base_URL = "/api"

//请求数据

//首页轮播图
export const getHomeSwipe = () => ajax(Base_URL + "/v1/index/swipe")

