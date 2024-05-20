import { createClient } from "@sanity/client";
import { createContext, useContext } from "react";

type SanityClientData = { client: any };

type SanityClientProviderProps = {
  children: React.ReactNode;
};

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
});

const SanityClientContext = createContext<SanityClientData>({ client });

export const SanityClientProvider = ({
  children,
}: SanityClientProviderProps) => {
  return (
    <SanityClientContext.Provider value={{ client }}>
      {children}
    </SanityClientContext.Provider>
  );
};

export const useSanityClientContext = () => {
  return useContext(SanityClientContext);
};
