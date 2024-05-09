import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

type PageProps = {
  resolvedUrl: string;
};

const Page = ({ resolvedUrl }: PageProps) => {
  return (
    <div>
      <h1>{resolvedUrl ?? "Page"}</h1>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps({
  res,
  params,
  resolvedUrl,
}: GetServerSidePropsContext) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  console.log("Garbz", { params, resolvedUrl });

  //   if (!data) {
  //     return {
  //       redirect: {
  //         destination: "/",
  //         permanent: false,
  //       },
  //     };
  //   }

  // Pass data to the page via props
  return { props: { resolvedUrl, data: { test: 1 } } };
}

export default Page;
