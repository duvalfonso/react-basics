import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola dolares! $$$" />
      <ItemCount />
      <Vista />
      <Mensaje />
    </>
  );
}

export default App;
