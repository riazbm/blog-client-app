import './App.css';
import BasicLayout from './pages/layout/basicLayout/BasicLayout';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
     <Route path='/' element = {<BasicLayout/>}>

     </Route>
       
    </Routes>
  );
}

export default App;
