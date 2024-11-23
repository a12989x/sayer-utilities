import { useEffect, useState } from 'react';

import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { useForm } from '~/hooks/useForm';

const Price = () => {
  const [result, setResult] = useState(0);
  const [values, handleChange] = useForm({
    price: 100,
    percent: 40,
  });

  useEffect(() => {
    const { price, percent } = values;
    const result = price * (percent / 100) + price;
    setResult(result);
  }, [values]);

  const handleSelectContent = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  return (
    <div className='space-y-6 p-4'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>Obtener precio</h1>
        <p className='text-grey-text'>
          Obten el precio final de un producto dependiendo del margen de
          ganancia que deseas.
        </p>
      </div>

      <div className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='price'>Precio</Label>

          <div className='relative'>
            <div className='absolute left-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
              <span>&#36;</span>
            </div>
            <Input
              className='appearance-[textfield] pl-9'
              id='price'
              placeholder='118'
              type='number'
              value={values.price}
              onChange={handleChange}
              onFocus={handleSelectContent}
            />
          </div>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='percent'>Margen de ganancia</Label>

          <div className='relative'>
            <div className='absolute right-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
              <span>&#37;</span>
            </div>
            <Input
              className='pr-9'
              id='percent'
              placeholder='30'
              type='number'
              value={values.percent}
              onChange={handleChange}
            />
          </div>
        </div>

        <Separator className='!mt-6' />

        <div className='space-y-2'>
          <Label>Resultado</Label>

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
              value={result}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
