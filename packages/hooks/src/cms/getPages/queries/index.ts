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

export const amazonProduct = `
_type == 'reference' => @->{
    ...,
    ${image},
}
`;

export const newsletterRef = `
_type == 'newsletterRef' => @->{
    ...,
    ${image},
}
`;
