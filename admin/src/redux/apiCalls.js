import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try{
           const res=await publicRequest.post("/auth/login",user);
           dispatch(loginSuccess(res.data));
    }catch(err){
      dispatch(loginFailure()); 
    }
}
export const getProducts=async(dispatch)=>{
  dispatch(getProductStart());
  try{
         const res=await publicRequest.get("/products");
         dispatch(getProductSuccess(res.data));
  }catch(err){
    dispatch(getProductFailure()); 
  }
};
export const deleteProducts=async(id,dispatch)=>{
  dispatch(deleteProductStart());
  try{
        const res=await userRequest.delete(`/products/${id}`);
         dispatch(deleteProductSuccess(id));
  }catch(err){
    dispatch(deleteProductFailure()); 
  }
};
export const updateProducts=async(id,product,dispatch)=>{
  console.log("working");
  dispatch(updateProductStart());
  try{
    //update
   
    const res=await userRequest.put(`/products/${id}`,product)
         dispatch(updateProductSuccess(res.data));
  }catch(err){
    dispatch(deleteProductFailure()); 
  }
};
export const addProduct=async(product,dispatch)=>{
console.log(product);
   dispatch(addProductStart());
  try{
       const res=await userRequest.post(`/products`,product);
         dispatch(addProductSuccess(res.data));
  }catch(err){
    dispatch(addProductFailure()); 
  }
};