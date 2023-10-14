import React, { useEffect } from "react";
import "./index.scss";
import FlipCard from "../../components/flipeffect/flipcard";
import { flipData } from "../../data/flipData";

function FlipEffect() {
  useEffect(() => {
    document.title = "Flip Effect";
  }, []);

  return (
    <div className='flipCardWrapper'>
      <header>
        <h1>Flip Cards</h1>
        <p>Choose Your Phones Wisely</p>
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
