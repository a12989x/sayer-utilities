import ObtainPriceTable from '@/components/ObtainPriceTable';

const ObtainPrice = () => {
	return (
		<main>
			<h1>Obtener Precio</h1>
			<p>
				Obten el precio final de un producto dependiendo el margen de
				ganancia que deseas.
			</p>

			<h2>Como Funciona:</h2>
			<p>Se deberán de ingresar dos valores:</p>

			<ul>
				<li>
					Costo inicial del producto. (
					<label htmlFor='cost'>Costo</label>)
				</li>
				<li>
					Margen de ganancia en porcentaje. (
					<label htmlFor='percent'>Porcentaje</label>)
				</li>
			</ul>

			<p>A la derecha se mostrara el resultado:</p>

			<ul>
				<li>Precio fonal del producto.</li>
			</ul>

			<ObtainPriceTable />
		</main>
	);
};

export default ObtainPrice;
