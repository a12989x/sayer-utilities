import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import './tailwind.css';

import { MobileMenu } from './components/MobileMenu';

export const meta: MetaFunction = () => {
  return [
    { title: 'Sayer' },
    { name: 'description', content: 'Herramientas para Sayer - La Via' },
    { name: 'canonical', content: 'https://sayer-utilities.vercel.app/' },
    { name: 'og:title', content: 'Sayer' },
    { name: 'og:description', content: 'Herramientas para Sayer - La Via' },
    { name: 'og:url', content: 'https://sayer-utilities.vercel.app/' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@codingcodax' },
    { name: 'twitter:title', content: 'Sayer' },
    {
      name: 'twitter:description',
      content: 'Herramientas para Sayer - La Via',
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <MobileMenu />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
