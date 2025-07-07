import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto-redirect after a delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // Redirect after 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-sm text-emerald-800">
              You will receive a confirmation email shortly with your purchase details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </button>
            <button
              onClick={() => navigate('/account')}
              className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              View Account
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          You will be automatically redirected to the home page in a few seconds.
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;