function NavBar() {
	return (
		<>
			<header className="navbar bg-primary">
				<h2 className="link-light navbar-brand ">
					Tienda Chanchito Feliz
				</h2>
				<ul className="nav">
					<a className="link-light nav-link active">Home</a>
					<a className="link-light nav-link active">Productos</a>
					<a className="link-light nav-link active">Ofertas</a>
				</ul>
			</header>
		</>
	);
}

export default NavBar;
