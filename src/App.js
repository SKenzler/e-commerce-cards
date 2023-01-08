import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cards from './Components/Cards';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/cards' element= {<Cards />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
