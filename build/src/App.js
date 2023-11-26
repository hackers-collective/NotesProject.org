import React from 'react';
import './App.css';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: 'transparent',
  padding: '20px',
  margin: '0'
};

const bannerStyle = {
  fontFamily: 'Lexend Deca',
  fontSize: '120px',
  fontWeight: '500',
  color: '#000022',
  marginBottom: '20px',
  textAlign: 'center',
  margin: '0'
};

const subTitleStyle = {
  fontFamily: 'Lexend Deca',
  fontSize: '36px',
  fontWeight: '400',
  color: '#555555',
  marginBottom: '40px',
  textAlign: 'center',
  margin: '0'
};

function NPBrand() {
  return (
    <h1 style={bannerStyle}>
      Notes<span style={{ color: '#2222FF' }}>Project</span>
    </h1>
  );
}

function App() {
  return (
    <div style={containerStyle}>
      <NPBrand />
      <h2 style={subTitleStyle}>
        For Researchers & Engineers
      </h2>
    </div>
  );
}

export default App;
