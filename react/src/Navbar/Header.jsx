import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg';
import './header.css';

const Header = ({count}) => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2 fw-semibold" to="/">Estore.</Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-1 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FilterProducts" target='_blank'>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" target='_blank'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" target='_blank'>Contact us</Link>
            </li>
          </ul>
          <Link to="/AddCart"className="mt-1 me-2 d-flex align-items-center">
            <img src={cart} className="cart" alt="icon" />
            <span className="cart-span ms-4">{count}</span>
          </Link>
          <button className='signup-btn btn btn-primary rounded-full'>SignUp</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
