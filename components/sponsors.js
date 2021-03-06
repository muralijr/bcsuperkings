import React from 'react';

export default class Sponsors extends React.Component {
	render() {
		return (
			<section id="sponsors" className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title-header text-center">
								<h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
									Sponsors
								</h1>
								<p className="wow fadeInDown" data-wow-delay="0.2s">
									Partnering with us for all our events
								</p>
							</div>
						</div>
					</div>
					<div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
						<div className="col-md-3 col-sm-3 col-xs-12">
							<div className="spnsors-logo">
								<a href="#">
									<img class="img-fluid" src="assets/img/sponsors/hsb.jpg" alt="" />
								</a>
							</div>
							<div className="spnsors-logo">
								<a href="#">
									<img class="img-fluid" src="assets/img/sponsors/Zeecanada.jpeg" alt="" />
								</a>
							</div>
							<div className="spnsors-logo">
								<a href="#">
									<img class="img-fluid" src="assets/img/sponsors/zee.jpeg" alt="" />
								</a>
							</div>
							<div className="spnsors-logo">
								<a href="#">
									<img class="img-fluid" src="assets/img/sponsors/ansul.jpeg" alt="" />
								</a>
							</div>
						</div>
					</div>
					<div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
						<div className="col-12 text-center">
							<a href="https://tinyurl.com/superkingssponsor" className="btn btn-common">
								Become a sponsor
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
