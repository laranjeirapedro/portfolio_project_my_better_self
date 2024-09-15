import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8361311161311634"
          crossOrigin="anonymous"
        ></script> */}
      </Head>
      <body>
        <Main />
        <NextScript
          ref="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8361311161311634"
          crossOrigin="anonymous"
        />
      </body>
    </Html>
  );
}
