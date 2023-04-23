import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <header>
      <h1>Fake Store</h1>

      <nav>
        <ul>
          <li>Cocina</li>
          <li>Comedor</li>
          <li>Exterior</li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  );
};

export default Navbar;
