import React from 'react';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: 'transparent',
    padding: '20px',
    margin: '0 auto', // Added margin: 0 auto to center the container horizontally
  };  

const headingStyle = {
  fontFamily: 'Lexend Deca',
  fontSize: '36px',
  fontWeight: '600',
  color: '#000022',
  marginBottom: '20px',
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gridGap: '4px', // Added gridGap for spacing between grid items
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto', // Added margin: 0 auto to center the matrix horizontally
    justifyContent: 'center', // Added justifyContent: 'center' to center the matrix vertically
  };
  

const gridItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    color: '#333333',
    height: '80px',
    width: '80px',
    fontFamily: 'Lexend Deca',
    fontSize: '16px',
    margin: '4px', // Added margin for spacing between grid items
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
      <h2 style={headingStyle}>
        Memory <span style={{ color: '#2222FF' }}>Visualization</span>
        </h2>
      <div style={gridContainerStyle}>{renderMemoryGrid()}</div>
    </div>
  );
}

export default Visualizer;
