import { useEffect, useState } from "react";
import { useSanityClientContext } from "../../context";
import { queryColors, queryHeader, queryFonts } from "./queries";

export const useGetSettings = async () => {
  const { client } = useSanityClientContext();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const { fonts, colors, header } =
        (await client?.fetch(`{
      ${queryHeader},
      ${queryFonts},
      ${queryColors}
      }
      `)) ?? {};

      setData({ header, settings: { fonts, colors } });
    };

    fetchData();
  }, [client]);

  if (!data) return null;

  return { ...data };
};
