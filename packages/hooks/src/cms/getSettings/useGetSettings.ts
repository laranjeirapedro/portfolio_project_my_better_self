import { useEffect, useState } from "react";
import { useSanityClientContext } from "../../context";

export const useGetSettings = async () => {
  const { client } = useSanityClientContext();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const font = await client?.fetch(`*[_type == "fontSettings"]{
        fontHeading,
        fontSubHeading,
        paragraph,
        caption,
        link,
        }[0]`);

      const color = await client?.fetch(`*[_type == "colorSettings"]{
        primaryColor,
        secondaryColor,
        }[0]`);

      setData({ font, color });
    };

    fetchData();
  }, [client]);

  if (!data) return null;

  return { ...data };
};
