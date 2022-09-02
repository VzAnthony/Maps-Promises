import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListCotainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/detalles/:id' element={<ItemDetailContainer />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
