// 使用 Mock
var Mock = require('mockjs')
//请求延迟
Mock.setup({
    timeout:1000
})
Mock.mock('/api/tabBarData',{
    "username":"孙凌霄",
    "age":30
})

