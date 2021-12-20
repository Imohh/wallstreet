import Link from "next/link";

import CartSummary from "./CartSummary";
import header from '../style/header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'

import LogoSVG from "../svg/logo.svg";

function Header() {
  return (
    
    <>
      <nav className="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <header className="md:absolute md:left-0 md:top-0 w-full z-10">

        <div className="py-3 lg:py-5 flex items-center">
          <Link href="/">
            <a title="Return to ChopChop">Shop</a>
          </Link>
          <span className="pr-1">,</span>
          hey there
          <CartSummary />
        </div>

        <Link href="/">
          <a title="Return to ChopChop">
            <LogoSVG className="w-full" />
          </a>
        </Link>

      </header>
    </>
    
  );
}

export default Header;
