import { useEffect, useState } from 'react';

import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { useForm } from '~/hooks/useForm';

const Profit = () => {
  const [result, setResult] = useState({ currency: 0, percent: 0 });
  const [values, handleChange] = useForm({
    sale: 140,
    cost: 100,
  });

  useEffect(() => {
    const { sale, cost } = values;
    const currency = sale - cost;
    const percent = ((sale - cost) / cost) * 100;

    setResult({ currency, percent });
  }, [values]);

  const handleSelectContent = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  return (
    <div className='space-y-6 p-4'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>Conocer ganancia</h1>
        <p className='text-grey-text'>
          Conoce la cantidad y el porcentaje que ganas de un producto.
        </p>
      </div>

      <div className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='sale'>Precio venta</Label>

          <div className='relative'>
            <div className='absolute left-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
              <span>&#36;</span>
            </div>
            <Input
              className='appearance-[textfield] pl-9'
              id='sale'
              placeholder='118'
              type='number'
              value={values.sale}
              onChange={handleChange}
              onFocus={handleSelectContent}
            />
          </div>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='cost'>Precio costo</Label>

          <div className='relative'>
            <div className='absolute right-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
              <span>&#37;</span>
            </div>
            <Input
              className='pr-9'
              id='cost'
              placeholder='30'
              type='number'
              value={values.cost}
              onChange={handleChange}
            />
          </div>
        </div>

        <Separator className='!mt-6' />

        <div className='space-y-2'>
          <Label>Ganancia en pesos</Label>

          <div className='relative'>
            <div className='absolute left-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
              <span>&#36;</span>
            </div>
            <Input
              readOnly
              className='pl-9'
              id='percent'
              placeholder='130'
              type='number'
              value={result.currency.toLocaleString('es-MX', {
                currency: 'MXN',
                maximumFractionDigits: 2,
              })}
            />
          </div>

          <div className='space-y-2'>
            <Label>Ganancia en porcentaje</Label>

            <div className='relative'>
              <Input
                readOnly
                className='pr-9'
                id='percent'
                placeholder='130'
                type='number'
                value={
                  Number.isInteger(result.percent)
                    ? result.percent
                    : result.percent.toFixed(2)
                }
              />
              <div className='absolute right-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
                <span>&#37;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profit;
