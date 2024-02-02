import "../scss/App.scss";
import countries from "../services/data.json";
import ListCountries from "./ListCountries";
import Header from "./Header";

function App() {

  return <>
  <Header/>
  <ListCountries data={countries}/>
  </>
}

export default App
