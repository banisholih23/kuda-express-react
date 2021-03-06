import React, { Component } from 'react';
import { Link } from "react-router-dom";

class tracking extends Component {
  render() {
    return (
      <div>
        {/* <div id="preloader">
          <div id="ctn-preloader" class="ctn-preloader">
            <div class="animation-preloader">
              <div class="spinner"></div>
              <div class="txt-loading">
                <span data-text-preloader="K" class="letters-loading">
                  K
                </span>
                <span data-text-preloader="U" class="letters-loading">
                  U
                </span>
                <span data-text-preloader="D" class="letters-loading">
                  D
                </span>
                <span data-text-preloader="A" class="letters-loading">
                  A
                </span>
                <span data-text-preloader="E" class="letters-loading">
                  E
                </span>
                <span data-text-preloader="X" class="letters-loading">
                  X
                </span>
                <span data-text-preloader="P" class="letters-loading">
                  P
                </span>
                <span data-text-preloader="R" class="letters-loading">
                  R
                </span>
                <span data-text-preloader="E" class="letters-loading">
                  E
                </span>
                <span data-text-preloader="S" class="letters-loading">
                  S
                </span>
                <span data-text-preloader="S" class="letters-loading">
                  S
                </span>
              </div>
            </div>
            <div class="loader">
              <div class="row">
                <div class="col-3 loader-section section-left">
                  <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-left">
                  <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-right">
                  <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-right">
                  <div class="bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <header class="transparent-header s-transparent-header">
          <div class="third-header-top d-none d-lg-block">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-3 col-lg-4">
                  <div class="third-logo">
                    <a href="index.html"><img src="img/logo/upper_logo.png" alt="Logo" /></a>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-8">
                  <div class="third-header-contact">
                    <div class="third-header-form">
                      <form action="#">
                        <input type="text" placeholder="Ketik No. Resi Anda..." />
                        <button><i class="fas fa-search"></i></button>
                      </form>
                    </div>
                    <div class="third-hrader-contact-list">
                      <ul>
                        <li>
                          <div class="thc-icon">
                            <i class="fas fa-headphones"></i>
                          </div>
                          <div class="thc-content">
                            <p><span>Call :</span> +1244 8964 4512</p>
                            <p>info@exemple.com</p>
                          </div>
                        </li>
                        <li>
                          <div class="thc-icon">
                            <i class="fas fa-map-marker"></i>
                          </div>
                          <div class="thc-content">
                            <p>Logistics Avenue</p>
                            <p>New York</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="header-sticky" class="main-header third-main-header">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-3 col-md-6">
                  <div class="logo">
                    <a href="index.html"><img src="img/logo/s_logo.png" class="mobile-logo logo-none" alt="Logo" /></a>
                  </div>
                </div>
                <div class="col-lg-9 col-md-6 d-none d-md-block">
                  <div class="menu-area">
                    <div class="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <Link to={'/'}>
                              Beranda
                            </Link>
                          </li>
                          <li><a href="about-us.html">Tentang Kami</a></li>
                          <li class="active"><a href="tracking.html">Tracking</a></li>
                          <li><a href="#">Halaman</a>
                            <ul class="submenu">
                              <li><a href="#">Layanan</a>
                                <ul class="submenu">
                                  <li><a href="service-air.html">Services Air</a></li>
                                  <li><a href="service-Railway.html">Services Railway</a></li>
                                  <li><a href="service-door-to-door.html">Services Door to Door</a></li>
                                  <li><a href="service-warehouse.html">Services warehouse</a></li>
                                </ul>
                              </li>
                              <li><a href="pricing.html">Pricing Plan</a></li>
                            </ul>
                          </li>
                          <li><a href="#">News &amp; Promo</a>
                            <ul class="submenu">
                              <li><a href="articles.html">News &amp; Blog</a></li>
                              <li><a href="#">Promo</a></li>
                            </ul>
                          </li>
                          <li><a href="support.html">Support</a></li>
                        </ul>
                      </nav>
                    </div>
                    <div class="header-search t-header-search">
                      <a href="#" data-toggle="modal" data-target="#search-modal"><i class="flaticon-magnifying-glass"></i></a>
                    </div>
                    <div class="header-btn">
                      <a href="#" class="btn" data-toggle="modal" data-target="#exampleModalLong"><img src="img/icon/calculator-symbols.png" alt="icon" />Feature</a>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mobile-menu"></div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button><i class="fa fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>

            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content fare-rate-modal">
                  <ul class="nav nav-tabs setup-panel">
                    <li class="nav-item single-steps">
                      <a class="nav-link btn-amber" href="#step-1">Select Your Destination</a>
                    </li>
                    <li class="nav-item single-steps">
                      <a class="nav-link btn-blue-grey" href="#step-2">ITEMS TO BE SHIPPED</a>
                    </li>
                    <li class="nav-item single-steps">
                      <a class="nav-link btn-blue-grey" href="#step-3">Lacak Pengiriman</a>
                    </li>
                  </ul>
                  <form action="#" method="post">
                    <div class="single-setup" id="step-1">
                      <div class="fare-rate-tab-content">
                        <div class="modal-shipping-info">
                          <ul>
                            <li>
                              <div class="shipping-step-count">
                                <h5>A</h5>
                              </div>
                              <div class="shipping-address-form">
                                <div class="shipping-country-box form-group">
                                  <label for="from-country">from country</label>
                                  <input type="text" required="required" id="from-country"
                                    placeholder="Select Your Destination" />
                                </div>
                                <div class="shipping-address-box form-group">
                                  <label for="from-country-location">add your location</label>
                                  <input type="text" required="required" id="from-country-location"
                                    placeholder="Select Your Destination" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="shipping-step-count">
                                <h5>B</h5>
                              </div>
                              <div class="shipping-address-form">
                                <div class="shipping-country-box form-group">
                                  <label for="to-country">TO country</label>
                                  <input type="text" required="required" id="to-country"
                                    placeholder="Select Your Destination" />
                                </div>
                                <div class="shipping-address-box form-group">
                                  <label for="to-country-location">add your location</label>
                                  <input type="text" required="required" id="to-country-location"
                                    placeholder="Select Your Destination" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="modal-shipping-more-list">
                          <ul>
                            <li><a href="#"><i class="flaticon-credit-card"></i> Don't have an account? No problem
                              Pay by credit card or cash.</a></li>
                            <li><a href="#"><i class="flaticon-sings"></i> Get a quick quote and start shipping</a>
                            </li>
                            <li><a href="#"><i class="flaticon-track"></i> Consult your packaging and delivery
                              options</a></li>
                          </ul>
                        </div>
                        <button class="btn f-right nextBtn-2 btn-success" type="button">one more step</button>
                      </div>
                    </div>
                    <div class="single-setup" id="step-2">
                      <div class="fare-rate-tab-content">
                        <div class="modal-shipping-details">
                          <div class="modal-shipping-title">
                            <h2>items <span>details</span></h2>
                            <h2 class="f-right">total cost : <span>$ 19.00</span></h2>
                          </div>
                          <div class="shipping-details-info">
                            <div class="single-shipping-details-box">
                              <label for="packaging-size">packaging size</label>
                              <select class="custom-select" id="packaging-size">
                                <option selected="">Standart Size ( 42??? x 36??? )</option>
                                <option>Standart Size ( 82??? x 86??? )</option>
                                <option>Standart Size ( 102??? x 165??? )</option>
                                <option>Standart Size ( 110??? x 205??? )</option>
                                <option>Standart Size ( 120??? x 250??? )</option>
                              </select>
                            </div>
                            <div class="single-shipping-details-box shipping-qty">
                              <label for="QTY-number">QTY</label>
                              <input type="number" value="1" id="QTY-number" required="required" />
                            </div>
                            <div class="single-shipping-details-box shipping-weight">
                              <label for="packaging-weight">TOTAL WEIGHT</label>
                              <select class="custom-select" id="packaging-weight">
                                <option selected="">KG</option>
                                <option>20KG</option>
                                <option>30KG</option>
                                <option>50KG</option>
                                <option>80KG</option>
                                <option>100KG</option>
                              </select>
                            </div>
                            <div class="single-shipping-details-box shipping-transport">
                              <label for="cargo-transport">cargo transport</label>
                              <select class="custom-select" id="cargo-transport">
                                <option selected="">IN</option>
                                <option>1500in</option>
                                <option>2000in</option>
                                <option>2500in</option>
                                <option>3000in</option>
                                <option>3500in</option>
                                <option>4000in</option>
                              </select>
                            </div>
                            <div class="single-shipping-details-box shipping-product">
                              <label for="product-category">product category</label>
                              <select class="custom-select" id="product-category">
                                <option selected="">Glass Product</option>
                                <option>Glass Product</option>
                                <option>Glass Product</option>
                                <option>Glass Product</option>
                                <option>Glass Product</option>
                              </select>
                            </div>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" required="required" class="custom-control-input"
                              id="customControlInline" />
                            <label class="custom-control-label" for="customControlInline">Logistics is generally the
                              detailed organization and implementation of a complex operation. In a general
                              business sense, logistics is the management of the flow of things between the point
                              of origin and the point</label>
                          </div>
                        </div>
                        <button class="btn f-left prevBtn-2 btn-success" type="button">Previous</button>
                        <button class="btn f-right nextBtn-2 btn-success" type="button"><span>$19.00</span>
                          Booking</button>
                      </div>
                    </div>
                    <div class="single-setup" id="step-3">
                      <div class="fare-rate-tab-content">
                        <div class="modal-shipping-details">
                          <div class="modal-shipping-title">
                            <h2>Lacak <span>Pengiriman</span></h2>
                          </div>
                          <div class="f-left pr-20">
                            <div class="shipping-details-info shipping-tracking-info">
                              <div class="modal-tracking-info">
                                <label for="invoice-id">No. Resi Anda</label>
                                <input type="text" id="invoice-id" placeholder="Ketik No. Resi" />
                              </div>
                              <div class="modal-tracking-info">
                                <label>Cari Paket Anda disini</label>
                                <button class="btn nextBtn-2 btn-success">Lacak Paket Anda</button>
                              </div>
                            </div>
                            <div class="tracking-quots-board">
                              <label>your happiness quotes</label>
                              <div class="tracking-quots-board-info">
                                <img src="img/bg/board_bg.jpg" alt="img" />
                                <h5>On Board Your Products. Now Product is
                                  Malaysia Ocean</h5>
                              </div>
                            </div>
                          </div>
                          <div class="tracking-modal-map">
                            <div id="contact-map"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>


          <div class="breadcrumb-area breadcrumb-bg s-breadcrumb-bg">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="breadcrumb-content">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="dots"></li>
                        <li class="breadcrumb-item"><a href="index.html">Beranda</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Tracking</li>
                        <li class="dots2"></li>
                      </ol>
                    </nav>
                    <h2>Cek Tracking Anda</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="category-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="category-list s-category-list">
                    <ul>
                      <li>
                        <a href="#">
                          <div class="category-icon">
                            <i class="flaticon-cruise"></i>
                          </div>
                          <h5>Sea Freight</h5>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="category-icon">
                            <i class="flaticon-air-freight"></i>
                          </div>
                          <h5>Air Freight</h5>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="category-icon">
                            <i class="flaticon-delivery-1"></i>
                          </div>
                          <h5>Insurance</h5>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="category-icon">
                            <i class="flaticon-warehouse"></i>
                          </div>
                          <h5>Warehousing</h5>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="category-icon">
                            <i class="flaticon-package"></i>
                          </div>
                          <h5>Forwarding</h5>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="tracking-area pt-95 pb-115">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10">
                  <div class="tracking-id-info text-center">
                    <p>Cek Paket Anda disini dengan mengisi <a href="#">Nomor Resi.</a></p>
                    <form action="#" class="tracking-id-form">
                      <input type="text" placeholder="No. Resi" />
                      <button class="btn red-btn">Tracking</button>
                    </form>
                    <div class="tracking-list">
                      <ul>
                        <li>
                          <div class="tracking-list-icon">
                            <i class="flaticon-box"></i>
                          </div>
                          <div class="tracking-list-content">
                            <p>Dispatch</p>
                          </div>
                        </li>
                        <li class="active">
                          <div class="tracking-list-icon">
                            <i class="flaticon-warehouse"></i>
                          </div>
                          <div class="tracking-list-content">
                            <p>departed country</p>
                          </div>
                        </li>
                        <li>
                          <div class="tracking-list-icon">
                            <i class="flaticon-placeholder"></i>
                          </div>
                          <div class="tracking-list-content">
                            <p>Destination</p>
                          </div>
                        </li>
                        <li>
                          <div class="tracking-list-icon">
                            <i class="flaticon-audit"></i>
                          </div>
                          <div class="tracking-list-content">
                            <p>Successful</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="tracking-help">
                      <p>MULTIPLE TRACKING NUMBERS | <a href="#">NEED HELP?</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="services-area delivery-bg inner-help-bg pt-110 pb-70">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-10">
                  <div class="s-section-title text-center mb-60">
                    <h2>how we help you</h2>
                    <p>Express delivery is an innovative service is effective logistics solution for the delivery of
                      small cargo. This service
                      is useful for companies various.</p>
                  </div>
                </div>
              </div>
              <div class="services-wrapper">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="s-single-services mb-50">
                      <div class="services-thumb mb-25">
                        <a href="#"><img src="img/images/s_services_img01.jpg" alt="img" /></a>
                      </div>
                      <div class="s-services-content">
                        <h6>Delivery Service</h6>
                        <h3><a href="#">Anywhere Shipping</a></h3>
                        <p>Express delivery is an innovativ service is effective logistics solutio for delivery of
                          small cargo service.</p>
                        <a href="#" class="btn red-btn">LET US HELP</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="s-single-services mb-50">
                      <div class="services-thumb mb-25">
                        <a href="#"><img src="img/images/s_services_img02.jpg" alt="img" /></a>
                      </div>
                      <div class="s-services-content">
                        <h6>Inspiration Service</h6>
                        <h3><a href="#">Get Insights Inspiration</a></h3>
                        <p>Express delivery is an innovativ service is effective logistics solutio for delivery of
                          small cargo service.</p>
                        <a href="#" class="btn red-btn">LET US HELP</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="s-single-services mb-50">
                      <div class="services-thumb mb-25">
                        <a href="#"><img src="img/images/s_services_img03.jpg" alt="img" /></a>
                      </div>
                      <div class="s-services-content">
                        <h6>Discover Locations</h6>
                        <h3><a href="#">Your Freight Deadlines</a></h3>
                        <p>Express delivery is an innovativ service is effective logistics solutio for delivery of
                          small cargo service.</p>
                        <a href="#" class="btn red-btn">LET US HELP</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        <footer>
          <div class="footer-wrap pt-190 pb-40" data-background="img/bg/footer_bg.jpg">
            <div class="container">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="footer-widget mb-50">
                    <div class="footer-logo mb-35">
                      <a href="index.html"><img src="img/logo/logo.png" alt="img" /></a>
                    </div>
                    <div class="footer-text">
                      <p>Kuda Express adalah perusahaan layanan ekspedisi berbasis teknologi melayani pengiriman tanpa ribet.
                      </p>
                    </div>
                    <div class="footer-social">
                      <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="footer-widget mb-50">
                    <div class="fw-title mb-30">
                      <h5>RECENT POSTS</h5>
                    </div>
                    <div class="f-rc-post">
                      <ul>
                        <li>
                          <div class="f-rc-thumb">
                            <a href="#"><img src="img/blog/f_rc_img01.jpg" alt="img" /></a>
                          </div>
                          <div class="f-rc-content">
                            <span>19 Jun, 2019</span>
                            <h5><a href="#">which the syste built and actually</a></h5>
                          </div>
                        </li>
                        <li>
                          <div class="f-rc-thumb">
                            <a href="#"><img src="img/blog/f_rc_img02.jpg" alt="img" /></a>
                          </div>
                          <div class="f-rc-content">
                            <span>19 Jun, 2019</span>
                            <h5><a href="#">which the syste built and actually</a></h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 offset-lg-4 offset-xl-6">
                  <div class="footer-widget mb-50">
                    <div class="fw-title mb-30">
                      <h5>Yuk! Cek lainnya</h5>
                    </div>
                    <div class="fw-link">
                      <ul>
                        <li><a href="about-us.html"><i class="fas fa-caret-right"></i>Tentang Kami</a></li>
                        <li><a href="#"><i class="fas fa-caret-right"></i> Delivery Information</a></li>
                        <li><a href="#"><i class="fas fa-caret-right"></i> Terms &amp; Conditions</a></li>
                        <li><a href="#"><i class="fas fa-caret-right"></i> Kebijakan Privasi</a></li>
                        <li><a href="#"><i class="fas fa-caret-right"></i> Kebijakan Pengembalian</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="footer-widget mb-50">
                    <div class="fw-title mb-30">
                      <h5>Support & Downloads</h5>
                    </div>
                    <div class="f-support-content">
                      <p>Lorem ipsum dolor sit amet, consy eetur adipisc de elit. Quisque act raqum nunc no dolor
                      </p>
                      <a href="#" class="f-download-btn"><img src="img/images/f_download_btn01.png" alt="img" /></a>
                      <a href="#" class="f-download-btn"><img src="img/images/f_download_btn02.png" alt="img" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-wrap">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-7">
                  <div class="copyright-text">
                    <p>Copyright?? <span>KUDA EXPRESS </span> | All Rights Reserved</p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-5">
                  <div class="f-payment-method text-center text-md-right">
                    <img src="img/images/card_img.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default tracking;