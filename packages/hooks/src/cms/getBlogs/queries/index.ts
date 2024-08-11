export const image = `
  "image": image{
            ...asset {
                _type == 'reference' => @->{
                    url,
                    originalFilename,
                    "dimensions":metadata{
                        ...dimensions{
                            ...
                        }
                    }
                }
            }
        }
`;
