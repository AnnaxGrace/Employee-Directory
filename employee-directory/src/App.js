import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import TableContainer from "./components/TableContainer"

//This pulls in the navbar and tablecontainer components to render our page
function App() {
  return (
  <div>
  <NavBar />
 
  <TableContainer />
  
  </div>
  );
}

export default App;
