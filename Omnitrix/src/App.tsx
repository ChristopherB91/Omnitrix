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
  const [ult, setUlt] = useState("Inactive");
  const [timeout, setTimeout] = useState("Inactive");
  const [presetNum, setPresetNum] = useState(1);
  const [alienNum, setAlienNum] = useState(1);

  const Alien = [Transformation[presetNum - 1].Aliens[alienNum - 1]];

  const changeStyle = () => {
    setStyle("Inactive");
    setStyle2("Active");
    setTimeout("Active");
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
    setTimeout("Inactive");
    setUlt("Inactive");
    setAlienNum(1);
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
      setAlienNum(alienNum + 1);
    } else {
      setAlienNum(1);
    }
  };

  const decAlien = () => {
    if (alienNum > 1) {
      setAlienNum(alienNum - 1);
    } else {
      setAlienNum(10);
    }
  };

  const Ultimate = () => {
    setUlt("Active");
    setStyle3("Inactive");
    setStyle4("Inactive");
  };

  return (
    <>
      <h1>Omnitrix app</h1>
      <div id="omnitrixWatch">
        <p className={style}>You have selected preset {presetNum}</p>
        <p className={style2}>
          Alien number {alienNum} a(n) {Alien[0].Name} also know as{" "}
          {Alien[0].Nickname}
        </p>
        <input
          type="image"
          src={Ultimatrix}
          alt="Ultimate Toggle"
          id="Ult"
          className={style4}
          onClick={Ultimate}
        />
        <br className={style4} />
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
            src={Alien[0].Silohoutte}
            alt="Alien Silohoutte"
            id="Silohoutte"
            className={style2}
          />
          <img
            src={Alien[0].Photo}
            alt="Alien Picture"
            id="Pic"
            className={style3}
          />
          <img
            src={Alien[0].Ult}
            alt="Ultimate Alien"
            id="Pic"
            className={ult}
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
            className={timeout}
            onClick={reverseStyle}
          />
        </div>
      </div>
    </>
  );
}

export default App;
