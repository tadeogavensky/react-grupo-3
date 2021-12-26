import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/App.css';
import { SideBar } from './components/SideBar';
import { ContentWrapper } from './components/ContentWrapper';


function App() {
  return (
    <div className="App">
      <SideBar />
      <ContentWrapper />
        
    </div>
  );
}

export default App;