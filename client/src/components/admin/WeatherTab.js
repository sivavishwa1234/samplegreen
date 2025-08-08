import React, { useState, useEffect } from 'react';

const WeatherTab = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('New Delhi'); // Default location
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // In a real app, you would use the OpenWeather API
        // This is a mock implementation for demonstration
        const mockWeatherData = {
          location: location,
          temperature: Math.floor(Math.random() * 15) + 15, // 15-30°C
          humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
          condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 4)],
          windSpeed: (Math.random() * 10).toFixed(1),
          alerts: Math.random() > 0.7 ? ['Heat advisory in effect'] : []
        };
        
        setTimeout(() => {
          setWeatherData(mockWeatherData);
          setLoading(false);
        }, 800); // Simulate network delay
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-green-700">Weather Insights</h2>
        <div className="w-64">
          <select
            value={location}
            onChange={handleLocationChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="New Delhi">New Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Weather */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-medium text-green-800 mb-4">Current Weather in {weatherData.location}</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl font-bold text-gray-800">
                  {weatherData.temperature}°C
                </div>
                <div className="text-gray-600 mt-1">{weatherData.condition}</div>
              </div>
              <div className="text-6xl">
                {weatherData.condition === 'Sunny' && '☀️'}
                {weatherData.condition === 'Partly Cloudy' && '⛅'}
                {weatherData.condition === 'Cloudy' && '☁️'}
                {weatherData.condition === 'Rainy' && '🌧️'}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Humidity</div>
                <div className="text-xl font-semibold">{weatherData.humidity}%</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Wind</div>
                <div className="text-xl font-semibold">{weatherData.windSpeed} km/h</div>
              </div>
            </div>
          </div>

          {/* Weather Alerts */}
          <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
            <h3 className="text-lg font-medium text-green-800 mb-4">Weather Alerts</h3>
            {weatherData.alerts.length > 0 ? (
              <div className="space-y-3">
                {weatherData.alerts.map((alert, index) => (
                  <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{alert}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">No active weather alerts for this location.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Agricultural Recommendations */}
          <div className="bg-white rounded-xl shadow-md p-6 md:col-span-3">
            <h3 className="text-lg font-medium text-green-800 mb-4">Agricultural Recommendations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Based on current weather conditions:</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-blue-700 space-y-1">
                  {weatherData.condition === 'Rainy' && (
                    <>
                      <li>Postpone any planned pesticide applications</li>
                      <li>Check drainage systems in fields</li>
                      <li>Monitor for potential flooding in low-lying areas</li>
                    </>
                  )}
                  {weatherData.condition === 'Sunny' && weatherData.temperature > 25 && (
                    <>
                      <li>Increase irrigation frequency</li>
                      <li>Provide shade for sensitive crops</li>
                      <li>Harvest in early morning to reduce heat stress</li>
                    </>
                  )}
                  {weatherData.condition === 'Cloudy' && (
                    <>
                      <li>Good conditions for transplanting</li>
                      <li>Monitor for fungal diseases in humid conditions</li>
                      <li>Take advantage of cooler temperatures for fieldwork</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800">General seasonal advice:</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-green-700 space-y-1">
                  <li>Prepare soil for upcoming planting season</li>
                  <li>Rotate crops to maintain soil health</li>
                  <li>Monitor for pests and diseases regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherTab;