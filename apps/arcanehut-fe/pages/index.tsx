import React from "react";

import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>{`Arcane Hut | Home`}</title>
        <meta property="og:title" content={`Arcane Hut | Home`} key={"Home"} />
      </Head>
      <div>
        <div
          style={{
            maxWidth: 1280,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 101px)",
          }}
        >
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
