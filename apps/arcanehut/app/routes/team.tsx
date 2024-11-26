import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-5xl m-auto">
      <h1>Our Team</h1>

      <p>
        At <b>Arcane Hut</b>, our strength lies in our people. We are a dynamic
        team of highly skilled professionals, each bringing unique expertise and
        diverse backgrounds to the table. United by a shared passion for solving
        complex problems, we work together to create innovative digital
        solutions tailored to your business needs.
      </p>

      <p>
        With years of experience in web and mobile development, our team thrives
        on turning challenges into opportunities. We combine technical
        excellence with a deep understanding of our clients’ visions, ensuring
        every project is delivered with precision and care.
      </p>

      <p>
        Collaboration is at the heart of everything we do. Whether it’s
        designing an e-commerce platform, building a mobile app, or optimizing
        your online presence, we take pride in working closely with companies to
        help them succeed in today’s fast-paced digital world.
      </p>

      <p>
        At <b>Arcane Hut</b>, our team isn’t just here to develop
        solutions—we’re here to bring your ideas to life and help your business
        thrive. Together, let’s achieve something extraordinary.
      </p>

      <h3>Let’s build the future together!</h3>
    </div>
  );
}
