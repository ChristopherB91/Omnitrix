import { useState } from "react";
import left from "./assets/LeftArrow.svg";
import right from "./assets/RightArrow.svg";
import Watch from "./assets/Omnitrix.svg";
import WatchActive from "./assets/OmnitrixActive.svg";
import Button from "./assets/Button.svg";
import Timeout from "./assets/OmnitrixTimeout.svg";
import Ultimatrix from "./assets/OmnitrixUltToggle.svg";
import Transformation from "./Transformation.json";
import "./App.css";

function App() {
  const [style, setStyle] = useState("Active");
  const [style2, setStyle2] = useState("Inactive");
  const [style3, setStyle3] = useState("Inactive");
  const [style4, setStyle4] = useState("Inactive");
  const [presetNum, setPresetNum] = useState(1);
  const [alienNum, setAlien] = useState(1);

  const changeStyle = () => {
    setStyle("Inactive");
    setStyle2("Active");
  };

  const changeStyle2 = () => {
    if (Transformation[presetNum - 1].Aliens[alienNum - 1].Ultimate == true) {
      setStyle4("Active");
    }
    setStyle2("Inactive");
    setStyle3("Active");
  };

  const reverseStyle = () => {
    setStyle("Active");
    setStyle2("Inactive");
    setStyle3("Inactive");
    setStyle4("Inactive");
    setAlien(1);
    setPresetNum(1);
  };

  const incPreset = () => {
    if (presetNum < 6) {
      setPresetNum(presetNum + 1);
    } else {
      setPresetNum(1);
    }
  };

  const decPreset = () => {
    if (presetNum > 1) {
      setPresetNum(presetNum - 1);
    } else {
      setPresetNum(6);
    }
  };

  const incAlien = () => {
    if (alienNum < 10) {
      setAlien(alienNum + 1);
    } else {
      setAlien(1);
    }
  };

  const decAlien = () => {
    if (alienNum > 1) {
      setAlien(alienNum - 1);
    } else {
      setAlien(10);
    }
  };

  return (
    <>
      <h1>Omnitrix app</h1>
      <div id="omnitrixWatch">
        <p className={style}>You have selected preset {presetNum}</p>
        <p className={style2}>
          Alien number {alienNum} a(n){" "}
          {Transformation[presetNum - 1].Aliens[alienNum - 1].Name} also know as{" "}
          {Transformation[presetNum - 1].Aliens[alienNum - 1].Nickname}
        </p>
        <div className="Watch">
          <input
            type="image"
            alt="Decrement button"
            src={left}
            onClick={decPreset}
            className={style}
          />
          <img src={Watch} alt="Omnitrix Watch Portion" className={style} />
          <input
            type="image"
            alt="Increment button"
            onClick={incPreset}
            src={right}
            className={style}
          />
          <input
            type="image"
            alt="Decrement button"
            src={left}
            onClick={decAlien}
            className={style2}
          />
          <input
            type="image"
            src={WatchActive}
            alt="Omnitrix Watch Active"
            className={style2}
            onClick={changeStyle2}
          />
          <img
            src={Transformation[presetNum - 1].Aliens[alienNum - 1].Silohoutte}
            alt="Alien Silohoutte"
            id="Silohoutte"
            className={style2}
          />
          <img
            src={Transformation[presetNum - 1].Aliens[alienNum - 1].Photo}
            alt="Alien Silohoutte"
            id="Silohoutte"
            className={style3}
          />
          <input
            type="image"
            alt="Increment button"
            src={right}
            onClick={incAlien}
            className={style2}
          />
        </div>
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
            src={Timeout}
            alt="Timeout / Reset button"
            className={style3}
            onClick={reverseStyle}
          />
          <input
            type="image"
            src={Ultimatrix}
            alt="Ultimate Toggle"
            className={style4}
          />
        </div>
      </div>
    </>
  );
}

export default App;
