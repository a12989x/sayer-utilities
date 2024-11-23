import type { ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import {
  GalleryHorizontalEndIcon,
  HashIcon,
  LoaderCircleIcon,
  RulerIcon,
} from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { brands } from '~/config/brands';
import { sizes } from '~/config/sizes';
import { getColorData } from '~/helpers/getColorData';

export const action = async ({ request }: ActionFunctionArgs) => {
  const values = await request.formData();
  const code = values.get('code');
  const brand = values.get('brand');
  const size = values.get('size');

  const result = await getColorData({
    code: code as string,
    brand: brand as string,
    size: size as string,
  });

  return Response.json({ result });
};

const Palette = () => {
  const actionData = useActionData<{
    result: { tint: string; Oz: number; '1/64': number; '1/128': number }[];
  }>();
  const { state } = useNavigation();
  const isLoading = state === 'submitting' || state === 'loading';

  return (
    <div className='space-y-6 p-4'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>Sayer Palette</h1>
        <p className='text-grey-text'>
          Conoce la formula de un color en el abanico de colores.
        </p>
      </div>

      <Form className='space-y-4' method='post'>
        <div className='space-y-2'>
          <Label htmlFor='code'>Codigo</Label>
          <div className='relative'>
            <div className='absolute left-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
              <HashIcon className='size-4' />
            </div>
            <Input
              className='pl-9'
              id='code'
              name='code'
              placeholder='00NN 00/000'
              type='text'
            />
          </div>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='brand'>Base</Label>
          <Select name='brand'>
            <SelectTrigger className='relative [&_span]:pl-6' id='brand'>
              <div className='absolute left-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
                <GalleryHorizontalEndIcon className='size-4' />
              </div>
              <SelectValue placeholder='Selecciona una base' />
            </SelectTrigger>

            <SelectContent position='popper'>
              {brands.map((brand) => (
                <SelectItem key={brand.value} value={brand.value}>
                  {brand.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='size'>Tamaño</Label>
          <Select name='size'>
            <SelectTrigger className='relative [&_span]:pl-6' id='size'>
              <div className='absolute left-0 top-0 flex size-9 select-none items-center justify-center text-grey-placeholder-text'>
                <RulerIcon className='size-4' />
              </div>
              <SelectValue placeholder='Selecciona un tamaño' />
            </SelectTrigger>

            <SelectContent position='popper'>
              {sizes.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className='w-full' disabled={isLoading} type='submit'>
          {isLoading && <LoaderCircleIcon className='animate-spin' />}
          Generar
        </Button>
      </Form>

      {actionData?.result && actionData.result.length > 0 && (
        <div className='space-y-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tint</TableHead>
                <TableHead>Oz</TableHead>
                <TableHead>1/64</TableHead>
                <TableHead>1/128</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {actionData.result.map((color) => (
                <TableRow key={color.tint}>
                  <TableCell className='font-medium'>{color.tint}</TableCell>
                  <TableCell>
                    <span className='font-medium'>{color.Oz}</span>{' '}
                    <span className='text-xs text-grey-text'>Oz</span>
                  </TableCell>
                  <TableCell>
                    <span className='font-medium'>{color['1/64']}</span>{' '}
                    <span className='text-xs text-grey-text'>1/64</span>
                  </TableCell>
                  <TableCell>
                    <span className='font-medium'>{color['1/128']}</span>{' '}
                    <span className='text-xs text-grey-text'>1/128</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Palette;
