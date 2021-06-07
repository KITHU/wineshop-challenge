import React,{useState} from "react";
import { add_to_cart, remove_from_cart } from "../redux/actions";

const Products = (props) => {
  let [bqty, setbqty] = useState(0)
  let [cqty, setcqty] = useState(0)

  const handleCaseChange=(e)=>{
    setcqty(e.target.value)
  }
  const handleBottleChange=(e)=>{
    setbqty(e.target.value)
  }

  const addtocart = (id , bcase , bottle)=>{
    props.additemstocart(id ,bcase ,bottle)
  }

  
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
                <input
                 type="number"
                 name="bqty"
                 onChange={handleBottleChange}
                 width="20px" /> QTY
              </span>
            </div>
            <div className="right_prices">
              <p>Case</p>
              <p>${props.case}</p>
              <span>
                <input 
                type="number"
                name="cqty"
                onChange={handleCaseChange}/> QTY
              </span>
            </div>
          </div>

          <div className="buttons">
            <button className="button_l"
            onClick={()=>props.getdetails(props.details)}>
              details
              </button>

            <button className="button_r" 
            onClick={()=>addtocart(props.no,cqty,bqty )}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;