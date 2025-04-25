import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MetricsDisplay() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/metrics');
        setMetrics(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching metrics:', err);
        setError('Failed to load metrics data');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Evaluation Metrics</h2>
        <div className="flex justify-center py-8">
          <p className="text-gray-500">Loading metrics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Evaluation Metrics</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Evaluation Metrics</h2>
      
      {metrics.totalInteractions === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No interaction data available yet. Use the search feature to generate metrics.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-sm font-medium text-blue-800 mb-1">Total Interactions</h3>
              <p className="text-2xl font-bold text-blue-900">{metrics.totalInteractions}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="text-sm font-medium text-green-800 mb-1">Success Rate</h3>
              <p className="text-2xl font-bold text-green-900">{metrics.successRate.toFixed(1)}%</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="text-sm font-medium text-purple-800 mb-1">Avg. Results</h3>
              <p className="text-2xl font-bold text-purple-900">{metrics.averageResults.toFixed(1)}</p>
            </div>
          </div>
          
          <h3 className="font-medium text-gray-700 mb-3">Recent Interactions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Query</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Results</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {metrics.interactionsWithFeedback.slice(0, 5).map((interaction, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{interaction.query}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {interaction.aiOutput.category} / {interaction.aiOutput.product_type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{interaction.results}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {interaction.success ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Success
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Failed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default MetricsDisplay;
