function NavBar() {
	return (
		<div>
			<header className=" navbar bg-primary">
				<h2 className=" link-light navbar-brand ">
					Tienda Chanchito Feliz
				</h2>
				<ul className="nav">
					<a className="link-light nav-link active">Home</a>
					<a className="link-light nav-link active">Productos</a>
					<a className="link-light nav-link active">Ofertas</a>
					<a className="link-light nav-link active">Carrito</a>
				</ul>
			</header>
		</div>
	);
}

export default NavBar;
