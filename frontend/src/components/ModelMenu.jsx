// ModelMenu.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/dashboard.css'; // Import the CSS file

const ModelMenu = ({ modelOptions, libraryOptions, grammarOptions }) => {
  const [selectedModel, setSelectedModel] = React.useState(modelOptions[0]); // Default to the first model option
  const [selectedLibrary, setSelectedLibrary] = React.useState(libraryOptions[0]); // Default to the first library option
  const [selectedGrammar, setSelectedGrammar] = React.useState(grammarOptions[0]); // Default to the first grammar option
  const [customInput, setCustomInput] = React.useState('');

  return (
    <div className="tile">
      {/* Model Dropdown */}
      <h3>Model</h3>
      <select
        className="dropdown"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        {modelOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Library Dropdown */}
      <h3>Library</h3>
      <select
        className="dropdown"
        value={selectedLibrary}
        onChange={(e) => setSelectedLibrary(e.target.value)}
      >
        {libraryOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Grammar Dropdown */}
      <h3>Grammar</h3>
      <select
        className="dropdown"
        value={selectedGrammar}
        onChange={(e) => setSelectedGrammar(e.target.value)}
      >
        {grammarOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedGrammar === 'Custom' && (
        <textarea
          className="inputPrompt"
          placeholder="Enter your custom grammar"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
        />
      )}
    </div>
  );
};

ModelMenu.propTypes = {
  modelOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  libraryOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  grammarOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModelMenu;