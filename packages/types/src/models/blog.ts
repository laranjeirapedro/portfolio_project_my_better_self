import { AuthorProps } from "./author";

export type BlogProps = {
  title: string;
  author: AuthorProps;
  _createdAt: string;
  postDate?: string;
  blogImage: {
    url: string;
    originalFilename: string;
  };
  shortDescription: string;
  content: object;
  slug: { current: string };
};
