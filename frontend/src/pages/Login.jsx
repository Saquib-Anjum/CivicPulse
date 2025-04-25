import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      // Simply return if the username is empty
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      onLogin({ name: username });
      navigate('/');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-civic-light-bg">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-civic-soft-purple rounded-full flex items-center justify-center mb-4">
              <Lock className="text-civic-purple w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-600 mt-2">
              Enter your username to continue
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-civic-purple focus:border-civic-purple"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-4">
                Note: This is a simulation. Firebase auth will be added later.
              </p>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full btn-primary py-3 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
