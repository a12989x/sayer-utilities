import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Sayer" },
    { name: "description", content: "Herramientas para Sayer - La Via" },
  ];
};

const Home = () => {
  return (
    <div>
      <p>home page</p>
    </div>
  );
};

export default Home;
