import React, { useState } from "react";

import dividerLarge from "../assets/pattern-divider-desktop.svg";
import dividerSmall from "../assets/pattern-divider-mobile.svg";
import diceButton from "../assets/icon-dice.svg";

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [media, setMedia] = useState("(min-width:720px)");
  // https://api.adviceslip.com
  const handleClick = async () => {};

  return (
    // Template
    <div className="bg-[#323a49]">
      <p>#Advice 12</p>
      <p>
        <q>Bala Blue</q>
      </p>

      <img src={dividerSmall} />
      <div className="">
        <img className="" src={diceButton} />
      </div>
    </div>
  );
};

export default Quotes;
