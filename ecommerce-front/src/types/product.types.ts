export type TProduct = {
  id: number;
  title: string;
  price: number;
  cat_prefix?: string;
  img: string;
  quantity?: number | undefined;
  max: number;
  isLiked?: boolean;
  isAuthenticated?: boolean
};
