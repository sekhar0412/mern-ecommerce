import React, { useState } from 'react';
import { stripeProducts } from '../stripe-config';
import { createCheckoutSession } from '../services/stripe';
import { Loader2, CreditCard } from 'lucide-react';

interface StripeProductsProps {
  onAuthRequired: () => void;
  isAuthenticated: boolean;
}

const StripeProducts: React.FC<StripeProductsProps> = ({ onAuthRequired, isAuthenticated }) => {
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const handlePurchase = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }

    setLoadingProductId(priceId);

    try {
      const { url } = await createCheckoutSession({
        price_id: priceId,
        success_url: `${window.location.origin}/success`,
        cancel_url: window.location.href,
        mode,
      });

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to start checkout process. Please try again.');
    } finally {
      setLoadingProductId(null);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Premium Products
          </h2>
          <p className="text-lg text-gray-600">
            Subscribe to our premium products and enjoy exclusive benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stripeProducts.map((product) => (
            <div key={product.priceId} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 capitalize">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    {product.mode === 'subscription' ? 'Subscription' : 'One-time'}
                  </span>
                </div>
                <button
                  onClick={() => handlePurchase(product.priceId, product.mode)}
                  disabled={loadingProductId === product.priceId}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {loadingProductId === product.priceId ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4 mr-2" />
                      {product.mode === 'subscription' ? 'Subscribe' : 'Buy Now'}
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StripeProducts;