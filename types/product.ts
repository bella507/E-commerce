export enum PositionDetail {
  TOP_LEFT,
  TOP,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM,
  BOTTOM_RIGHT,
  LEFT,
  RIGHT,
}

export type ProductType = {
  name: string;
  title: string;
  description: string;
  subDescription: string;
  promotionText: string;
  position: PositionDetail;
  originalPrice?: number;
  price: number;
  discountPrice?: number;
  percentDiscount?: number;
  x: number;
  y: number;
};

export type ProductDetailType = {
  title: string;
  image: string;
  productGroupImage: string;
  product: ProductType[];
};
