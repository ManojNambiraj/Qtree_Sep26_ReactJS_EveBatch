import React from "react";
import "./Ecommerce.css";
import ProductCard from "./ProductCard";
import shirt1 from "../assets/images/kelly.avif"
import shirt2 from "../assets/images/Clyver.avif"
import shirt3 from "../assets/images/VDLooks.avif"
import shirt4 from "../assets/images/lycra.avif"

function Ecommerce() {
    const data = [
      {
        id: 1,
        pName: "Kelly",
        price: 4000,
        image: shirt1,
        desc: "Some quick example text to build on the card",
      },
      {
        id: 2,
        pName: "Clyver",
        price: 2500,
        image: shirt2,
        desc: "Some quick example text to build on the card",
      },
      {
        id: 3,
        pName: "VDLooks",
        price: 1800,
        image: shirt3,
        desc: "Some quick example text to build on the card",
      },
      {
        id: 4,
        pName: "Lycra",
        price: 7500,
        image: shirt4,
        desc: "Some quick example text to build on the card",
      },
      {
        id: 5,
        pName: "Codes",
        price: 400,
        image: shirt3,
        desc: "Some quick example text to build on the card",
      },
      
    ];
    
  return (
    <div className="container-fluid minDiv">
      <div className="row">
        <div className="col-2 left">left</div>
        <div className="col-10 right">
          <div className="row">
            {
                data.map((product) => {
                    return <ProductCard product={product} />;
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
