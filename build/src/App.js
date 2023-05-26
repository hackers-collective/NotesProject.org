import React from 'react';
import './App.css';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f5f5f5'
};

const bannerStyle = {
  fontFamily: 'Lexend Deca',
  fontSize: '120px',
  color: 'black',
  marginBottom: '20px'
};

const subTitleStyle = {
  fontSize: '36px',
  color: '#555555',
  marginBottom: '40px'
};

function App() {
  return (
    <div style={containerStyle}>
      <h1 style={bannerStyle}>
        CUT THE SHIT <span style={{ color: '#2222FF' }}>OUT</span>
      </h1>
      <h2 style={subTitleStyle}>
        NotesProject.org, Engineered by HC
      </h2>
    </div>
  );
}

export default App;
