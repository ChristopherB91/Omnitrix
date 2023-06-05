import Watch from "./assets/Omnitrix.svg";
import WatchActive from "./assets/OmnitrixActive.svg";
import Button from "./assets/Button.svg";
import "./App.css";

function App() {
  // function Activation() {
  //   var bttnA = document.querySelector('.Active')
  //   var bttnB = document.querySelector('.Inactive')
  // }

  return (
    <>
      <h1>Omnitrix app</h1>
      <div id="omnitrixWatch">
        <img src={Watch} alt="Omnitrix Watch Portion" className="Inactive" />
        <img src={WatchActive} alt="Omnitrix Watch Active" className="Active" />
        <br />
        <input
          type="image"
          src={Button}
          alt="Omnitrix activation Button"
          id="omniBttn"
        />
      </div>
    </>
  );
}

export default App;
