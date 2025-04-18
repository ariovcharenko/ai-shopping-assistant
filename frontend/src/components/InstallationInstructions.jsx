import React from 'react';

function InstallationInstructions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cline Application - Setup Instructions</h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            You're seeing this page because the application requires Node.js to run properly, which is not currently installed on your Mac.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Installation Steps</h2>
        
        <h3 className="text-xl font-medium text-gray-700 mt-6 mb-2">Step 1: Install Homebrew (Package Manager for macOS)</h3>
        <p className="mb-2">Open Terminal and run:</p>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
          /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        </div>
        
        <h3 className="text-xl font-medium text-gray-700 mt-6 mb-2">Step 2: Install Node.js using Homebrew</h3>
        <p className="mb-2">After Homebrew is installed, run:</p>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
          brew install node
        </div>
        
        <h3 className="text-xl font-medium text-gray-700 mt-6 mb-2">Step 3: Run the Application</h3>
        <p className="mb-2">Navigate to the application directory in Terminal and run:</p>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto mb-4">
          ./start-app.sh
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p className="text-yellow-700">
            <strong>Note:</strong> The application requires both the backend server and frontend client to be running. The <code className="bg-yellow-100 px-1 rounded">start-app.sh</code> script will handle starting both components and opening the application in Safari.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Alternative Installation Method</h2>
        <p className="mb-2">If you prefer not to use Homebrew, you can download Node.js directly from the official website:</p>
        <p className="mb-4">
          <a 
            href="https://nodejs.org/en/download/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            https://nodejs.org/en/download/
          </a>
        </p>
        <p className="mb-4">Download and install the macOS installer, then run the <code className="bg-gray-100 px-1 rounded">start-app.sh</code> script as described in Step 3.</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Application Information</h2>
        <p className="mb-2">Once running, the application will be available at:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-1">Frontend: <code className="bg-gray-100 px-1 rounded">http://localhost:3000</code></li>
          <li className="mb-1">Backend: <code className="bg-gray-100 px-1 rounded">http://localhost:5001</code></li>
        </ul>
        
        <p className="mt-6">To stop the application, press <code className="bg-gray-100 px-1 rounded">Ctrl+C</code> in the Terminal window where you started it.</p>
      </div>
    </div>
  );
}

export default InstallationInstructions;
