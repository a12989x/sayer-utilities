import { DollarSignIcon, PercentIcon, SwatchBookIcon } from 'lucide-react';

export const tools = [
  {
    icon: SwatchBookIcon,
    url: '/palette',
    title: 'Sayer Palette',
    description: 'Conoce la formula de un color en el abanico de colores.',
  },
  {
    icon: DollarSignIcon,
    url: '/price',
    title: 'Precio',
    description:
      'Obten el precio final de un producto dependiendo del margen de ganancia.',
  },
  {
    icon: PercentIcon,
    url: '/profit',
    title: 'Ganancia',
    description: 'Conoce la cantidad y el porcentaje que ganas en un producto.',
  },
];
