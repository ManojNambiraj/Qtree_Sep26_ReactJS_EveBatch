import React from 'react'

function ProductCard(props) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.pName}</h5>
        <h6 className="card-title">Rs. {props.product.price}</h6>
        <p className="card-text">
          {props.product.desc} 
        </p>
        <button className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard