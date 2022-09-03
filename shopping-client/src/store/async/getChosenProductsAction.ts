import getChosenProductsApi from "../services/getChosenProductsService";

export default async function getChosenProducts(chosenSmartphone:any) {
  try {
    const result = await getChosenProductsApi(chosenSmartphone);
    return result;
    // store.dispatch(setProducts(result));
  } catch (error) {
    alert("Something went wrong");
  }
}

