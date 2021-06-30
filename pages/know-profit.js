import KnowProfitTable from '@/components/KnowProfitTable';

const check = () => {
	return (
		<main>
			<h1>Conocer ganancia</h1>
			<p>Conoce la cantidad y el porcentaje que ganas de un producto.</p>

			<h2>Como Funciona:</h2>
			<p>Se deberán de ingresar dos valores:</p>

			<ul>
				<li>
					Costo inicial del producto. (
					<label htmlFor='cost'>Costo</label>)
				</li>
				<li>
					Precio final del producto. (
					<label htmlFor='sale'>Venta</label>)
				</li>
			</ul>

			<p>A la derecha se mostrarán los resultados:</p>

			<ul>
				<li>Margen de ganancia en pesos.</li>
				<li>Margen de ganancia en porcentaje.</li>
			</ul>

			<KnowProfitTable />
		</main>
	);
};

export default check;
