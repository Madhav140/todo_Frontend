import axios from 'axios'

export const commonApi = async(httpRequest,url,reqbody)=>{
    const reqConfig={
        method:httpRequest,
        url,
        data:reqbody,
        headers:{"Content-Type":"application/json"}  
    }
   return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}