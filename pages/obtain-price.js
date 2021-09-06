import ObtainPriceTable from '@/components/ObtainPriceTable';

const ObtainPrice = () => {
	return (
		<main>
			<h1>Obtener Precio</h1>
			<p>
				Obten el precio final de un producto dependiendo el margen de
				ganancia que deseas.
			</p>

			<ObtainPriceTable />
		</main>
	);
};

export default ObtainPrice;
