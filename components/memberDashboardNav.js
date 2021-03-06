import React from 'react';
import EventsBar from './navEvents';
export default class MemberDashboard extends React.Component {
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
								<a className="nav-link" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<EventsBar />
							</li>
							<li className="nav-item">
								<a href="/api/logout" className="nav-link">
									Logout
								</a>
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
						<a className="page-scrool" href="/#header-wrap">
							Home
						</a>
					</li>
					<li>
						<EventsBar />
					</li>
					<li>
						<a href="/api/logout" className="page-scroll">
							Logout
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
