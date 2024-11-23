import { Link } from '@remix-run/react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { tools } from '~/config/tools';

const Home = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col gap-4'>
        {tools.map((tool) => (
          <Link key={tool.title} to={tool.url}>
            <Card>
              <CardHeader>
                <div className='mb-2 w-fit rounded-md border p-2'>
                  <tool.icon className='size-4' />
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
