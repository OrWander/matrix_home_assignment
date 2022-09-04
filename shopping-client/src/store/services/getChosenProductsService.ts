import axiosInstance from "./constants";

export default async function getChosenProductsApi(chosenSmartphone: string) {
  const result = await axiosInstance.get(`/search?q=${chosenSmartphone}`);
  return result.data.products;
}
