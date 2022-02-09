import { useAuthContext } from "../../contexts/AuthContext";
import "./header.scss";
import Icon from "../../assets/images/svg/GoDaddy-Icon-Black-Logo.wine.svg";
import Logo from "../../assets/images/svg/GoDaddy-Black-Logo.wine.svg";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useAuthContext();

  return (
    // <!-- header -->
    <header className='header d-flex justify-content-between flex-wrap'>
      <div className='left-items d-flex align-items-center justify-content-start'>
        <nav className='navbar navbar-expand-xxl navbar-light'>
          <div className='container-fluid px-0 py-0'>
            <a className='navbar-brand order-2 order-md-0 me-2'>
              <img className='icon' src={Icon} alt='logo' />
              <img className='logo' src={Logo} alt='logo' />
              <span className='country-name d-none'>India</span>
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse small-screen-nav'
              id='navbarNav'
            >
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                {/* <i className='fas fa-times'></i> */}
                <FaTimes></FaTimes>
              </button>
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <a
                    className='nav-link collapsed'
                    href='#'
                    role='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#nav-sub-1'
                    aria-expanded='false'
                    aria-controls='nav-sub-1'
                  >
                    Domains
                  </a>
                  <div className='nav-sub-container collapse' id='nav-sub-1'>
                    <ul className='nav-sub'>
                      <li className='nav-sub-link nav-sub-title'>
                        <strong>Domains</strong>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Domain Name Search</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Transfer Domain Names</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Privacy & Protection for Domains</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>WHOIS</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Auctions for Domain Names</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Appraise Domain Name Value</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Investing in Domains</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Premium DNS</a>
                      </li>
                    </ul>
                    <div className='img-container'>
                      <img
                        className='img-fluid img'
                        src='https://drive.google.com/uc?export=view&id=17QEpaC2ova7qPrsZ0BSkJKeAFkrp8KAs'
                        alt='Nav Pro Desktop Domains'
                      />
                      <a href='#' className='nav-img-link'>
                        Transfer your domains
                      </a>
                    </div>
                  </div>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link collapsed'
                    href='#'
                    role='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#nav-sub-2'
                    aria-expanded='false'
                    aria-controls='nav-sub-2'
                  >
                    Hosting
                  </a>
                  <div className='nav-sub-container collapse' id='nav-sub-2'>
                    <ul className='nav-sub'>
                      <li className='nav-sub-link nav-sub-title'>
                        <strong>Hosting</strong>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Web Hosting</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Business Hosting</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>GoDaddy Website builder</a>
                      </li>
                    </ul>
                    <ul className='nav-sub'>
                      <li className='nav-sub-link nav-sub-title'>
                        <strong>Ecommerce Hosting</strong>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Managed WordPress Ecommerce</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>GoDaddy Online Store Builder</a>
                      </li>
                    </ul>
                    <ul className='nav-sub'>
                      <li className='nav-sub-link nav-sub-title'>
                        <strong>WordPress Solutions</strong>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>WordPress Hosting</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Managed WordPress Pro</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>WP Premium Support</a>
                      </li>
                    </ul>
                    <ul className='nav-sub'>
                      <li className='nav-sub-link nav-sub-title'>
                        <strong>Servers</strong>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>VPS Hosting</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>VPS - Fully Managed</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Dedicated Server</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Dedicated Server - Fully Managed</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Reseller (WHMCS) Hosting</a>
                      </li>
                    </ul>

                    <div className='img-container'>
                      <img
                        className='img-fluid img'
                        src='https://drive.google.com/uc?export=view&id=1pRKCFdX69c6Hv6QvjCOU9ZDQJQleQ0e5'
                        alt='Nav Pro Desktop Hosting'
                      />
                      <a href='#' className='nav-img-link'>
                        Compare Hosting Options
                      </a>
                    </div>
                  </div>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link collapsed'
                    href='#'
                    role='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#nav-sub-3'
                    aria-expanded='false'
                    aria-controls='nav-sub-3'
                  >
                    Security
                  </a>
                  <div className='nav-sub-container collapse' id='nav-sub-3'>
                    <ul className='nav-sub'>
                      <li className='nav-sub-link nav-sub-title'>
                        <strong>SSL Certificates</strong>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>DV SSL Certificate</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>EV SSL Certificate</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>SAN SSL</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Wildcard SSL</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Managed SSL Service</a>
                      </li>
                    </ul>
                    <ul className='nav-sub'>
                      <li className='nav-sub-link nav-sub-title'>
                        <strong>Web Security</strong>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Backups</a>
                      </li>
                      <li className='nav-sub-link'>
                        <a href='#'>Complete Website Security</a>
                      </li>
                    </ul>
                    <div className='img-container'>
                      <img
                        className='img-fluid img'
                        src='https://drive.google.com/uc?export=view&id=1djaamjTiVqe74YyarKj7I9F2xvHIku3U'
                        alt='Nav Pro Desktop Security'
                      />
                      <a href='#' className='nav-img-link'>
                        Get help selecting the right type of SSL Certificate
                      </a>
                    </div>
                  </div>
                </li>
                <a
                  className='nav-link collapse-show-more'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseNavLink'
                >
                  More
                </a>
                <div className='collapse collapse-show-lg' id='collapseNavLink'>
                  <li className='nav-item'>
                    <a
                      className='nav-link collapsed'
                      href='#'
                      role='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#nav-sub-4'
                      aria-expanded='false'
                      aria-controls='nav-sub-4'
                    >
                      Email & Marketing
                    </a>
                    <div className='nav-sub-container collapse' id='nav-sub-4'>
                      <ul className='nav-sub'>
                        <li className='nav-sub-link nav-sub-title'>
                          <strong>Email</strong>
                        </li>
                        <li className='nav-sub-link'>
                          <a href='#'>Email & Office 365</a>
                        </li>
                      </ul>
                      <ul className='nav-sub'>
                        <li className='nav-sub-link nav-sub-title'>
                          <strong>Marketing Apps & Services</strong>
                        </li>
                        <li className='nav-sub-link'>
                          <a href='#'>Email Marketing</a>
                        </li>
                        <li className='nav-sub-link'>
                          <a href='#'>Digital Marketing Suite</a>
                        </li>
                        <li className='nav-sub-link'>
                          <a href='#'>SEO Services</a>
                        </li>
                        <li className='nav-sub-link'>
                          <a href='#'>Content & Photo Creator</a>
                        </li>
                      </ul>
                      <div className='img-container'>
                        <img
                          className='img-fluid img'
                          src='https://drive.google.com/uc?export=view&id=1ZkLlGpV-WQXx2UCwWFB3tqc9X-RLFeXm'
                          alt='Nav Pro Desktop Email'
                        />
                        <a href='#' className='nav-img-link'>
                          Tools to help your small business clients get bigger
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link collapsed'
                      href='#'
                      role='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#nav-sub-5'
                      aria-expanded='false'
                      aria-controls='nav-sub-5'
                    >
                      For web Professionals
                    </a>
                    <div className='nav-sub-container collapse' id='nav-sub-5'>
                      <ul className='nav-sub'>
                        <li className='nav-sub-link nav-sub-title'>
                          <strong>Welcome to GoDaddy Pro</strong>
                        </li>
                        <li className='nav-sub-link'>
                          <a href='#'>
                            Do more for clients with GoDaddy Pro, our
                            ever-growing set of products, tools, content and
                            support tailored to the unique business needs of web
                            designers and developers.
                          </a>
                        </li>
                        <button className='btn btn-dark btn-custom m-0'>
                          <span>Enter GoDaddy Pro Site</span>
                        </button>
                      </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='right-items d-flex align-items-center flex-wrap'>
        <div className='contact ms-4'>
          <div data-bs-toggle='collapse' data-bs-target='#collapseContact'>
            <div className='right-text'>040 67607600</div>
            <img
              src='https://drive.google.com/uc?export=view&id=1KfpLDcBRMmLsD1Xi70oEJEKUrKLsp-UG'
              alt='contact'
            />
          </div>
          <div className='collapse' id='collapseContact'>
            <div
              className='close-icon pt-4'
              data-bs-toggle='collapse'
              data-bs-target='#collapseContact'
            >
              {/* <i className='fas fa-times fs-5'></i> */}
              <FaTimes></FaTimes>
            </div>
            <div id='contactContent'>
              <div className='callUs mb-5'>
                <div className='right-title'>Call Us</div>
                <div className='sub-title mt-3'>
                  Call Our Award Winning Support 24/7
                </div>
                <a className='right-link' href='tel:040 67607600'>
                  040 67607600
                </a>
                <div className='sub-title mt-3'>Global Directory</div>
                <a
                  className='right-link'
                  href='https://in.godaddy.com/contact-us'
                >
                  Phone numbers and hours
                </a>
              </div>
              <div className='chatNow mb-3'>
                <div className='right-title'>Chat Now</div>
                <div className='sub-title mt-3'>
                  Chat with our sales &amp; support team for quick answers on
                  product features, pricing and more.
                  <p className='mt-3'>Hours: 24x7 Chat</p>
                  <a className='btn btn-dark fw-bold px-4'>Chat Now</a>
                  <br />
                  <a className='btn btn-outline-dark fw-bold mt-3 px-4'>
                    WhatsApp at +91 40 6760 7655
                  </a>
                </div>
              </div>
              <div className='helpCenter mb-4'>
                <div className='right-title'>Help Center</div>
                <div className='sub-title mt-3'>
                  Explore our online help resources
                  <br />
                  <a className='btn btn-outline-dark fw-bold mt-3 px-4'>
                    Get Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='blog ms-4'>
          <div className='right-text'>Blog</div>
        </div>
        <div className='help ms-4'>
          <div className='right-text'>Help</div>
          <img
            src='https://drive.google.com/uc?export=view&id=1TkeGnxcG6aQ9L0jEsSiftkz2qJZ2yhv9'
            alt='help'
          />
        </div>
        <div className='user ms-4'>
          <div data-bs-toggle='collapse' data-bs-target='#collapseSignIn'>
            <div className='right-text'>
              {Object.keys(user).length > 0 ? user.userName : "Sign In"}
            </div>
            <img
              src='https://drive.google.com/uc?export=view&id=1dIJcxPNt-Nootme1puNGNAoRjhFvGl_K'
              alt='user'
            />
          </div>
          <div className='collapse' id='collapseSignIn'>
            <div className='caret'></div>
            <div
              className='signin-close-icon pt-4'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSignIn'
            >
              {/* <i className='fas fa-times'></i> */}
              <FaTimes></FaTimes>
            </div>
            <div id='userContent'>
              {Object.keys(user).length <= 0 ? (
                <>
                  <div className='sign-in'>
                    <div className='right-title mb-4'>Registered User</div>
                    <div className='sub-title'>
                      Have an account? Sign in now.
                    </div>
                    <Link to='login' className='right-link'>
                      Sign In
                    </Link>
                  </div>
                  <div className='dropdown-divider'></div>
                  <div className='sign-up'>
                    <div className='right-title mb-4'>New Customer</div>
                    <div className='sub-title'>
                      New to GoDaddy? Create an account to get started today.
                    </div>
                    <Link to='account/create' className='right-link'>
                      Create an Account
                    </Link>
                  </div>
                  <div className='dropdown-divider'></div>
                  <div className='control-panel'>
                    <div className='right-title text-muted'>
                      CONTROL PANEL LINKS
                    </div>
                    <a className='right-link'>Manage Domains</a>
                    <a className='right-link'>Manage Website Builder</a>
                    <a className='right-link'>Manage Hosting</a>
                    <a className='right-link'>Manage SSL Certificates</a>
                    <a className='right-link'>Manage Email</a>
                  </div>
                  <div className='dropdown-divider'></div>
                  <div className='inbox'>
                    <div className='right-title text-muted'>INBOX LINKS</div>
                    <a className='right-link'>Sign in to Office 365 Email</a>
                    <a className='right-link'>Sign in to GoDaddy Webmail</a>
                  </div>
                </>
              ) : (
                <>
                  <div className='sign-in'>
                    <div className='user-name'>{user.userName}</div>
                    <div className='user-no'>
                      Customer #: {user.customerNumber}
                    </div>
                    <div className='user-pin'>
                      PIN: <a>View</a>
                    </div>
                  </div>
                  <div className='dropdown-divider'></div>
                  <div className='account'>
                    <div className='account-title text-muted'>ACCOUNT</div>
                    <a className='right-link'>My Products</a>
                    <a className='right-link'>Renewals & Billing</a>
                    <a className='right-link'>Account Settings</a>
                  </div>
                  <div className='dropdown-divider'></div>
                  <div className='inbox'>
                    <a className='right-link'>Sign in to Office 365 Email</a>
                    <a className='right-link'>Sign in to GoDaddy Webmail</a>
                  </div>
                  <div className='dropdown-divider'></div>
                  <Link to='/logout' className='right-link mt-4'>
                    Sign Out
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='cart ms-4'>
          <img
            className='cart-image'
            src='https://drive.google.com/uc?export=view&id=12UVwUy5O4EE6yrFNZIj8Cl_4S1-0lbto'
            alt='cart'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
