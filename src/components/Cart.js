import React from "react";

const Cart = () => {
  return (
    <>
      <div class="container">
        <div class="details">
          <div class="details_a">r</div>
          <div class="details_b">
            <div class="size_one center_text">
              <p>Delivery info</p>
            </div>
            <div class="size_one center_text">
              <p class="bold_a">36 Bottles</p>
            </div>
            <div class="size_two">
              <div class="item_button_border">
                <p>
                  <b>36 X 2013 Breidecker</b>
                </p>
                <button>Empty Cat</button>
              </div>

              <div class="item_button">
                <p class="bold_b">Ksh 432.56</p>
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
