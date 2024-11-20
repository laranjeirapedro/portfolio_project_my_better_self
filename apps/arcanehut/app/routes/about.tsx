import type { MetaFunction } from "@remix-run/node";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const meta: MetaFunction = ({ error }: any) => {
  return [
    { title: error ? "Oops!" : "Arcane Hut | About Us" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-5xl m-auto">
      <h1>About us</h1>

      <h2>
        Welcome to <b>Arcane Hut</b>, where innovation meets passion!
      </h2>

      <p>
        At Arcane Hut, we believe in the power of technology to solve business
        challenges and bring dreams to life. We are a team of dedicated
        developers, designers, and problem-solvers, committed to creating
        digital solutions that transform ideas into reality.
      </p>

      <p>
        Our mission is simple: to help businesses thrive in the ever-evolving
        online world. Whether it&apos;s a sleek website, a powerful e-commerce
        platform, reliable hosting, insightful analytics, or cutting-edge mobile
        solutions, we focus on delivering solutions tailored to your needs.
      </p>

      <p>
        What sets us apart is our unwavering passion for development and our
        commitment to understanding your vision. We take pride in working
        closely with you to craft digital experiences that resonate, ensuring
        your success is at the heart of everything we do.
      </p>

      <p>
        At Arcane Hut, your goals are our inspiration. Together, let’s build
        something extraordinary.
      </p>

      <h3>Let’s bring your vision to life!</h3>
    </div>
  );
}
