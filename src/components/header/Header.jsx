import React from "react";
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <div>
			 {/* <!-- PRELOADER --> */}
    {/* <div class="preloader">
        <div class="lds-ellipsis">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div> */}
    {/* <!-- END PRELOADER --> */}

	{/* <!--====== INFETECH SEARCH PART ENDS ======--> */}

    <div class="search-popup">
        <button class="close-search style-two"><span class="fal fa-times"></span></button>
        <button class="close-search"><span class="fal fa-long-arrow-up"></span></button>
        <form method="post" action="#">
            <div class="form-group">
                <input type="search" name="search-field" value="" placeholder="Search Here" required="" />
                <button type="submit"><i class="fal fa-search"></i></button>
            </div>
        </form>
    </div>

    {/* <!--====== INFETECH SEARCH PART ENDS ======--> */}

	{/* <!--====== OFFCANVAS MENU PART START ======--> */}

<div class="off_canvars_overlay">
			
</div>
<div class="offcanvas_menu">
	<div class="container-fluid">
		<div class="row">
			<div class="col-12">
				<div class="offcanvas_menu_wrapper">
					<div class="canvas_close">
						<a href="javascript:void(0)"><i class="fa fa-times"></i></a>  
					</div>
					<div class="offcanvas-social">
						<ul class="text-center">
							<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fab fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fab fa-instagram"></i></a></li>
							{/* <li><a href="%24.html"><i class="fab fa-instagram"></i></a></li> */}
						</ul>
					</div>
					<div id="menu" class="text-left ">
						<ul class="offcanvas_main_menu">
							<li class="menu-item-has-children active">
								<a href="Home">Home</a>
							</li>
							<li class="menu-item-has-children active">
								<a href="About">About</a>
							</li>
							{/* <li class="menu-item-has-children active">
								<a href="Services">Services</a>
							</li> */}
							<li class="menu-item-has-children active">
								<a href="Projects">Projects</a>
							</li>
							<li class="menu-item-has-children active">
								<a href="Contact">Contact</a>
							</li>
						</ul>
					</div>
					<div class="offcanvas_footer">
						<span><a href="mailto:rediantsparktechnology@gmail.com"><i class="fa fa-envelope-o"></i> rediantsparktechnology@gmail.com</a></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{/* <!--====== OFFCANVAS MENU PART ENDS ======--> */}

{/* <!--====== INFETECH HEADER PART START ======--> */}

    <section class="infetech-header-area header-sticky">
        <div class="header-wrapper">
            <div class="templates-logo">
                <a href="Home"><img src="assets/images/logo-no-background.png" alt="logo" /></a>
            </div>
            <div class="header-box">
                <div class="header-topbar">
                    <div class="row g-0 align-items-center ">
                        <div class="col-lg-6">
                            <div class="header-topbar-text">
                                <p>Welcome to Radiant Spark Technology  </p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="header-topbar-info-wrapper">
                                <div class="header-topbar-info">
                                    <ul>
                                        <li><i class="fas fa-envelope"></i>rediantsparktechnology@gmail.com</li>
                                        {/* <li><i class="fas fa-clock"></i> Mon - Sat: 8.00 am - 7.00 pm</li> */}
                                    </ul>
                                </div>
                                <div class="header-topbar-social">
                                    <ul>
                                        {/* <li><i class="fab fa-twitter"></i></li> */}
                                        <li><i class="fab fa-facebook-f"></i></li>
                                        <li><i class="fab fa-linkedin"></i></li>
                                        <li><i class="fab fa-instagram"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-main-nav">
                    <div class="header-main-nav-box">
                        <ul>
                            <li>
                                <a href="Home">Home</a>
                            </li>
                            <li><a href="About">About</a></li>
                            {/* <li>
                                <a href="Services">Services</a>
                            </li> */}
                            <li>
                                <a href="Projects">Projects</a>
                            </li>
                            <li><a href="Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="header-main-info">
                        <div class="header-mini-btn">
                            <ul>
                                {/* <li><a class="search-box-btn" href="#"><i class="fal fa-search"></i></a></li> */}
                                {/* <li><a href="#"><i class="fal fa-shopping-cart"></i></a></li> */}
                                <li><a class="toggle-bar canvas_open" href="#"><i class="fal fa-bars"></i></a></li>
                            </ul>
                        </div>
                        <div class="header-main-info-contact">
                            <div class="icon">
                                <img src="assets/images/icon/phone.svg" alt="" />
                            </div>
                            <div class="content">
                                <span>Call Anytime</span>
                                <a href="tel:+8898006802">+ 94 (77) 959 7006</a>
                                <a href="tel:+8898006802">+ 94 (76) 867 9313</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!--====== INFETECH HEADER PART ENDS ======--> */}

	

	     
        </div>
    );

}