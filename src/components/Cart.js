import React from "react";

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="details">
          <div className="details_a">r</div>
          <div className="details_b">
            <div className="size_one center_text">
              <p>Delivery info</p>
            </div>
            <div className="size_one center_text">
              <p className="bold_a">36 Bottles</p>
            </div>
            <div className="size_two">
              <div className="item_button_border">
                <p>
                  <b>36 X 2013 Breidecker</b>
                </p>
                <button>Empty Cat</button>
              </div>

              <div className="item_button">
                <p className="bold_b">Ksh 432.56</p>
                <button>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
