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
  fontSize: '48px',
  fontWeight: 'bold',
  color: 'black',
  marginBottom: '20px'
};

const subTitleStyle = {
  fontSize: '24px',
  color: '#555555',
  marginBottom: '40px'
};

const NPStyle = {
  fontFamily: 'Arial',
  fontSize: '18px',
  color: '#333333',
  padding: '10px',
  border: '1px solid #dddddd',
  borderRadius: '5px',
  backgroundColor: '#ffffff'
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
      <div style={NPStyle}>
        Welcome to NotesProject.org! This is a platform engineered by HC to help you manage your notes effectively.
      </div>
    </div>
  );
}

export default App;
