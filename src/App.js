import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListCotainer/ItemListContainer';

function App() {
  
  return (
    <div className="App">
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
