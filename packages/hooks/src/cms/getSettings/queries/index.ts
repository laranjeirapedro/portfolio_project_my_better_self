// TODO: separate in multiple files

export const queryHeader = `
"header": *[_type == "header"]{
    'logo':
        logo{
            asset{
               _type == 'reference' => @->
            }
    },
    siteName,
    commonLinks,
    authenticatedLinks,
    unauthenticatedLinks,
      }[0]
`;

export const queryFonts = `
"fonts": *[_type == "fontSettings"]{
    fontHeading,
    fontSubHeading,
    paragraph,
    caption,
    link,
    }[0]
`;

export const queryColors = `
"colors": *[_type == "colorSettings"]{
    primaryColor,
    secondaryColor,
    }[0]
`;

export const queryFooter = `
"footer": *[_type == "footer"]{
    'logo':
        logo{
            asset{
               _type == 'reference' => @->
            }
    },
    shortDescription,
    links,
    siteCopyright,
    socialIcons
    }[0]
`;
