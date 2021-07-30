import React from "react";
import "./index.scss";

function FlipCard(props) {
  return (
    <div className={"flipCard"}>
      <div className={"flipCardFront"}>
        <img
          alt={"phone-front-img"}
          src={props.src}
          height={"100%"}
          width={"100%"}
        />
      </div>
      <div className={"flipCardBack"}>
        <div className={"backImgBox"}>
          <img src={props.src} alt={"phone-back-img"} />
        </div>
        <h3>{props.heading}</h3>
        <ul>
          <li>{props.caption}</li>
          <li>{props.price}</li>
          <li>{"⭐⭐⭐⭐"}</li>
        </ul>
        <div className={"flipBtnContainer"}>
          <button type={"button"} className={"flipBtnWish"} name='btn-wish'>
            {"wishlist"}
          </button>
          <button type='button' className={"flipBtnCart"} name='btn-cart'>
            {"add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
