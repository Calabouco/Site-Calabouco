import './App.css';
import { Header } from './components/Header/Header.js';
import { Home } from './pages/Home/Home.js';
import { Programacao } from './pages/Programacao/Programacao.js';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  console.log(page);

  return (
    <div className="App">
      <Header setActualPage={setPage} />
      {
        page === 'home' ?
          <Home />
        : page === 'programacao' ?
          <Programacao />
        : null
      }
    </div>
  );
}

export default App;
