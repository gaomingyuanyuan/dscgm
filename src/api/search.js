import ajax from "./ajax"

//定义一个全局变量--全局路径
const Base_URL = "/api"

//请求数据

//搜索页面
//   /api/v1/search?keywords=手机&size=5&page=1
export const searchFn = (params) => ajax(Base_URL + "/v1/search", params)

