import React from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { Crown, Calendar, CreditCard } from 'lucide-react';

interface SubscriptionStatusProps {
  userId: string;
}

const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ userId }) => {
  const { subscription, loading, plan } = useSubscription(userId);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-center">
          <Crown className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-gray-600">No active subscription</span>
        </div>
      </div>
    );
  }

  const isActive = ['active', 'trialing'].includes(subscription.subscription_status);
  const statusColor = isActive ? 'text-emerald-600' : 'text-amber-600';
  const bgColor = isActive ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200';

  return (
    <div className={`rounded-lg p-6 border ${bgColor}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Crown className={`h-5 w-5 mr-2 ${statusColor}`} />
          <span className="font-semibold text-gray-900">
            {plan ? plan.name : 'Subscription'}
          </span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor} bg-white`}>
          {subscription.subscription_status.replace('_', ' ').toUpperCase()}
        </span>
      </div>

      {subscription.current_period_end && (
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>
            {subscription.cancel_at_period_end ? 'Expires' : 'Renews'} on{' '}
            {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
          </span>
        </div>
      )}

      {subscription.cancel_at_period_end && (
        <div className="text-sm text-amber-600 font-medium">
          Subscription will not renew
        </div>
      )}
    </div>
  );
};

export default SubscriptionStatus;