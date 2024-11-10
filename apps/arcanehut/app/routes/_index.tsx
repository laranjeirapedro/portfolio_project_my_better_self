import type { MetaFunction } from "@remix-run/node";
import { FeatureSection, Hero, Newsletter, StackCarousel } from "../components";

export const meta: MetaFunction = () => {
  return [
    { title: "Arcane Hut" },
    {
      name: "description",
      content:
        "A software development company focused on e-commerce, web and mobile applications, and consulting",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-300">
      <Hero />
      <FeatureSection />
      <Newsletter />
      <StackCarousel />
    </div>
  );
}
