import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


//import components 
import Header from '../src/components/Header/Header'
import Hero from './components/Hero/Hero'
import Blogs from './components/Blogs/Blogs'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="">

      <Header />

      <BrowserRouter >
        <Routes >
          <Route path="/" exact element={
            <Home

            />
          } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
