import { NavLink } from '@remix-run/react';
import { clsx } from 'clsx/lite';
import { HomeIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { tools } from '~/config/tools';

export const MobileMenu = () => {
  return (
    <nav className='fixed bottom-0 left-0 right-0 border-t bg-grey-base'>
      <ul className='flex items-center justify-around gap-2 p-2'>
        <li className='flex-1'>
          <Button
            asChild
            className={clsx(
              'h-14 w-full flex-1 flex-col',
              'aria-[current]:bg-primary-solid aria-[current]:text-primary-base',
              'aria-[current]:hover:bg-primary-solid-hover',
            )}
            variant='ghost'
          >
            <NavLink to='/'>
              <HomeIcon className='size-5' />
              <span className='mt-1 text-xs'>Home</span>
            </NavLink>
          </Button>
        </li>

        {tools.map((tool) => (
          <li key={tool.title} className='flex-1'>
            <Button
              asChild
              className={clsx(
                'h-14 w-full flex-1 flex-col',
                'aria-[current]:bg-primary-solid aria-[current]:text-primary-base',
                'aria-[current]:hover:bg-primary-solid-hover',
              )}
              variant='ghost'
            >
              <NavLink to={tool.url}>
                <tool.icon className='size-5' />
                <span className='mt-1 text-xs'>{tool.title}</span>
              </NavLink>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
