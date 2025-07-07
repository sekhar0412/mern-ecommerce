import React, { useState } from 'react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  const handleSuccess = () => {
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="p-6">
            {isLogin ? (
              <LoginForm
                onSuccess={handleSuccess}
                onSwitchToSignup={() => setIsLogin(false)}
              />
            ) : (
              <SignupForm
                onSuccess={handleSuccess}
                onSwitchToLogin={() => setIsLogin(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;