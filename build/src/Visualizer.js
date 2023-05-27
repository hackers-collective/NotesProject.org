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
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridGap: '10px',
  maxWidth: '800px',
  width: '100%',
};

const gridItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f1f1f1',
  color: '#333333',
  height: '80px',
  fontFamily: 'Lexend Deca',
  fontSize: '16px',
};

function Visualizer() {
  const renderMemoryGrid = () => {
    const grids = [];
    for (let i = 0; i < 100; i++) {
      grids.push(
        <div key={i} style={gridItemStyle}>
          {i + 1000}
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
