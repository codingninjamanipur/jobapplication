import './App.css';
import React from 'react';
import Home from './components/Home/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import CreateApost from './components/CreateApost/CreateApost';
import Companies from './components/Companies/Companies'
import Jobs from './components/Jobs/Jobs';
import Resume from './components/Resume/Resume';


function App() {
  return (
    
    <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateApost />} />
        <Route path='/companies' element={<Companies/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/Resume' element={<Resume/>}/>
    

      </Routes>
  
    </BrowserRouter>
    
  </React.StrictMode>
  );
}

export default App;
