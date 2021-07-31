import React, { useEffect } from "react";
import Card from "../../components/glassmorphism/card";
import { glassData } from "../../data";
import "./index.scss";

function Glassmorhphism() {
  useEffect(() => {
    document.title = "Glassmorphism";
  }, []);

  return (
    <div className={"glassWrapper"}>
      <div className={"glassContainer"}>
        {glassData.map((item) => (
          <Card
            key={item.id}
            num={item.number}
            title={item.heading}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Glassmorhphism;
