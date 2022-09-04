import { store } from "..";
import { setProducts } from "../reducers/productsReducers";
import getProductsApi from "../services/getProductsService";

export default async function getProducts() {
  try {
    const result = await getProductsApi();
    store.dispatch(setProducts(result));
    return result;
  } catch (error) {
    alert("Oops@ Something went wrong");
  }
}
