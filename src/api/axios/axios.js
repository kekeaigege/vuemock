import axios from "axios";
import config from "../../config"
const baseUrl = process.env.NODE_ENV === "development" ? config.baseUrl.dev : config.baseUrl.pro
class HttpRequest{
    constructor(
        baseUrl
    ){
        this.baseUrl = baseUrl;
        this.queue = {}
    }
    interceptors(instance,url){ 
        instance.interceptors.request.use(config => {
        return config;
        }),error => {
            return {
                error:"网络出错"
            };
        };
        instance.interceptors.response.use(res => {
            return res.data;
        }),error => {
            return {
                error:"网络出错"
            };
        }

    }
    getInsideConfig(){
    const config = {
        baseURL:this.baseUrl,
        header:{
        }
    }
        return config;
    }
    request(options){
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance,options.url)
        return instance(options);
    }
}
const axiosObj = new HttpRequest(baseUrl)
export default axiosObj;