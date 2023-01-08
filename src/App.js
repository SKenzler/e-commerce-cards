import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Card from './Components/Card';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/card' element= {
            <Card stockStats= {0}
                   img="nike-blazer.png"
                   header="Nike Zoom BlazeThr"
                   desription="Esse ad excepteur quis exercitation
                   enim aliquip veniam est tempor fugiat dolore
                   voluptate."
                   price= {240}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
