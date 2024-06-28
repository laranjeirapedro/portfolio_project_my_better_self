import "../src/styles/global.css";
import React from "react";


import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {


  return (
    <React.Fragment>
        <h1>
          Header 
        </h1>
        <Component {...pageProps} />
        <h1>Footer</h1>
    </React.Fragment>
  );
};

export default App;
