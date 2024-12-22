import { useQuery } from '@tanstack/react-query';
import { useSanityClientContext } from '../../context';
import { queryColors, queryHeader, queryFonts, queryFooter, queryProductKeywords } from './queries';

const fetchSettings = async (client: any) => {
  if (!client) return null;

  const { fonts, colors, header, footer, amazonKeywords } = await client.fetch(`{
    ${queryHeader},
    ${queryFonts},
    ${queryColors},
    ${queryFooter},
    ${queryProductKeywords}
  }`);

  return {
    header,
    footer,
    settings: {
      fonts,
      colors,
    },
    amazonKeywords,
  };
};

export const useGetSettings = () => {
  const { client } = useSanityClientContext();

  return useQuery({
    queryKey: ['settings'],
    queryFn: () => fetchSettings(client),
    enabled: !!client,
  });
};
