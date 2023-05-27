import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: 'transparent',
  padding: '20px',
  margin: '0',
};

const headingStyle = {
  fontFamily: 'Lexend Deca',
  fontSize: '36px',
  color: '#555555',
  marginBottom: '20px',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', // Responsive grid columns
  gridGap: '10px',
  maxWidth: '800px', // Limit the maximum width of the grid
  width: '100%', // Ensure the grid takes up the full width of the container
};

const gridItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f1f1f1',
  color: '#333333',
  paddingTop: '100%', // Maintain the square shape of the grid items
  position: 'relative',
  fontFamily: 'Lexend Deca',
  fontSize: '16px', // Adjust font size for better readability on mobile devices
};

const gridItemContentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function Visualizer() {
  const renderMemoryGrid = () => {
    const grids = [];
    for (let i = 0; i < 100; i++) {
      grids.push(
        <div key={i} style={gridItemStyle}>
          <div style={gridItemContentStyle}>{i + 1000}</div>
        </div>
      );
    }
    return grids;
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Memory Visualization</h2>
      <div style={gridContainerStyle}>{renderMemoryGrid()}</div>
    </div>
  );
}

export default Visualizer;
