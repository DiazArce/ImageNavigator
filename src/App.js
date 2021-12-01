import StoredImages from "./components/StoredImages";
import React, { useContext } from "react";
import NavigatorImages from "./components/NavigatorImages";
import useRandomImage from "./hook/useRandomImage";
import StoreContext from "./context/images/storeContext";
import { SECONDS_TO_UPDATE_IMAGES } from "./constants";
import "./styles/containers.css";
import "./App.css";

const App = () => {
  const { toggleRandomImage } = useContext(StoreContext);
  const { randomImages } = useRandomImage(SECONDS_TO_UPDATE_IMAGES, toggleRandomImage);

  if (!randomImages) {
    return <h1>loading..</h1>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>IMAGE NAVIGATOR</h1>
      </header>
      <div className="content">
        <NavigatorImages images={randomImages} />
        <StoredImages />
      </div>
    </div>
  );
};
export default App;
