import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='*' element={<div>404 Not Found!</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
