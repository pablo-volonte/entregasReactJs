import React, { useState } from "react";

const ItemCount = (props) => {
	const [count, setCount] = useState(props.initial);
	function sumar() {
		if (count >= props.stock) {
			alert(`El Stock maximos es ${props.stock}`);
		} else {
			setCount(count + 1);
		}
	}
	function restar() {
		if (count <= 1) {
			alert("Agregar numero positivo");
		} else {
			setCount(count - 1);
		}
	}
	return (
		<div className="container ">
			<div className=" row justify-content-evenly">
				<div className=" App  Card col-3 ">
					<h3 className="titulo">Articulo 1</h3>
					<img
						className="img"
						src="https://picsum.photos/200/300"
						alt="logo"
					/>
					<div className="img ">
						<button
							onClick={restar}
							className="boton btn btn-outline-primary"
						>
							-
						</button>
						<span> {count} </span>
						<button
							onClick={sumar}
							className="boton btn btn-outline-primary"
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
