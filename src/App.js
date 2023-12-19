import './App.css';
import { Footer } from './components/Shared/Footer/Footer.js';
import { Header } from './components/Shared/Header/Header.js';
import { Home } from './pages/Home/Home.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
