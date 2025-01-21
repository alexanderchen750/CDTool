// OutputStats.jsx
import PropTypes from 'prop-types';
import '../styles/dashboard.css'; // Import the CSS file

const OutputStats = ({ stats }) => {
  return (
    <div className="tile">
      <h3>Output Stats</h3>
      <div className="stats-container">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="stat-item">
            <span className="stat-key">{key}:</span>
            <span className="stat-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

OutputStats.propTypes = {
  stats: PropTypes.object.isRequired, // stats should be an object with key-value pairs
};

export default OutputStats;