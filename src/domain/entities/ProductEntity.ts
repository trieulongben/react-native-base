export interface ProductEntity {
  id: string;
  imageUrl: string;
  title: string;
  desc: string;
  tags: string[];
  link?: string;
}

export const mockProduct: ProductEntity = {
  id: 'mock_product_001',
  imageUrl: 'https://hairmax.com/images/mock-product.jpg',
  title: 'HairMax LaserBand',
  desc: 'Advanced laser hair growth device for home use',
  tags: ['laser', 'hair growth', 'FDA cleared'],
  link: 'www.google.com',
};
