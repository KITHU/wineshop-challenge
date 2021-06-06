import React from "react";

const Products = (props) => {
    let img = "https://storage.googleapis.com/wineshop-assets/wine-bottles/reisling.png"
  return (
    <div>
      <div className="card">
        <img
          className="bottle"
        //   src="https://storage.googleapis.com/wineshop-assets/wine-bottles/reisling.png"
        src={props.image}
          alt="reisling"
        />
        <div className="data">
          <div className="title">
            <p className="p_hd1">{props.no}</p>
            <p className="p_hd2">{props.name}</p>
          </div>

          <div className="price">
            <div className="left_prices">
              <p>Bottle</p>
              <p>${props.bottle}</p>
              <span>
                <input type="number" width="20px" /> QTY
              </span>
            </div>
            <div className="right_prices">
              <p>Case</p>
              <p>${props.case}</p>
              <span>
                <input type="number" name=""/> QTY
              </span>
            </div>
          </div>

          <div class="buttons">
            <button class="button_l"
            onClick={()=>props.getdetails(props.details)}>
              details
              </button>

            <button class="button_r">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;