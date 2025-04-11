const AnalyzeButton = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`w-full px-4 py-2 text-white font-medium rounded-md transition-colors ${
        isLoading
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      }`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Analyzing...
        </div>
      ) : (
        'Analyze Search'
      )}
    </button>
  );
};

export default AnalyzeButton;
