import { useEffect, useState } from "react";
import { useSanityClientContext } from "../../context";
import { queryColors, queryHeader, queryFonts, queryFooter } from "./queries";

export const useGetSettings = async () => {
  const { client } = useSanityClientContext();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const { fonts, colors, header, footer } =
        (await client?.fetch(`{
      ${queryHeader},
      ${queryFonts},
      ${queryColors},
      ${queryFooter}
      }
      `)) ?? {};

      setData({ header, footer, settings: { fonts, colors } });
    };

    fetchData();
  }, [client]);

  if (!data) return null;

  return { ...data };
};
