import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import Membership from '../components/membership';
import Bully from '../components/bully';
import BullyRules from '../components/bullyRules';
import Sponsors from '../components/sponsors';
const Home = () => (
	<div>
		<Head>
			<title>BC Super Kings</title>

			<link rel="icon" href="/favicon.ico" />
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
			<link rel="stylesheet" type="text/css" href="assets/fonts/line-icons.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/slicknav.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/nivo-lightbox.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/main.css" />
			<link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
		</Head>
		<Membership />
		<Bully />
		<BullyRules />
		<Sponsors />
		<Footer />

		<div id="copyright">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="site-info">
							<p>© BC Super Kings 2019 - 2020</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<a href="#" className="back-to-top">
			<i className="lni-chevron-up"></i>
		</a>

		<div id="preloader">
			<div className="sk-circle">
				<div className="sk-circle1 sk-child"></div>
				<div className="sk-circle2 sk-child"></div>
				<div className="sk-circle3 sk-child"></div>
				<div className="sk-circle4 sk-child"></div>
				<div className="sk-circle5 sk-child"></div>
				<div className="sk-circle6 sk-child"></div>
				<div className="sk-circle7 sk-child"></div>
				<div className="sk-circle8 sk-child"></div>
				<div className="sk-circle9 sk-child"></div>
				<div className="sk-circle10 sk-child"></div>
				<div className="sk-circle11 sk-child"></div>
				<div className="sk-circle12 sk-child"></div>
			</div>
		</div>

		<script src="assets/js/jquery-min.js"></script>
		<script src="assets/js/popper.min.js"></script>
		<script src="assets/js/bootstrap.min.js"></script>
		<script src="assets/js/jquery.countdown.min.js"></script>
		<script src="assets/js/jquery.nav.js"></script>
		<script src="assets/js/jquery.easing.min.js"></script>
		<script src="assets/js/wow.js"></script>
		<script src="assets/js/jquery.slicknav.js"></script>
		<script src="assets/js/nivo-lightbox.js"></script>
		<script src="assets/js/main.js"></script>
	</div>
);

export default Home;
