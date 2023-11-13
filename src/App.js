import './App.css';
import BasicLayout from './pages/layout/basicLayout/BasicLayout';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
       <BasicLayout/>
    </Routes>
  );
}

export default App;
