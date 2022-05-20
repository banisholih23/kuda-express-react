import React, { Component } from 'react';
import Navbar from './component/header/navbar'

class Home extends Component {
  render() {
    return (
      <div>
        {/* <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="K" className="letters-loading">
                  K
                </span>
                <span data-text-preloader="U" className="letters-loading">
                  U
                </span>
                <span data-text-preloader="D" className="letters-loading">
                  D
                </span>
                <span data-text-preloader="A" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
                <span data-text-preloader="X" className="letters-loading">
                  X
                </span>
                <span data-text-preloader="P" className="letters-loading">
                  P
                </span>
                <span data-text-preloader="R" className="letters-loading">
                  R
                </span>
                <span data-text-preloader="E" className="letters-loading">
                  E
                </span>
                <span data-text-preloader="S" className="letters-loading">
                  S
                </span>
                <span data-text-preloader="S" className="letters-loading">
                  S
                </span>
              </div>
            </div>
            <div className="loader">
              <div className="row">
                <div className="col-3 loader-section section-left">
                  <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-left">
                  <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg"></div>
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <header>
          <div id="header-sticky" className="main-header transparent-header">
            <div className="container-fluid header-container-p">
              
              <Navbar />

              <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content fare-rate-modal">
                    <ul className="nav nav-tabs setup-panel">
                      <li className="nav-item single-steps">
                        <a className="nav-link btn-amber" href="#step-1">Select Your Destination</a>
                      </li>
                      <li className="nav-item single-steps">
                        <a className="nav-link btn-blue-grey" href="#step-2">ITEMS TO BE SHIPPED</a>
                      </li>
                      <li className="nav-item single-steps">
                        <a className="nav-link btn-blue-grey" href="#step-3">Lacak Pengiriman</a>
                      </li>
                    </ul>
                    <form action="#" method="post">
                      <div className="single-setup" id="step-1">
                        <div className="fare-rate-tab-content">
                          <div className="modal-shipping-info">
                            <ul>
                              <li>
                                <div className="shipping-step-count">
                                  <h5>A</h5>
                                </div>
                                <div className="shipping-address-form">
                                  <div className="shipping-country-box form-group">
                                    <label htmlFor="from-country">from country</label>
                                    <input type="text" required="required" id="from-country"
                                      placeholder="Select Your Destination" />
                                  </div>
                                  <div className="shipping-address-box form-group">
                                    <label htmlFor="from-country-location">add your location</label>
                                    <input type="text" required="required" id="from-country-location"
                                      placeholder="Select Your Destination" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="shipping-step-count">
                                  <h5>B</h5>
                                </div>
                                <div className="shipping-address-form">
                                  <div className="shipping-country-box form-group">
                                    <label htmlFor="to-country">TO country</label>
                                    <input type="text" required="required" id="to-country"
                                      placeholder="Select Your Destination" />
                                  </div>
                                  <div className="shipping-address-box form-group">
                                    <label htmlFor="to-country-location">add your location</label>
                                    <input type="text" required="required" id="to-country-location"
                                      placeholder="Select Your Destination" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-shipping-more-list">
                            <ul>
                              <li><a href="#"><i className="flaticon-credit-card"></i> Don't have an account? No problem
                                Pay by credit card or cash.</a></li>
                              <li><a href="#"><i className="flaticon-sings"></i> Get a quick quote and start shipping</a>
                              </li>
                              <li><a href="#"><i className="flaticon-track"></i> Consult your packaging and delivery
                                options</a></li>
                            </ul>
                          </div>
                          <button className="btn f-right nextBtn-2 btn-success" type="button">one more step</button>
                        </div>
                      </div> /
                      <div className="single-setup" id="step-2">
                        <div className="fare-rate-tab-content">
                          <div className="modal-shipping-details">
                            <div className="modal-shipping-title">
                              <h2>items <span>details</span></h2>
                              <h2 className="f-right">total cost : <span>$ 19.00</span></h2>
                            </div>
                            <div className="shipping-details-info">
                              <div className="single-shipping-details-box">
                                <label htmlFor="packaging-size">packaging size</label>
                                <select className="custom-select" id="packaging-size">
                                  <option selected="">Standart Size ( 42” x 36” )</option>
                                  <option>Standart Size ( 82” x 86” )</option>
                                  <option>Standart Size ( 102” x 165” )</option>
                                  <option>Standart Size ( 110” x 205” )</option>
                                  <option>Standart Size ( 120” x 250” )</option>
                                </select>
                              </div>
                              <div className="single-shipping-details-box shipping-qty">
                                <label htmlFor="QTY-number">QTY</label>
                                <input type="number" value="1" id="QTY-number" required="required" />
                              </div>
                              <div className="single-shipping-details-box shipping-weight">
                                <label htmlFor="packaging-weight">TOTAL WEIGHT</label>
                                <select className="custom-select" id="packaging-weight">
                                  <option selected="">KG</option>
                                  <option>20KG</option>
                                  <option>30KG</option>
                                  <option>50KG</option>
                                  <option>80KG</option>
                                  <option>100KG</option>
                                </select>
                              </div>
                              <div className="single-shipping-details-box shipping-transport">
                                <label htmlFor="cargo-transport">cargo transport</label>
                                <select className="custom-select" id="cargo-transport">
                                  <option selected="">IN</option>
                                  <option>1500in</option>
                                  <option>2000in</option>
                                  <option>2500in</option>
                                  <option>3000in</option>
                                  <option>3500in</option>
                                  <option>4000in</option>
                                </select>
                              </div>
                              <div className="single-shipping-details-box shipping-product">
                                <label htmlFor="product-category">product category</label>
                                <select className="custom-select" id="product-category">
                                  <option selected="">Glass Product</option>
                                  <option>Glass Product</option>
                                  <option>Glass Product</option>
                                  <option>Glass Product</option>
                                  <option>Glass Product</option>
                                </select>
                              </div>
                            </div>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" required="required" className="custom-control-input"
                                id="customControlInline" />
                              <label className="custom-control-label" htmlFor="customControlInline">Logistics is generally the
                                detailed organization and implementation of a complex operation. In a general
                                business sense, logistics is the management of the flow of things between the point
                                of origin and the point</label>
                            </div>
                          </div>
                          <button className="btn f-left prevBtn-2 btn-success" type="button">Previous</button>
                          <button className="btn f-right nextBtn-2 btn-success" type="button"><span>$19.00</span>
                            Booking</button>
                        </div>
                      </div>
                      <div className="single-setup" id="step-3">
                        <div className="fare-rate-tab-content">
                          <div className="modal-shipping-details">
                            <div className="modal-shipping-title">
                              <h2>Lacak <span>Pengiriman</span></h2>
                            </div>
                            <div className="f-left pr-20">
                              <div className="shipping-details-info shipping-tracking-info">
                                <div className="modal-tracking-info">
                                  <label htmlFor="invoice-id">No. Resi Anda</label>
                                  <input type="text" id="invoice-id" placeholder="Ketik No. Resi" />
                                </div>
                                <div className="modal-tracking-info">
                                  <label>Cari Paket Anda disini</label>
                                  <button className="btn nextBtn-2 btn-success">Lacak Paket Anda</button>
                                </div>
                              </div>
                              <div className="tracking-quots-board">
                                <label>your happiness quotes</label>
                                <div className="tracking-quots-board-info">
                                  <img src="img/bg/board_bg.jpg" alt="img" />
                                  <h5>On Board Your Products. Now Product is
                                    Malaysia Ocean</h5>
                                </div>
                              </div>
                            </div>
                            <div className="tracking-modal-map">
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
          </div>
        </header>

        <main>
          /
          <section className="s-slider-area">
            <div className="s-slider-bg fix">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="s-slider-content text-center">
                      <h6><span className="dots"></span>logistics Cargo Service<span className="dots2"></span></h6>
                      <h2 className="frame-1"><span>KUDA</span> Express</h2>
                      <h2 className="frame-2"><span>KUDA</span> Express</h2>
                      <h2 className="frame-3"><span>KUDA</span> Express</h2>
                      <h2 className="frame-4"><span>KUDA</span> Express</h2>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#category-section" className="icon-scroll">
                <span></span>
                <span></span>
                <span></span>
              </a>
              <div className="slider-golve">
                <img src="img/slider/golve.png" className="rotateme" alt="" />
              </div>
              <div className="slider-golve-bike">
                <img src="img/slider/bike.png" alt="" />
              </div>
              <div className="slide-golve-car">
                <img src="img/slider/car.png" alt="" />
              </div>
              <div className="slide-golve-ship">
                <img src="img/slider/ship.png" alt="" />
              </div>
              <div className="slider-plane">
                <img src="img/slider/plane.png" alt="" />
              </div>
            </div>
          </section>

          <section id="category-section" className="s-category-area">
            <div className="container">
              <div className="s-category-wrap">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <a href="#" className="s-single-cat mb-30">
                      <div className="s-cat-icon">
                        <i className="flaticon-shipping"></i>
                      </div>
                      <div className="s-cat-content">
                        <h5>harga medium
                          pengiriman premium</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <a href="#" className="s-single-cat mb-30">
                      <div className="s-cat-icon">
                        <i className="flaticon-air-freight"></i>
                      </div>
                      <div className="s-cat-content">
                        <h5>Menjangkau Seluruh Indonesia</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <a href="#" className="s-single-cat mb-30">
                      <div className="s-cat-icon">
                        <i className="flaticon-delivery-2"></i>
                      </div>
                      <div className="s-cat-content">
                        <h5>Ketepatan Waktu</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <a href="#" className="s-single-cat mb-30">
                      <div className="s-cat-icon">
                        <i className="flaticon-package-1"></i>
                      </div>
                      <div className="s-cat-content">
                        <h5>Paket Aman di tangan costumer</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-area delivery-bg pt-110 pb-90">
            <div className="delivery-services-wrap">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-10">
                  <div className="s-section-title text-center mb-60">
                    <h2>Kenapa memilih KUDA express?</h2>
                    <p>Kuda Express berkomitmen dan punya semangat tinggi untuk menjadi partner logistik diseluruh Indonesia. Inilah Alasan kenapa memilih Kuda Express</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="single-delivery-services mb-70 pr-75">
                    <div className="ds-icon order-0 order-md-2">
                      <img src="img/icon/ds_icon05.png" alt="icon" />
                    </div>
                    <div className="ds-content text-center text-sm-left text-md-right">
                      <h5>Layanan Pengiriman Kargo</h5>
                      <p>Sesuai fiturnya, Kargo Kuda Express melayani pengiriman khusus barang berat dan berukuran besar. Seperti peralatan rumah tangga, elektronik, dan barang besar lainnya.</p>
                    </div>
                  </div>
                  <div className="single-delivery-services mb-70 pr-75">
                    <div className="ds-icon order-0 order-md-2">
                      <img src="img/icon/ds_icon02.png" alt="icon" />
                    </div>
                    <div className="ds-content text-center text-sm-left text-md-right">
                      <h5>Kepuasan Pelanggan</h5>
                      <p>Kepuasan pelanggan adalah tujuan utama kami, semangat cita kami memberikan berbagai perfomance agar menjadi jasa pengiriman yang selalu memberi kebahagiaan bagi semua pelanggan.</p>
                    </div>
                  </div>
                  <div className="single-delivery-services mb-70 pr-75">
                    <div className="ds-icon order-0 order-md-2">
                      <img src="img/icon/ds_icon03.png" alt="icon" />
                    </div>
                    <div className="ds-content text-center text-sm-left text-md-right">
                      <h5>Paket aman sampai tujuan</h5>
                      <p>Kami pastikan paket aman sampai ketangan Anda</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-none d-xl-block">
                  <div className="d-services-img">
                    <img src="img/images/delivery_services_img.png" alt="img" />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="single-delivery-services mb-70 pl-75">
                    <div className="ds-icon">
                      <img src="img/icon/ds_icon04.png" alt="icon" />
                    </div>
                    <div className="ds-content">
                      <h5>Pengiriman Internasional</h5>
                      <p>Sedang ingin barang dari Luar negeri ke Indonesia dan sebaliknya? Tenang Kuda Express solusinya! Siap Kirim paket barang International Lebih mudah, Cepat, dan Aman. </p>
                    </div>
                  </div>
                  <div className="single-delivery-services mb-70 pl-75">
                    <div className="ds-icon">
                      <img src="img/icon/ds_icon01.png" alt="icon" />
                    </div>
                    <div className="ds-content">
                      <h5>Pengiriman Lebih cepat</h5>
                      <p>Layanan kirim barang super cepat, Pelanggan Puas!</p>
                    </div>
                  </div>
                  <div className="single-delivery-services mb-70 pl-75">
                    <div className="ds-icon">
                      <img src="img/icon/ds_icon06.png" alt="icon" />
                    </div>
                    <div className="ds-content">
                      <h5>Kooperatif</h5>
                      <p>Kami bertanggung jawab bekerja mewakili Online Shop Anda untuk semua masalah kirim paket</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            / <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-10">
                  <div className="s-section-title text-center mb-60">
                    <h2>Cargo Delivery</h2>
                    <p>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service
                      is useful for companies various.</p>
                  </div>
                </div>
              </div>
              <div className="services-wrapper">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services mb-30">
                      <div className="services-thumb">
                        <a href="#"><img src="img/images/services_img01.jpg" alt="img" /></a>
                      </div>
                      <div className="services-content">
                        <div className="services-icon">
                          <i className="flaticon-shipping-and-delivery"></i>
                        </div>
                        <h3><a href="#">More Control, for Free</a></h3>
                        <span>Delivery Service</span>
                        <p>Express delivery is an innovativ service is effective logistics solutio for delivery of small cargo service.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services mb-30">
                      <div className="services-thumb">
                        <a href="#"><img src="img/images/services_img02.jpg" alt="img" /></a>
                      </div>
                      <div className="services-content">
                        <div className="services-icon">
                          <i className="flaticon-shipping"></i>
                        </div>
                        <h3><a href="#">Expand with E-Commerce</a></h3>
                        <span>Delivery Service</span>
                        <p>Express delivery is an innovativ service is effective logistics solutio for delivery of small cargo service.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services mb-30">
                      <div className="services-thumb">
                        <a href="#"><img src="img/images/services_img03.jpg" alt="img" /></a>
                      </div>
                      <div className="services-content">
                        <div className="services-icon">
                          <i className="flaticon-location"></i>
                        </div>
                        <h3><a href="#">More Than Anywhere Shipping</a></h3>
                        <span>Delivery Service</span>
                        <p>Express delivery is an innovativ service is effective logistics solutio for delivery of small cargo service.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="international-services position-relative pb-120 fix">
            <div className="container">
              <div className="services-wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-6 order-0 order-lg-2">
                    <div className="int-services-img text-center text-lg-right">
                      <img src="img/images/int_cargo_img.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="s-section-title mb-30">
                      <h2>International Cargo</h2>
                      <h6>Express delivery is an innovative service</h6>
                    </div>
                    <div className="int-services-content">
                      <p>Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service
                        is useful for companies of various effective logistics scale.</p>
                      <a href="#" className="btn">comparison</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-title paroller" data-paroller-factor="0.15" data-paroller-factor-lg="0.15" data-paroller-factor-md="0.15" data-paroller-factor-sm="0.15" data-paroller-type="foreground" data-paroller-direction="horizontal">Cargo</div>
          </section>
          <section className="video-area video-bg">
            <div className="container">
              <div className="video-overlay">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-8 order-2 order-lg-0">
                    <div className="video-title">
                      <span>Our Chalanges</span>
                      <h2><span>never</span> break our promise</h2>
                      <a href="#">more services<span></span></a>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="video-play">
                      <a href="https://www.youtube.com/watch?v=iWKu6WNFf9M" className="popup-video"><img src="img/icon/play_btn.png" alt="img" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="delivery-services position-relative fix pt-110">
            <div className="overlay-title paroller" data-paroller-factor="0.15" data-paroller-factor-lg="0.15" data-paroller-factor-md="0.15" data-paroller-factor-sm="0.15" data-paroller-type="foreground" data-paroller-direction="horizontal">service</div>
            <div className="delivery-services-bg"></div>
            <div className="container">
              <div className="delivery-services-wrap">
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-10">
                    <div className="s-section-title text-center mb-60">
                      <h2>Cargo Delivery service</h2>
                      <p>Express delivery is an innovative service is effective logistics solution for the delivery of small
                        cargo. This service is useful for companies various.</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="single-delivery-services mb-70 pr-75">
                      <div className="ds-icon order-0 order-md-2">
                        <img src="img/icon/ds_icon01.png" alt="icon" />
                      </div>
                      <div className="ds-content text-center text-sm-left text-md-right">
                        <h5>Cargo Delivery</h5>
                        <p>Express delivery innovative service logistic delivery</p>
                      </div>
                    </div>
                    <div className="single-delivery-services mb-70 pr-75">
                      <div className="ds-icon order-0 order-md-2">
                        <img src="img/icon/ds_icon02.png" alt="icon" />
                      </div>
                      <div className="ds-content text-center text-sm-left text-md-right">
                        <h5>Satisfied clients</h5>
                        <p>Express delivery innovative service logistic delivery</p>
                      </div>
                    </div>
                    <div className="single-delivery-services mb-70 pr-75">
                      <div className="ds-icon order-0 order-md-2">
                        <img src="img/icon/ds_icon03.png" alt="icon" />
                      </div>
                      <div className="ds-content text-center text-sm-left text-md-right">
                        <h5>Door to door</h5>
                        <p>Express delivery innovative service logistic delivery</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 d-none d-xl-block">
                    <div className="d-services-img">
                      <img src="img/images/delivery_services_img.png" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="single-delivery-services mb-70 pl-75">
                      <div className="ds-icon">
                        <img src="img/icon/ds_icon04.png" alt="icon" />
                      </div>
                      <div className="ds-content">
                        <h5>International delivery</h5>
                        <p>Express delivery innovative service logistic delivery</p>
                      </div>
                    </div>
                    <div className="single-delivery-services mb-70 pl-75">
                      <div className="ds-icon">
                        <img src="img/icon/ds_icon05.png" alt="icon" />
                      </div>
                      <div className="ds-content">
                        <h5>Heavy Boxes Cargo</h5>
                        <p>Express delivery innovative service logistic delivery</p>
                      </div>
                    </div>
                    <div className="single-delivery-services mb-70 pl-75">
                      <div className="ds-icon">
                        <img src="img/icon/ds_icon06.png" alt="icon" />
                      </div>
                      <div className="ds-content">
                        <h5>cargo insurance</h5>
                        <p>Express delivery innovative service logistic delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="fact-area pt-120 pb-65">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="single-fact mb-50">
                    <div className="fact-icon mb-25">
                      <i className="flaticon-package"></i>
                    </div>
                    <div className="fact-content">
                      <h4><span className="count">3,560</span> km</h4>
                      <h6>Package Delivered</h6>
                      <p>Express delivery is an innaiv service effective logistics solution</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="single-fact mb-50">
                    <div className="fact-icon mb-25">
                      <i className="flaticon-placeholder"></i>
                    </div>
                    <div className="fact-content">
                      <h4><span className="count">195</span></h4>
                      <h6>Countries Covered</h6>
                      <p>Express delivery is an innaiv service effective logistics solution</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="single-fact mb-50">
                    <div className="fact-icon mb-25">
                      <i className="flaticon-user"></i>
                    </div>
                    <div className="fact-content">
                      <h4><span className="count">456</span> k</h4>
                      <h6>Happy Customer</h6>
                      <p>Express delivery is an innaiv service effective logistics solution</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="single-fact mb-50">
                    <div className="fact-icon mb-25">
                      <i className="flaticon-like"></i>
                    </div>
                    <div className="fact-content">
                      <h4><span className="count">99</span> Yr</h4>
                      <h6>Year Experience</h6>
                      <p>Express delivery is an innaiv service effective logistics solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="area-wrapper black-bg position-relative pt-115 pb-120">
            <div className="area-wrap-bg"></div>
            <div className="testimonial-map-bg"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testimonial-area">
                    <div className="section-title white-title mb-55">
                      <h6>Testimoni Kepuasan Pelanggan</h6>
                      <h2>Top Feedback</h2>
                    </div>
                    <div className="testimonial-active">
                      <div className="single-testimonial">
                        <div className="testimonial-cat mb-30">
                          <h5>Shipping Cargo</h5>
                          <div className="testimonial-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-content mb-45">
                          <p>“ Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This
                            service is useful companied various effective logistics scala ”</p>
                        </div>
                        <div className="testimonial-avatar">
                          <div className="testi-avatar-img">
                            <img src="img/images/testi_avatar01.png" alt="img" />
                          </div>
                          <div className="testi-avatar-info">
                            <h6>Tonoy Alexander</h6>
                            <span>Founder Cargo</span>
                          </div>
                        </div>
                      </div>
                      <div className="single-testimonial">
                        <div className="testimonial-cat mb-30">
                          <h5>Air Freight</h5>
                          <div className="testimonial-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="testimonial-content mb-45">
                          <p>“ Express delivery is an innovative service is effective logistics solution for the delivery of small cargo. This
                            service is useful companied various effective logistics scala ”</p>
                        </div>
                        <div className="testimonial-avatar">
                          <div className="testi-avatar-img">
                            <img src="img/images/testi_avatar02.png" alt="img" />
                          </div>
                          <div className="testi-avatar-info">
                            <h6>Lanu Dexander</h6>
                            <span>Founder Cargo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-area cta-pl">
                    <div className="section-title white-title mb-60">
                      <h6>Kepuasan Pelanggan adalah Tujuan utama kami</h6>
                      <h2>Cek Ongkir Cargo</h2>
                    </div>
                    <div className="cta-from">
                      <form action="#">
                        <div className="cta-form-col d-flex justify-content-between">
                          <select className="custom-select">
                            <option selected="">Select Service</option>
                            <option>Air Freight</option>
                            <option>Shipping Cargo</option>
                            <option>Rail Cargo</option>
                            <option>Warehousing</option>
                          </select>
                          <input type="text" placeholder="Length cm" />
                          <input type="text" placeholder="Hight cm" />
                        </div>
                        <div className="cta-form-col d-flex justify-content-between">
                          <select className="custom-select">
                            <option selected="">From Country</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                          </select>
                          <select className="custom-select">
                            <option selected="">To Country</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                          </select>
                        </div>
                        <div className="cta-form-col d-flex justify-content-between">
                          <select className="custom-select">
                            <option selected="">Weight kg</option>
                            <option>100Kg</option>
                            <option>200Kg</option>
                            <option>300Kg</option>
                            <option>400Kg</option>
                            <option>500Kg</option>
                            <option>600Kg</option>
                            <option>700Kg</option>
                          </select>
                          <input className="cta-email" type="email" placeholder="Email ID" />
                        </div>
                        <h4 className="extra-services"><i className="fas fa-binoculars"></i>Extra Service</h4>
                        <ul>
                          <li>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" htmlFor="customCheck1">Air Freight</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck2" />
                              <label className="custom-control-label" htmlFor="customCheck2">Shipping Cargo</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck3" />
                              <label className="custom-control-label" htmlFor="customCheck3">Rail Cargo</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck4" />
                              <label className="custom-control-label" htmlFor="customCheck4">Warehousing</label>
                            </div>
                          </li>
                        </ul>
                        <button className="btn">comparison</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="control-area pt-110 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-10">
                  <div className="s-section-title text-center mb-60">
                    <h2>News &amp; Promo</h2>
                    <p> Cek Selengkapnya...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid control-fluid">
              <div className="row control-active">
                <div className="col-xl-4">
                  <div className="single-control-wrap fix">
                    <div className="control-thumb">
                      <img src="img/images/control_img01.jpg" alt="img" />
                    </div>
                    <div className="control-overlay-content">
                      <h4><a href="#">Cargo Truck</a></h4>
                      <span>Delivery Anything</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="single-control-wrap fix">
                    <div className="control-thumb">
                      <img src="img/images/control_img02.jpg" alt="img" />
                    </div>
                    <div className="control-overlay-content">
                      <h4><a href="#">Cargo shipping</a></h4>
                      <span>Delivery Anything</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="single-control-wrap fix">
                    <div className="control-thumb">
                      <img src="img/images/control_img03.jpg" alt="img" />
                    </div>
                    <div className="control-overlay-content">
                      <h4><a href="#">Cargo Truck</a></h4>
                      <span>Delivery Anything</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="single-control-wrap fix">
                    <div className="control-thumb">
                      <img src="img/images/control_img02.jpg" alt="img" />
                    </div>
                    <div className="control-overlay-content">
                      <h4><a href="#">Cargo shipping</a></h4>
                      <span>Delivery Anything</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="single-control-wrap fix">
                    <div className="control-thumb">
                      <img src="img/images/control_img03.jpg" alt="img" />
                    </div>
                    <div className="control-overlay-content">
                      <h4><a href="#">Cargo Truck</a></h4>
                      <span>Delivery Anything</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="brand-area gray-bg pt-85 pb-85">
            <div className="container">
              <div className="row brand-active">
                <div className="col-12">
                  <div className="signle-brand">
                    <img src="img/brand/brnad_logo01.png" alt="img" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="signle-brand">
                    <img src="img/brand/brnad_logo02.png" alt="img" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="signle-brand">
                    <img src="img/brand/brnad_logo03.png" alt="img" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="signle-brand">
                    <img src="img/brand/brnad_logo04.png" alt="img" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="signle-brand">
                    <img src="img/brand/brnad_logo05.png" alt="img" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="signle-brand">
                    <img src="img/brand/brnad_logo03.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="newsletter-area gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="newsletter-wrap">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="newsletter-content">
                          <h4>Newsletter Sign Up</h4>
                          <span>Notifications our best deals...</span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="newsletter-form">
                          <form action="#">
                            <input type="email" placeholder="Enter your email..." />
                            <button className="btn">subscribe</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>

        <footer>
          <div className="footer-wrap pt-190 pb-40" data-background="img/bg/footer_bg.jpg">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget mb-50">
                    <div className="footer-logo mb-35">
                      <a href="index.html"><img src="img/logo/logo.png" alt="img" /></a>
                    </div>
                    <div className="footer-text">
                      <p>Kuda Express adalah perusahaan layanan ekspedisi berbasis teknologi melayani pengiriman tanpa ribet.
                      </p>
                    </div>
                    <div className="footer-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget mb-50">
                    <div className="fw-title mb-30">
                      <h5>RECENT POSTS</h5>
                    </div>
                    <div className="f-rc-post">
                      <ul>
                        <li>
                          <div className="f-rc-thumb">
                            <a href="#"><img src="img/blog/f_rc_img01.jpg" alt="img" /></a>
                          </div>
                          <div className="f-rc-content">
                            <span>19 Jun, 2019</span>
                            <h5><a href="#">which the syste built and actually</a></h5>
                          </div>
                        </li>
                        <li>
                          <div className="f-rc-thumb">
                            <a href="#"><img src="img/blog/f_rc_img02.jpg" alt="img" /></a>
                          </div>
                          <div className="f-rc-content">
                            <span>19 Jun, 2019</span>
                            <h5><a href="#">which the syste built and actually</a></h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 offset-lg-4 offset-xl-0">
                  <div className="footer-widget mb-50">
                    <div className="fw-title mb-30">
                      <h5>Perusahaan</h5>
                    </div>
                    <div className="fw-link">
                      <ul>
                        <li><a href="about-us.html"><i className="fas fa-caret-right"></i>Tentang Kami</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i> Delivery Information</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i> Terms &amp; Conditions</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i> Kebijakan Privasi</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i> Kebijakan Pengembalian</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 offset-lg-4 offset-xl-0">
                  <div className="footer-widget mb-50">
                    <div className="fw-title mb-30">
                      <h5>Produk dan layanan</h5>
                    </div>
                    <div className="fw-link">
                      <ul className="col-xl-11">
                        <li><a href="#"><i className="fas fa-caret-right"></i>Kuda Express</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i> Kuda Cargo</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i> Kuda Logistic</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i> Kuda Freight</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 offset-lg-4 offset-xl-0">
                  <div className="footer-widget mb-50">
                    <div className="fw-title mb-30">
                      <h5>Kuda Express</h5>
                    </div>
                    <div className="fw-link">
                      <ul className="col-xl-11">
                        <li><a href="#"><i className="fas fa-caret-right"></i>Same Day</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i>Next Day</a></li>
                        <li><a href="#"><i className="fas fa-caret-right"></i>Regular</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget mb-50">
                    <div className="fw-title mb-30">
                      <h5>Support & Downloads</h5>
                    </div>
                    <div className="f-support-content">
                      <p>Kuda Express adalah perusahaan expedisi berbasis teknologi menyediakan penigiriman tanpa ribet.
                      </p>
                      <a href="#" className="f-download-btn"><img src="img/images/f_download_btn01.png" alt="img" /></a>
                      <a href="#" className="f-download-btn"><img src="img/images/f_download_btn02.png" alt="img" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7">
                  <div className="copyright-text">
                    <p>Copyright© <span>KUDA EXPRESS</span> | All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="f-payment-method text-center text-md-right">
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

export default Home;