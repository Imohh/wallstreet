import Link from "next/link";

import CartSummary from "./CartSummary";

import LogoSVG from "../svg/logo.svg";
import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const element = <FontAwesomeIcon icon={faCoffee} />
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

      <nav className="navbar">
        <div class="container-fluid">
          {/*<a class="navbar-brand">Navbar</a>*/}
          <Link href="/">
            <a title="Return to ChopChop" class="navbar-brand">
              {/*<Logo className="w-full" />*/}
              <img src={"wd-logo-2.png"} width={100} height={100} alt="logo"/>
            </a>
          </Link>

          {/*<div className="py-3 lg:py-5 flex items-center">
            <Link href="/">
              <a title="Return to ChopChop">Shop</a>
            </Link>
            <span className="pr-1">,</span>
            hey there*/}
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <CartSummary />
          {/*</div>*/}
        </div>

        <ul className="navigation">
          <li><Link href={`/about`}><a>About</a></Link></li>
          <li><Link href={`/about`}><a>About</a></Link></li>
          <li><Link href={`/about`}><a>About</a></Link></li>
          <li><Link href={`/about`}><a>About</a></Link></li>
        </ul>



      </nav>
    </>
    
  );
}

export default Header;
