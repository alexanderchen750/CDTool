// ModelOutputs.jsx
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/dashboard.css'; // Import the CSS file

const ModelOutputs = ({ outputValue }) => {
  const textareaRef = useRef(null); // Ref to access the <textarea> element

  // Adjust the height of the <textarea> based on its content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to auto
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [outputValue]); // Re-run effect when outputValue changes

  return (
    <div className="tile">
      <h3>Output</h3>
      <textarea
        ref={textareaRef} // Attach the ref
        className="outputBox"
        placeholder="Output will appear here"
        value={outputValue}
        readOnly // Make the textarea read-only
        style={{ minHeight: '40px' }} // Set a minimum height
      />
    </div>
  );
};

ModelOutputs.propTypes = {
  outputValue: PropTypes.string, // Output value passed from the parent
};

export default ModelOutputs;