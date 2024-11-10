import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function About() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>About us</h1>
    </div>
  );
}
