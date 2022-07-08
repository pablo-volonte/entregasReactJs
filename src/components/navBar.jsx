import imgLogo from "../assets/img/logo2.png";
import Carwidget from "./CarWidget";

function NavBar() {
	return (
		<>
			<header className="navbar bg-primary container-fluid shadow-xl ">
				<a href="#">
					<img width="50" src={imgLogo} />
				</a>
				<ul className="nav">
					<a href="#" className="link-light nav-link ">
						Home
					</a>
					<a href="#" className="link-light nav-link active">
						Productos
					</a>
					<a href="#" className="link-light nav-link active">
						Ofertas
					</a>
				</ul>
				<Carwidget />
			</header>
		</>
	);
}

export default NavBar;
