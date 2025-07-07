import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { stripeProducts } from '../stripe-config';

interface Subscription {
  subscription_status: string;
  price_id: string | null;
  current_period_start: number | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

export const useSubscription = (userId: string | undefined) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchSubscription = async () => {
      try {
        const { data, error } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle();

        if (error) {
          console.error('Error fetching subscription:', error);
          setSubscription(null);
        } else {
          setSubscription(data);
        }
      } catch (err) {
        console.error('Unexpected error fetching subscription:', err);
        setSubscription(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [userId]);

  const getSubscriptionPlan = () => {
    if (!subscription?.price_id) return null;
    
    return stripeProducts.find(product => product.priceId === subscription.price_id);
  };

  return {
    subscription,
    loading,
    plan: getSubscriptionPlan(),
  };
};