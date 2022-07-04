function NavBar() {
	return (
		<div>
			<header className="container navbar bg-info">
				<h2 className="navbar-brand ">Tienda Chanchito Feliz</h2>

				<a onClick={console.log("Home")} className="link-success">
					Home
				</a>
				<a onClick={console.log("Productos")} className="link-success">
					Productos
				</a>
				<a onClick={console.log("Ofertas")} className="link-success">
					Ofertas
				</a>
				<a onClick={console.log("Carrito")} className="link-success">
					Carrito
				</a>
			</header>
		</div>
	);
}

export default NavBar;
