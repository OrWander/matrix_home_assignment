import axiosInstance from "./constants";

export default async function getChosenProductsApi(chosenSmartphone: string) {
  try {
    const result = await axiosInstance.get(`/search?q=${chosenSmartphone}`);
    return result.data.products;
  } catch (error) {
    alert("Oops! something went wrong")
  }
}
