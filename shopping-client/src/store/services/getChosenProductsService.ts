import axios from "axios";

export default async function getChosenProductsApi(chosenSmartphone: string) {
  const result = await axios.get(`https://dummyjson.com/products/search?q=${chosenSmartphone}`);
  return result.data.products;
}
