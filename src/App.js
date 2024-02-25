import './App.css';
import { Header } from './components/Header/Header.js';
import { Menu } from './components/MenuMobile/MenuMobile.js';
import { Home } from './pages/Home/Home.js';
import { Karaoke } from './pages/Karaoke/Karaoke.js';
import { Programacao } from './pages/Programacao/Programacao.js';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');
  const [openMenuBar, setOpenMenuBar] = useState(false);

  return (
    <div className="App">
      <Header setActualPage={setPage} openMenuBar={openMenuBar} setOpenMenuBar={setOpenMenuBar}/>
      <aside class={ openMenuBar ? 'sidebar open' : 'sidebar'}>
        <nav>
          <Menu setActualPage={setPage} setOpenMenu={setOpenMenuBar}/>
        </nav>
      </aside>

      {
        page === 'home' &&
          <Home />
      }
      {  
        page === 'programacao' &&
          <Programacao />
      }
      {
        page === 'karaoke' &&
        <Karaoke />
      }
    </div>
  );
}

export default App;
