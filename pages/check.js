import Check from '@/components/Check';

const check = () => {
	return (
		<main>
			<h1>Conocer ganancia</h1>
			<p>Conoce la cantidad y el porcentaje que ganas de un producto.</p>

			<h2>Como Funciona:</h2>
			<p>
				Se deberán de ingresar dos valores, uno siendo el costo inicial
				del producto (<label htmlFor='cost'>Costo</label>) y el segundo
				valor siendo el precio final (
				<label htmlFor='sale'>Venta</label>).
			</p>
			<p>
				A la derecha se mostrarán los resultados siendo valor el de
				arriba (<label htmlFor='currency'>Pesos</label>) el margen de
				ganancia en pesos y el de abajo (
				<label htmlFor='percentage'>Porcentaje</label>) el margen de
				ganancia representado en porcentaje.
			</p>
			<Check />
		</main>
	);
};

export default check;
