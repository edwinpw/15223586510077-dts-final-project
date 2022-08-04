/* This example requires Tailwind CSS v2.0+ */

const Footer = () => {

  return (
    <>
        <div className="benefit">
        <div className="container">
            <div className="row benefit_row">

                <div className="col-lg-3 benefit_col">
                    <div className="benefit_item d-flex flex-row align-items-center">
                        <div className="benefit_icon">
                            <i className="fa fa-truck" aria-hidden="true"></i>
                        </div>
                        <div className="benefit_content">
                            <h6>Free Shipping</h6>
                            <p>Suffered Alteration is Some Form</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 benefit_col">
                    <div className="benefit_item d-flex flex-row align-items-center">
                        <div className="benefit_icon">
                            <i className="fa fa-undo" aria-hidden="true"></i>
                        </div>
                        <div className="benefit_content">
                            <h6>45 Days Returm</h6>
                            <p>Making it look like Readable</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 benefit_col">
                    <div className="benefit_item d-flex flex-row align-items-center">
                        <div className="benefit_icon">
                            <i className="fa fa-money" aria-hidden="true"></i>
                        </div>
                        <div className="benefit_content">
                            <h6>Cash on Delivery</h6>
                            <p>The Internet tend to Repeat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 benefit_col">
                    <div className="benefit_item d-flex flex-row align-items-center">
                        <div className="benefit_icon">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                        <div className="benefit_content">
                            <h6>Opening all week</h6>
                            <p>10:00 - 17:00</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

    <footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="footer_nav_container d-flex flex-sm-row flex-column 
						align-items-center justify-content-lg-start justify-content-center text-center">
							<ul className="footer_nav">
								<li><a href="#">Blog</a></li>
								<li><a href="#">FaQs</a></li>
								<li><a href="#">Contact Us</a></li>

							</ul>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="footer_social d-flex flex-row align-items-center justify-content-lg-end 
						justify-content-center">
							<ul>
								<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
								{/* <!-- <li><a href="#"><i className="fa fa-facbook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-facbook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-facbook" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-facbook" aria-hidden="true"></i></a></li> --> */}
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="footer_nav_container">
							<div className="cr">© Hype Supp 2022</div>
                            <div className="cr">Edwin Prastyan Wiyanto</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    </>

  )
}

export default Footer;

