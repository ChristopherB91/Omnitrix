import { useState } from "react";
import Watch from "./assets/Omnitrix.svg";
import WatchActive from "./assets/OmnitrixActive.svg";
import Button from "./assets/Button.svg";
import Timeout from "./assets/OmnitrixTimeout.svg";
import Ultimatrix from "./assets/OmnitrixUltToggle.svg";
// import Transformation from "./Transformation.json";
import "./App.css";

function App() {
  const [style, setStyle] = useState("Active");
  const [style2, setStyle2] = useState("Inactive");

  const changeStyle = () => {
    setStyle("Inactive");
    setStyle2("Active");
  };

  const reverseStyle = () => {
    setStyle("Active");
    setStyle2("Inactive");
  };

  return (
    <>
      <h1>Omnitrix app</h1>
      <div id="omnitrixWatch">
        <img src={Watch} alt="Omnitrix Watch Portion" className={style} />
        <input
          type="image"
          src={WatchActive}
          alt="Omnitrix Watch Active"
          className={style2}
        />
        <br />
        <input
          type="image"
          src={Button}
          alt="Omnitrix activation Button"
          id="omniBttn"
          className={style}
          onClick={changeStyle}
        />
        <br />
        <div className="bttns">
          <input
            type="image"
            src={Timeout}
            alt="Timeout / Reset button"
            className={style2}
            onClick={reverseStyle}
          />
          <input
            type="image"
            src={Ultimatrix}
            alt="Ultimate Toggle"
            className={style2}
          />
        </div>
      </div>
    </>
  );
}

export default App;
