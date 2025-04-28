const AnalyzeButton = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`search-button ${isLoading ? 'button-loading' : ''}`}
    >
      {isLoading ? 'Analyzing...' : 'Analyze Search'}
    </button>
  );
};

export default AnalyzeButton;
