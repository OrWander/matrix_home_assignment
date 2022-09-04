import axiosInstance from "./constants";

export default async function getProductsApi() {
  const result = await axiosInstance.get("/category/smartphones");  
  return result.data.products;
}


