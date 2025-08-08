import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Navigation */}
      <nav className="bg-green-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xl font-bold">GrowIntel</span>
          </div>
          <div className="flex space-x-4">
            <Link to="/login" className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition duration-300">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 rounded-lg bg-white text-green-800 hover:bg-green-100 transition duration-300">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-900 mb-6">
            Revolutionizing Agriculture with <span className="text-green-600">AI Intelligence</span>
          </h1>
          <p className="text-xl text-green-800 max-w-3xl mx-auto mb-10">
            GrowIntel empowers farmers, agents, and customers with cutting-edge technology for smarter agriculture decisions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-lg font-medium">
              Get Started
            </Link>
            <Link to="/login" className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition duration-300 text-lg font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-12">Our Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-green-800">AI-Powered Insights</h3>
              <p className="text-green-700 text-center">
                Get intelligent crop recommendations and disease predictions based on your land and local conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-green-800">Real-Time Weather</h3>
              <p className="text-green-700 text-center">
                Receive hyper-local weather forecasts and climate alerts tailored to your agricultural needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-green-800">Agricultural Marketplace</h3>
              <p className="text-green-700 text-center">
                Buy and sell agricultural products directly with verified farmers and agents in your region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Use GrowIntel?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Farmer */}
            <div className="bg-green-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-center">Farmers</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered crop recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Disease prediction and prevention</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct market access to sell produce</span>
                </li>
              </ul>
            </div>

            {/* Agent */}
            <div className="bg-green-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-center">Agents</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect farmers with buyers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bulk communication tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Market insights and analytics</span>
                </li>
              </ul>
            </div>

            {/* Customer */}
            <div className="bg-green-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-center">Customers</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Source fresh produce directly</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Verify product origin and quality</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support local agriculture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} GrowIntel - Intelligent Agriculture Platform</p>
          <p className="mt-2 text-green-300">Empowering the future of farming with AI and data-driven insights</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;