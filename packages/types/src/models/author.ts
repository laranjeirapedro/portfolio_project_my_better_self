export type AuthorProps = {
  fullName: string;
  profilePicture: {
    url: string;
    originalFilename: string;
  };
  socialIcons: {
    url: string;
    icon: {
      name: string;
      provider: string;
      _type: string;
    };
  }[];
};
