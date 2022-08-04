import {useContext} from 'react';
import { Fragment } from 'react'
import {UserContext} from '../context/UserContext';
import Navbar from './Navbar';
import Footer from './Footer';


const Home = () => {

    const {user} = useContext(UserContext);
    
    return (
  
        // <div className="home">
        //     <div className="img">🧒🏻</div>
        //     <h1>{user.name}<br/><span>{user.email}</span></h1>
        //     <button onClick={logout} className="logout">Logout</button>
        // </div>   
        // <Navbar/>
        <>
		<div className="super_container">
        <Navbar/>

        <div className="main_slider" >
              <div className="container fill_hight">
                <div className="row align-items-center fill_hight">
                  <div className="col">
                    <div className="main_slider_content">
                      <h6>Spring / Summer Collection 2021</h6>
                      <h1>Get Up to 30% Off New Arrivals</h1>
                      <div className="red_button shop_now_button"><a href="#">Shop Now</a></div>	
                    </div>
                  </div>	
                </div>
              </div>
            </div>

            {/* Deal of the week */}
		<div className="deal_ofthe_week">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="deal_ofthe_week_img">
							<img src="assets/images/deal_ofthe_week.png" alt=""/>
						</div>
					</div>	
					<div className="col-lg-6 text-right deal_ofthe_week_col">
						<div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
							<div className="section_title">
								<h2>Deal Of The Week</h2>
							</div>
							<ul className="timer">
								<li className="d-inline-flex flex-column justify-content-center align-items-center">
									<div id="day" className="timer_num">03</div>
									<div className="timer_unit">Day</div>	
								</li>
								<li className="d-inline-flex flex-column justify-content-center align-items-center">
									<div id="hour" className="timer_num">15</div>
									<div className="timer_unit">Hours</div>	
								</li>
								<li className="d-inline-flex flex-column justify-content-center align-items-center">
									<div id="minute" className="timer_num">45</div>
									<div className="timer_unit">Mins</div>	
								</li>
								<li className="d-inline-flex flex-column justify-content-center align-items-center">
									<div id="second" className="timer_num">23</div>
									<div className="timer_unit">Sec</div>	
								</li>
							</ul>
							<div className="red_button deal_ofthe_week_button"><a href="#">Show Now</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>

            {user &&
            <>
            {/* list foto */}
            {/* <section className="categories">
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 p-0">
            <div className="categories__item categories__large__item set-bg" data-setbg="assets/img/categories/category-1.jpg">
            <div className="categories__text">
            <h1>Women’s fashion</h1>
            <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
            edolore magna aliquapendisse ultrices gravida.</p>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            <div className="col-lg-6">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="categories__item set-bg" data-setbg="assets/img/categories/category-2.jpg">
            <div className="categories__text">
            <h4>Men’s fashion</h4>
            <p>358 items</p>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="categories__item set-bg" data-setbg="assets/img/categories/category-3.jpg">
            <div className="categories__text">
            <h4>Kid’s fashion</h4>
            <p>273 items</p>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="categories__item set-bg" data-setbg="assets/img/categories/category-4.jpg">
            <div className="categories__text">
            <h4>Cosmetics</h4>
            <p>159 items</p>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className="categories__item set-bg" data-setbg="assets/img/categories/category-5.jpg">
            <div className="categories__text">
            <h4>Accessories</h4>
            <p>792 items</p>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section> */}
            
 
    {/* <!-- Best Seller --> */}
		<div className="best_sellers">
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<div className="section_title new_arrivals_title">
							<h2>Best Sellers</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="product_slider_container">
							<div className="owl-carousel owl-theme product_slider">
								{/* <!-- Slider 1 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item men">
										<div className="product discount product_filter">
											<div className="product_image">
												<img src="assets/images/product_1.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>
											<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
												<span>-Rp 200</span>
											</div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 2 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item men">
										<div className="product product_filter">
											<div className="product_image">
												<img src="assets/images/product_2.png" alt=""/>
											</div>
											<div className="favorite"></div>
											<div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
												<span>New</span>
											</div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 3 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item women">
										<div className="product product_filter">
											<div className="product_image">
												<img src="assets/images/product_3.png" alt=""/>
											</div>
											<div className="favorite"></div>
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000</div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 4 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item accessories">
										<div className="product product_filter">
											<div className="product_image">
												<img src="assets/images/product_4.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>
											<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
												<span>Sales</span>
											</div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000</div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>	
								</div>
								{/* <!-- Slider 5 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item women men">
										<div className="product product_filter">
											<div className="product_image">
												<img src="assets/images/product_5.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 6 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item accessories">
										<div className="product discount product_filter">
											<div className="product_image">
												<img src="assets/images/product_6.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>
											<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
												<span>-Rp 200</span>
											</div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 7 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item women">
										<div className="product discount product_filter">
											<div className="product_image">
												<img src="assets/images/product_7.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>
											<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
												<span>-Rp 200</span>
											</div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 8 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item women">
										<div className="product discount product_filter">
											<div className="product_image">
												<img src="assets/images/product_8.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>
											<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
												<span>-Rp 200</span>
											</div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 9 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item men">
										<div className="product discount product_filter">
											<div className="product_image">
												<img src="assets/images/product_9.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>
											<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
												<span>-Rp 200</span>
											</div>	
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										<div className="red_button add_to_chart_button"><a href="#">add to chart</a></div>
									</div>
								</div>
								{/* <!-- Slider 10 --> */}
								<div className="owl-item product_slider_item">
									<div className="product-item men">
										<div className="product discount product_filter">
											<div className="product_image">
												<img src="assets/images/product_10.png" alt=""/>
											</div>
											<div className="favorite favorite_left"></div>
				
											<div className="product_info">
												<h6 className="product_name"><a href="#">Men's Solid Slim Fit Casual Shirt</a></h6>
												<div className="product_price">Rp 52000<span>Rp 53000</span></div>	
											</div>
										</div>
										
									</div>
								</div>
							</div>
							{/* <!-- slider navigation --> */}
							<div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
								<i className="fa fa-chevron-left" aria-hidden="true"></i>
							</div>
							<div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
								<i className="fa fa-chevron-right" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
            </>
            // END USER
          }
            
            
            {/* <section className="discount">
            <div className="container">
            <div className="row">
            <div className="col-lg-6 p-0">
            <div className="discount__pic">
            <img src="assets/img/hb.jpg" alt="" />
            </div>
            </div>
            <div className="col-lg-6 p-0">
            <div className="discount__text">
            <div className="discount__text__title">
            <span>Discount</span>
            <h2>BIG SALE 2022</h2>
            <h5><span>Sale</span>Up to 50%</h5>
            </div>
            <div className="discount__countdown" id="countdown-time">
            <div className="countdown__item">
            <span>22</span>
            <p>Days</p>
            </div>
            <div className="countdown__item">
            <span>18</span>
            <p>Hour</p>
            </div>
            <div className="countdown__item">
            <span>46</span>
            <p>Min</p>
            </div>
            <div className="countdown__item">
            <span>05</span>
            <p>Sec</p>
            </div>
            </div>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            </div>
            </section> */}
            


			<Footer/>

            <a className="wa-top" href="https://api.whatsapp.com/send?phone=6282291336198" target="_blank"><input className="wa" type="image" src="assets/images/wa.png"/></a>
			</div>
            </>
    )
}

export default Home;
