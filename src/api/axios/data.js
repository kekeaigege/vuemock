import axios from "../axios/axios"
export const getBannerData = ()=>{
    return axios.request({url:'banner',method:'get'})
}
export const getTabData = ()=>{
    return axios.request({url:'tabBarData',method:'get'})
}