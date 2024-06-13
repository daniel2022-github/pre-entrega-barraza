import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./containers/itemlistcontainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Este es mi Ecommerce" />
    </div>
  );
}

export default App;
