import "./App.css";

function App() {
  return (
    <>
      {/* Mob header */}
      <div className="mob-header">
        <div className="mob-h-left">
          <a className="navbar-brand" data-scroll-nav={0} href="#home">
            <h1 className="headingFont">Kashif.</h1>
          </a>
        </div>
        <div className="mob-h-right">
          <button className="toggler-menu">
            <span />
          </button>
        </div>
      </div>
      {/* End */}
      {/* Header Top */}
      <div className="header-left-fixed one-page-nav">
        {/* Brand */}
        <div className="logo">
          <a className="navbar-brand" data-scroll-nav={0} href="#home">
            <h1 className="headingFont">Kashif.</h1>
          </a>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            <a data-scroll-nav={0} href="#home">
              Home
            </a>
          </li>
          <li>
            <a data-scroll-nav={1} href="#services">
              About
            </a>
          </li>
          <li>
            <a data-scroll-nav={2} href="#services">
              Services
            </a>
          </li>
          <li>
            <a data-scroll-nav={3} href="#work">
              Portfolio
            </a>
          </li>
          <li>
            <a data-scroll-nav={5} href="#contactus">
              Contact
            </a>
          </li>
        </ul>
        <ul className="nav social-link">
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-pinterest" />
            </a>
          </li>
        </ul>
      </div>
      {/* End Header Top */}
      {/* Main */}
      <main className="wrapper">
        {/* Home Banner */}
        <section
          id="home"
          data-scroll-index={0}
          className="home-section bg-dark"
        >
          <div className="container">
            <div className="row  min-vh-100 align-items-center">
              <div className="col-lg-12 col-xl-12 col-xxl-6">
                <div className="hb-text">
                  <h1>
                    Hello! I Am
                    <span> Kashif...</span>
                  </h1>
                  <p className="lead text-center fieldTitle">
                    <span>Web Designer</span> based in <span>PAKISTAN</span>
                  </p>
                  <div className="info-bar d-flex align-items-center justify-content-center">
                    <p>
                      <i className="bi-phone" /> <span>+923052755457</span>
                    </p>
                    <p>
                      <i className="bi-envelope" />
                      <span>mkashif@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social-fix">
            <div className="social-links">
              <a href="#">
                <i className="fab fa-dribbble" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
            </div>
          </div>
        </section>
        {/* End Home Banner */}
        {/* About Section */}
        <section
          id="about"
          data-scroll-index={1}
          className="section about-section"
        >
          <div className="container">
            <div className="section-heading text-center text-lg-start">
              <h6>Nice to meet you!</h6>
              <h2>Welcome to...</h2>
            </div>
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="about-left">
                  <div className="about-avatar">
                    <img src="assets/img/about-banner.png" alt="" />
                  </div>
                  <h3>Muhammad Kashif</h3>
                  <p className="fieldTitle">
                    Web Designer <span>based in</span> PAKISTAN
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn" href="#">
                      Download CV <i className="bi-download" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 ps-xl-5">
                <div className="about-bio">
                  <p>
                    Born in 2000, AB type living in Pakistan. We provide
                    on-screen design for websites and apps, as well as front-end
                    implementation. We will continue to pursue a wide range of
                    expressions and better code by pursuing our “likes”.
                  </p>
                </div>
                <div className="about-contact row gx-lg-5">
                  <div className="col-sm-6">
                    <p>
                      <i className="bi-phone" /> <span>+923052755457</span>
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <i className="bi-person" /> <span>Muhammad Kashif</span>
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <i className="bi-envelope" />
                      <span>mkashif@gmail.com</span>
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <i className="bi-map" /> <span>Multan, PAKISTAN</span>
                    </p>
                  </div>
                </div>
                <div className="about-exp">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="a-number">
                        <h6>10+</h6>
                        <span>
                          Years
                          <br />
                          experience...
                        </span>
                      </div>
                      <p className="lead">
                        Hello there! My name is <span>Muhammad Kashif</span>. I
                        am a web designer &amp; developer, and I'm very
                        passionate and dedicated to my work.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <div className="a-number">
                        <h6>50+</h6>
                        <span>
                          Clients
                          <br />
                          Worldwide...
                        </span>
                      </div>
                      <p className="lead">
                        With 10+ years experience as a professional designer, I
                        have acquired the skills to make your project a success.
                      </p>
                    </div>
                  </div>
                  <blockquote>
                    <i className="fa-solid fa-quote-left" />
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Faucibus sed sit ultrices et sed metus sollicitudin.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* Services Section */}
        <section
          id="services"
          data-scroll-index={2}
          className="section services-section bg-dark"
        >
          <div className="container">
            <div className="section-heading">
              <h6>My Service</h6>
              <h2>My Specialties</h2>
            </div>
            <div className="accordion accordion-flush" id="accordion_services">
              <div className="accordion-item">
                <div className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    <span className="services-title">Web Design</span>
                    <span className="services-small-desc">
                      You can customize a template or make your own from
                      scratch, with an immersive library at your disposal. You
                      can customize a template
                    </span>
                    <span className="accordion-icon" />
                  </button>
                </div>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordion_services"
                >
                  <div className="accordion-body">
                    <div className="row gy-4">
                      <div className="col-sm-6 col-md-4">
                        <div className="s-img">
                          <img src="assets/img/services-5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-8">
                        <h3>Web Design</h3>
                        <div className="s-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <span className="services-title">UI/UX Design</span>
                    <span className="services-small-desc">
                      You can customize a template or make your own from
                      scratch, with an immersive library at your disposal. You
                      can customize a template
                    </span>
                    <span className="accordion-icon" />
                  </button>
                </div>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion_services"
                >
                  <div className="accordion-body">
                    <div className="row gy-4">
                      <div className="col-sm-6 col-md-4">
                        <div className="s-img">
                          <img src="assets/img/project-2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-8">
                        <h3>UI/UX Design</h3>
                        <div className="s-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <span className="services-title">Mobile Application</span>
                    <span className="services-small-desc">
                      You can customize a template or make your own from
                      scratch, with an immersive library at your disposal. You
                      can customize a template
                    </span>
                    <span className="accordion-icon" />
                  </button>
                </div>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion_services"
                >
                  <div className="accordion-body">
                    <div className="row gy-4">
                      <div className="col-sm-6 col-md-4">
                        <div className="s-img">
                          <img src="assets/img/project-3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-8">
                        <h3>Mobile Application</h3>
                        <div className="s-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefour"
                    aria-expanded="false"
                    aria-controls="flush-collapsefour"
                  >
                    <span className="services-title">User research</span>
                    <span className="services-small-desc">
                      You can customize a template or make your own from
                      scratch, with an immersive library at your disposal. You
                      can customize a template
                    </span>
                    <span className="accordion-icon" />
                  </button>
                </div>
                <div
                  id="flush-collapsefour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordion_services"
                >
                  <div className="accordion-body">
                    <div className="row gy-4">
                      <div className="col-sm-6 col-md-4">
                        <div className="s-img">
                          <img src="assets/img/project-4.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-8">
                        <h3>User research</h3>
                        <div className="s-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* Contact Section */}
        <section
          id="contact"
          data-scroll-index={5}
          className="section contact-section"
        >
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Contact me</h2>
                </div>
                <div className="contact-form bg-g">
                  <div className="contact-head">
                    <h4>Got Ideas? We've got the skills. Let's team up.</h4>
                    <p>
                      Tell us more about yourself and what you're got in mind.
                    </p>
                  </div>
                  <form id="contact-form" method="POST">
                    <div className="row gx-3 gy-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">First name</label>
                          <input
                            name="Name"
                            id="name"
                            placeholder="Name *"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Your Email</label>
                          <input
                            name="Email"
                            id="email"
                            placeholder="Email *"
                            className="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Subject</label>
                          <input
                            name="Subject"
                            id="subject"
                            placeholder="Subject *"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label">Your message</label>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your message *"
                            rows={6}
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="send">
                          <button
                            className="px-btn dark w-100"
                            type="button"
                            value="Send"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="col-lg-7 ps-xl-5"></div> */}
            </div>
          </div>
        </section>
        {/* End Contact Section */}
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-info">
              <h6>Muhammad Kashif</h6>
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </main>
      {/* Main */}
      {/* Snigle 1 */}
      <div id="blog_1" className="px-modal mfp-hide">
        <div className="single-blog-box">
          <div className="single-blog-img">
            <img src="assets/img/blog-1.jpg" alt="" />
          </div>
          <div className="single-blog-content">
            <h6>10 July, 2022</h6>
            <h2>12 unique example of portfolio websites</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="blog-meta">
              <label>Share</label>
              <ul className="nav social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Snigle 1 */}
      {/* Snigle 2 */}
      <div id="blog_2" className="px-modal mfp-hide">
        <div className="single-blog-box">
          <div className="single-blog-img">
            <img src="assets/img/blog-2.jpg" alt="" />
          </div>
          <div className="single-blog-content">
            <h6>10 July, 2022</h6>
            <h2>12 unique example of portfolio websites</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="blog-meta">
              <label>Share</label>
              <ul className="nav social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Snigle 2 */}
      {/* Snigle 3 */}
      <div id="blog_3" className="px-modal mfp-hide">
        <div className="single-blog-box">
          <div className="single-blog-img">
            <img src="assets/img/blog-3.jpg" alt="" />
          </div>
          <div className="single-blog-content">
            <h6>10 July, 2022</h6>
            <h2>12 unique example of portfolio websites</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="blog-meta">
              <label>Share</label>
              <ul className="nav social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Snigle 3 */}
      {/* Snigle 3 */}
      <div id="blog_4" className="px-modal mfp-hide">
        <div className="single-blog-box">
          <div className="single-blog-img">
            <img src="assets/img/blog-4.jpg" alt="" />
          </div>
          <div className="single-blog-content">
            <h6>10 July, 2022</h6>
            <h2>12 unique example of portfolio websites</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="blog-meta">
              <label>Share</label>
              <ul className="nav social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Snigle 3 */}
      {/* End All Snigle Projects */}
    </>
  );
}

export default App;
