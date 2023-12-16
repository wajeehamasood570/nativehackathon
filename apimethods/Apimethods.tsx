// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios"

// let baseUrl = "http://192.168.2.107:8000";

// let apiInstance = axios.create({
//     baseURL:baseUrl,
//     headers:{
//         Authorization:`Bearer ${AsyncStorage.getItem('authToken')}`
//     }
// })

// export let Get = (endPoint:string,queryParams?:any)=> apiInstance.get(`/${endPoint}`,{
//     params:{...queryParams}
// })

// export let Post = (endPoint: string, data?: any) => apiInstance.post(endPoint, data);