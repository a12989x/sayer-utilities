import styles from '@/styles/pages/about.module.scss';

const about = () => {
	return (
		<main className={styles.about}>
			<h1>Acerca de sayer utilities</h1>
			<p>Herramientas </p>
			<p>
				Esta aplicación web se centrará en herramientas que puedan ser
				de ayuda para Sayer una tienda de recubrimientos.
			</p>
			<p>Algunas de las herramientas que se encuentran son:</p>

			<ul className={styles.about__list}>
				<li>
					Conocer ganancia: Conoce la cantidad y el porcentaje que
					ganas de un producto.
				</li>
				<li>
					Obtener ganancia: Obtén la el precio final de un producto
					dependiendo el margen de ganancia que se desee.
				</li>
			</ul>

			<p>
				Se irán agregando más herramientas según las necesidades del
				usuario.
			</p>
		</main>
	);
};

export default about;
