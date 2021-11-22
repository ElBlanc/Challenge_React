import React from "react";
import "./Car.css";

const Car = ({name,price,desc,img}) => {
  return (
    <div className="user-card">
      <h3 className="name">{name}</h3>
      <h3>{price}</h3>
      <p>{desc}</p>
      <img src={img} className="listofimages" />
      <div>
      <button onClick={()=>alert(`You have to pay ${price} to buy ${name}`)} className="Purchasebutton">Purchase</button>
      </div>
    </div>
  );
};

export default Car;
