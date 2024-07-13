import axios from "axios";
import { base_url } from "../../utils/axiosConfig";


const getProducts = async(data)=>{
    const response = await axios.get(`${base_url}product?${data?.category?`category=${data?.category}`:""}${data?.sort?`sort=${data?.sort}`:""}`);
    if(response.data){
        return response.data
    }
}


const getSingleProduct = async (id) => {
    console.log(id,"id")
    const response = await axios.get(`${base_url}product/${id}`)
    if(response.data){
        return response.data
    }
}






export const productService ={
    getProducts,getSingleProduct
}