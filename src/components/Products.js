import React from "react";

const Products = (props) => {
    let img = "https://storage.googleapis.com/wineshop-assets/wine-bottles/reisling.png"
  return (
    <div>
      <div class="card">
        <img
          class="bottle"
        //   src="https://storage.googleapis.com/wineshop-assets/wine-bottles/reisling.png"
        src={props.image}
          alt="reisling"
        />
        <div class="data">
          <div class="title">
            <p class="p_hd1">{props.no}</p>
            <p class="p_hd2">{props.name}</p>
          </div>

          <div class="price">
            <div class="left_prices">
              <p>Bottle</p>
              <p>${props.bottle}</p>
              <span>
                <input type="number" width="20px" /> QTY
              </span>
            </div>
            <div class="right_prices">
              <p>Case</p>
              <p>${props.case}</p>
              <span>
                <input type="number" name=""/> QTY
              </span>
            </div>
          </div>

          <div class="buttons">
            <button class="button_l">details</button>

            <button class="button_r">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;