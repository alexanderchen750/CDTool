// PromptInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/dashboard.css'; // Import the CSS file

const PromptInput = ({ onGenerate }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleGenerate = () => {
    onGenerate(inputValue);
  };

  return (
    <div className="tile">
      <h3>Prompt</h3>
      <textarea
        className='inputPrompt'
        type="text"
        placeholder="Enter your input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};

PromptInput.propTypes = {
  onGenerate: PropTypes.func.isRequired,
};

export default PromptInput;