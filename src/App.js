import {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//import data file
import data from '../src/data/data.json'

//import components 
import Header from '../src/components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  
  const [blogData, setBlogData] = useState(data);

  return (
    <div className="">

      <Header />

      <BrowserRouter >
        <Routes >

          <Route path="/" exact element={
            <Home
            blogData={blogData} 
            />
          } />

        </Routes>
      </BrowserRouter>

      <Footer/>

    </div>
  );
}

export default App;
