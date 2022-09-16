import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Cart/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListCotainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { CartContext } from './context/CartContext';


function App() {
  
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/detalles/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
