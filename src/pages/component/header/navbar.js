import React, { Component } from 'react';
import { Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <div>
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-6">
            <div className="logo">
              <a href="index.html"><img src="img/logo/logo.png" className="mobile-logo logo-sticky-none" alt="Logo" /></a>
              <a href="index.html"><img src="img/logo/s_logo.png" className="mobile-logo s-logo-none" alt="Logo" /></a>
            </div>
          </div>
          <div className="col-lg-9 col-md-6 d-none d-md-block">
            <div className="menu-area">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li className="active">
                      <Link to={'/'}>
                        Beranda
                      </Link>
                    </li>
                    <li><a href="about-us.html">Tentang kami</a></li>
                    <li>
                      {/* <a href="tracking.html">Tracking</a> */}
                      <Link to={'/tracking'}>
                        Tracking
                      </Link>
                    </li>
                    <li><a href="#">Halaman</a>
                      <ul className="submenu">
                        <li><a href="#">Layanan</a>
                          <ul className="submenu">
                            <li><a href="service-air.html">Services Air</a></li>
                            <li><a href="service-Railway.html">Services Railway</a></li>
                            <li><a href="service-door-to-door.html">Services Door to Door</a></li>
                            <li><a href="service-warehouse.html">Services warehouse</a></li>
                          </ul>
                        </li>
                        <li><a href="job.html">Lowongan Pekerjaan</a></li>
                      </ul>
                    </li>
                    <li><a href="#">News &amp; Promo</a>
                      <ul className="submenu">
                        <li><a href="articles.html">News &amp; Blog</a></li>
                        <li><a href="#">Promo</a></li>
                      </ul>
                    </li>
                    <li><a href="support.html">Support</a></li>
                    <li>
                      <Link to={'/login'}>
                        Login or Register
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-search">
                <a href="#" data-toggle="modal" data-target="#search-modal"><i className="flaticon-magnifying-glass"></i></a>
              </div>
              <div className="header-btn">
                <a href="#" className="btn" data-toggle="modal" data-target="#exampleModalLong"><img src="img/icon/calculator-symbols.png" alt="icon" />Feature</a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="mobile-menu"></div>
          </div>
        </div>

        <div className="modal fade" id="search-modal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form>
                <input type="text" placeholder="Search here..." />
                <button><i className="fa fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;