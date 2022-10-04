import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
