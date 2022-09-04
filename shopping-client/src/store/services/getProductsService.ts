import axiosInstance from "./constants";

export default async function getProductsApi() {
  try {
    const result = await axiosInstance.get("/category/smartphones");
    return result.data.products;
  } catch (error) {
    alert("Oops! something went wrong")
  }
}


