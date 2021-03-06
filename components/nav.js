import React from 'react';
import Link from 'next/link';
export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
				<div className="container">
					<div className="navbar-header">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#main-navbar"
							aria-controls="main-navbar"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
							<span className="icon-menu"></span>
							<span className="icon-menu"></span>
							<span className="icon-menu"></span>
						</button>
						<a href="/" className="navbar-brand">
							<img src="assets/img/logof.png" alt="" />
						</a>
					</div>
					<div className="collapse navbar-collapse" id="main-navbar">
						<ul className="navbar-nav mr-auto w-100 justify-content-end">
							<li className="nav-item active">
								<a className="nav-link" href="/#header-wrap">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/#about">
									About
								</a>
							</li>
							<li className="nav-item">
								<Link href="/events" as="/events">
									<a className="nav-link">Events</a>
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/#team">
									Team
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/#faq">
									Faq
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/#sponsors">
									Sponsors
								</a>
							</li>
							<li className="nav-item">
								<Link href="/membership" as="/membership">
									<a className="nav-link">Become a member</a>
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/#contact-map">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>

				<ul className="mobile-menu">
					<li>
						<a href="#header-wrap">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<Link href="/events" as="/events">
							<a className="nav-link">Events</a>
						</Link>
					</li>
					<li>
						<a href="#team">Team</a>
					</li>
					<li>
						<a href="#faq">Faq</a>
					</li>
					<li>
						<a href="#sponsors">Sponsors</a>
					</li>
					<li>
						<Link href="/membership" as="/membership">
							<a className="nav-link">Become a member</a>
						</Link>
					</li>
					<li>
						<a href="#contact-map">Contact</a>
					</li>
				</ul>
			</nav>
		);
	}
}
