export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1RiIubPpTWxH4iXThUNDeJhy',
    name: 'woman dress',
    description: 'Elegant and stylish dress for women',
    mode: 'subscription'
  },
  {
    priceId: 'price_1RiIu0PpTWxH4iXT24VlfRVz',
    name: 'woman bag',
    description: 'Premium quality handbag for women',
    mode: 'subscription'
  },
  {
    priceId: 'price_1RiItaPpTWxH4iXTJbos1Bvt',
    name: 'jeans',
    description: 'Comfortable and durable denim jeans',
    mode: 'subscription'
  },
  {
    priceId: 'price_1RiIsaPpTWxH4iXTtROdJE2P',
    name: 'jeans',
    description: 'Classic fit jeans for everyday wear',
    mode: 'subscription'
  }
];