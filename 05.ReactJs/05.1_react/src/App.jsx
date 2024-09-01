import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import ParentComponent from "./Components/props/ParentComponent";
import ItemList from "./Components/Listing/Listing";
import AxiosExample from "./Components/Axios/Axios";

function App() {
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <>
      <Home />
      <div className="App-logo">
        <ParentComponent />
        <ItemList items={items} />
      </div>
      <AxiosExample />
    </>
  );
}

export default App;
