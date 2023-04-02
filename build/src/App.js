// import Style from './style';

import './App.css';

const font = {
  color: 'black',
  fontFamily: 'Lexend Deca'
}

const banner = {
  fontSize: '120px'
}

const out = {
  color: "#2222FF",
  fontSize: '120px'
}

const NP = {
  padding: "25px 50px 75px 100px"
}

function App() {
  return (
    <div style={font}>
      <h1 style={banner}>
      CUT THE SHIT <span style={out}>OUT</span>
      </h1>
      <h2 style={NP}>
      NotesProject.org
      </h2>
    </div>
   
  );
}

export default App;
