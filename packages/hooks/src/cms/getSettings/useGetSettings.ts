import { useQuery } from '@tanstack/react-query';
import { useSanityClientContext } from '../../context';
import {
  queryColors,
  queryHeader,
  queryFonts,
  queryFooter,
  queryProductKeywords,
  queryProductASINs,
} from './queries';

const fetchSettings = async (client: any) => {
  if (!client) return null;

  const { fonts, colors, header, footer, amazonKeywords, amazonProductASINs } =
    await client.fetch(`{
    ${queryHeader},
    ${queryFonts},
    ${queryColors},
    ${queryFooter},
    ${queryProductKeywords},
    ${queryProductASINs}
  }`);

  return {
    header,
    footer,
    settings: {
      fonts,
      colors,
    },
    amazonKeywords,
    amazonProductASINs,
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
