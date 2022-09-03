import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import ProductCard from "./productCard";
import SearchByCategory from "./searchByCategory";
import SearchByName from "./searchByName";
import getProducts from "../../../store/async/getProductsAction";
import getChosenProducts from "../../../store/async/getChosenProductsAction";

export default function ProductsPage() {
  const products = useAppSelector((state) => state.products.products);
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
    <div className="container" style={{background:"#E0E0E0"}}>
    <div style={{width: "85%", textAlign: "center", margin: "0 0", display: "inline-block",background:"#ffffff"}}>
      <div className="searchDivsWrapper" style={{ display: "inline-block",width:"100%"}}>
      <h1 style={{ textAlign: "left", marginLeft: "20px" }}> The Smartphone Shop  </h1>
      <div className="searchDivs" style={{ display: "inline-block", margin: "auto", width: "30%",marginTop:"2%",marginBottom:"5%",textAlign:"center" }}>
        <span>
        <SearchByCategory OrderBy={OrderBy} />
        <br />
        <SearchByName
          OrderByFreeSearch={OrderByFreeSearch}
          options={products}
        />
        </span>
      </div>
      </div>
      {currentDisplay.map((p) => {
        return <div style={{ display: "inline-block", maxWidth: "340px", margin: "auto", marginRight: "20px" }}>
          <ProductCard key={p.id} {...p}
          />
        </div>
      })}
    </div>
    </div>
  );
}
