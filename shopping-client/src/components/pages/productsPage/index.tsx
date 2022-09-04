import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import ProductCard from "./productCard";
import SearchByCategory from "./searchByCategory";
import SearchByName from "./searchByName";
import getProducts from "../../../store/async/getProductsAction";
import getChosenProducts from "../../../store/async/getChosenProductsAction";
import './index.css';

export default function ProductsPage() {
  const products: any = useAppSelector((state) => state.products.products);
  let [currentDisplay, setCurrentDisplay] = useState(products);

  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      setCurrentDisplay(response);
    }
    fetchData();
  }, []);

  async function OrderBy(sortBy: any) {
    const newProductArray = ([...products].sort((a, b) =>
      sortBy < 2 ? a.price - b.price : sortBy === 2 ? b.price - a.price : a.rating - b.rating));
    setCurrentDisplay(newProductArray);
  }

  async function OrderByFreeSearch(chosenSmartphone: any) {
    const serverResults = await getChosenProducts(chosenSmartphone);
    setCurrentDisplay(serverResults);
  }

  return (
    <div className="containerProductPage">
      <div className="childOneProductPage">
        <div className="childTwoProductPage" >
          <h1> The Smartphone Shop  </h1>
          <div className="searchDivs">
            <span>
              <SearchByName
                OrderByFreeSearch={OrderByFreeSearch}
                options={products}
              />
              <br />
              <SearchByCategory OrderBy={OrderBy} />
            </span>
          </div>
        </div>
        {currentDisplay.map((productIteration: any): any => {
          return <div className="productDirectParent" >
            <ProductCard key={productIteration.id} {...productIteration}
            />
          </div>
        })}
      </div>
    </div>
  );
}
