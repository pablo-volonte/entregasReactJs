import "./App.css";
import "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting="Hola, Bienvenido" />
			<ItemCount initial={1} stock={10} />
		</>
	);
}

export default App;
