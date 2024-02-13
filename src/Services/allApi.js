import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"


//addproject api
export const addItemAPI = async(reqbody)=>{
    return await commonApi('POST',`${BASE_URL}/add`,reqbody)
 }


 export const getItemApi = async()=>{
    return await commonApi('GET',`${BASE_URL}/getItem`)
}
 