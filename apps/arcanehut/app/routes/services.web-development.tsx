import type { MetaFunction } from "@remix-run/node";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const meta: MetaFunction = ({ matches, error, ...props }: any) => {
  return [
    { title: error ? "Oops!" : "Arcane Hut | Web Development" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-5xl m-auto">
      <h1>Web Development</h1>
    </div>
  );
}
