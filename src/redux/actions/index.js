import wines from "../axios";

export const fetchProducts = () => {
  return function (dispatch) {
    const response = wines.get("/wine-shop.json").then((res) => {
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: res.data,
      });
    });
  };
};

export const add_to_cart = (id, bcase, bottle) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload:[id,bcase,bottle],
  };
};

export const remove_from_cart = (id) => {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    id,
  };
};
