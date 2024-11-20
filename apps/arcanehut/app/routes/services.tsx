import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-5xl m-auto">
      <h1>Services</h1>
    </div>
  );
}
