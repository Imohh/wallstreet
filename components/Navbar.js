import Link from "next/link";
import LogoSVG from "../svg/logo.svg";
import CartSummary from "./CartSummary";
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function Navbar() {
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
		</>
	)
}


export default Navbar