//Styles
import './App.css';

//Componets
import Menu from './components/Menu';
import NossaHistoria from './components/NossaHistoria';
import Capa from './components/Capa';
import Date from './components/Cronometro';
import Confirm from './components/Confirm';
import Local from './components/Local';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Menu />
      <Capa />
      <NossaHistoria />
      <Date />
      <Confirm />
      <Local />
      <Footer />
    </div>
  );
}

export default App;
