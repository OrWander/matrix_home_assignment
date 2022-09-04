import getChosenProductsApi from "../services/getChosenProductsService";

export default async function getChosenProducts(chosenSmartphone:string) {  
  try {
    const result = await getChosenProductsApi(chosenSmartphone);
    return result;
  } catch (error) {
    alert("Oops! Something went wrong");
  }
}

