import React from "react";
import "./index.scss";
import FlipCard from "../../components/flipeffect/flipcard";
import { flipData } from "../../data";

function FlipEffect() {
  return (
    <div className='flipCardWrapper'>
      <header>
        <h1>flip cards</h1>
        <p>choose your phones wisely</p>
      </header>
      <section>
        {flipData.map((item) => (
          <FlipCard
            key={item.id}
            heading={item.heading}
            caption={item.subtitle}
            price={item.price}
            src={item.imgSrc}
          />
        ))}
      </section>
    </div>
  );
}

export default FlipEffect;
