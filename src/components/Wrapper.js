import React, { useEffect, useState } from "react";
import Products from "./Products";

const Wrapper = () => {
  let url = "https://storage.googleapis.com/wineshop-assets/wine-bottles/"
  let [state, setstate] = useState([]);
  useEffect(() => {
    console.log("useEffect in action");
    fetch("https://storage.googleapis.com/wineshop-assets/wine-shop.json")
      .then((response) => response.json())
      .then((data) => {
        setstate((state = data));
        console.log(state);
      })
      .catch((error) => {
        alert("Network error ");
      });
  }, []);

  return (
    <div className="hello">
      {state.map((obj)=>(
          <Products
          no={obj.no}
          name={obj.name}
          bottle={obj.cost.bottle}
          case={obj.cost.case}
          image = {url + obj.image}
          />
      ))}
      
    </div>
  );
};

export default Wrapper;
