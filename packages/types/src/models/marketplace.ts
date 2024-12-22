export type Category = {
  title: string;
  slug: {
    current: string;
  };
  description: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  productUrl: string;
  imageUrl: string;
};
