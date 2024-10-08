/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
			{/* Container wrapper */}
			<div className="container-fluid">
				{/* Toggle button */}
				<button
					data-mdb-collapse-init
					className="navbar-toggler"
					type="button"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i className="fas fa-bars"></i>
				</button>

				{/* Collapsible wrapper */}
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					{/* Navbar brand */}
					<NavLink
						className="navbar-brand mt-2 mt-lg-0"
						to="/">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehbIRdC7RbRGTWVWQQxvHFXKCtBa0W6GjSQ&s"
							alt="Brand Logo"
							style={{ height: "80px" }}
						/>
					</NavLink>

					{/* Navigation Links */}
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								exact
								to="/"
								activeClassName="active">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/about"
								activeClassName="active">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/contact"
								activeClassName="active">
								Contact
							</NavLink>
						</li>
						<li className="nav-item">
							{/* Removed the nav-link class and used a custom button class */}
							<button
								className="btn btn-action"
								onClick={() => alert("Action triggered!")}>
								Action
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
