import "./App.css";
import "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting="Hola, Bienvenido" />
		</>
	);
}

export default App;
