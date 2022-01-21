import Link from "next/link";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";
import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const element = <FontAwesomeIcon icon={faShoppingBag} />
  return (
    
    <>
      {/*<nav className="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand">Navbar</a>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
                <CartSummary />
              </form>
            </div>
        </nav>*/}

      


      <header id="header">
        <img src="https://res.cloudinary.com/ahmedagadir/image/upload/v1530726627/product-landing-page/logo.jpg" alt="OnePlus logo" id="header-img" />
        <h1>OnePlus 6</h1>
        <div className="user-details">
          <span><i className="fa fa-user"></i></span>
          <span><i className="fa fa-shopping-bag"></i></span>
          <span>🇬🇧</span>
        </div>
        <nav id="nav-bar">
          <ul>
            <li><a className="nav-link" href="#speed">speed</a></li>
            <li><a className="nav-link" href="#display">display</a></li>
            <li><a className="nav-link" href="#camera">camera</a></li>
            <FontAwesomeIcon icon={faShoppingBag} />
          </ul>
          
        </nav>
      </header>

    </>
    
  );
}

export default Header;
