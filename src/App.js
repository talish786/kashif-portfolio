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
            <a data-scroll-nav={3} href="#work">
              Services
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
                    HI! I Am
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
                      <span>kashifsonu5098@gmail.com</span>
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
              <h2>About Me..</h2>
            </div>
            <div className="row gy-4">
              <div className="col-lg-12 ps-xl-5">
                <div className="about-bio">
                  <p>
                    Hello there! I'm Muhammad Kashif, a Pakistani born in 2000.
                    My expertise lies in Graphic Design, Digital Marketing,
                    Social Media Management, Shopify Store Development, Wix
                    Designing, SEO, and front-end implementation. I bring
                    visuals to life through Graphic Design and elevate brands
                    via innovative Digital Marketing strategies. With Social
                    Media Management, I foster connections, while my Shopify and
                    Wix skills create compelling online presences. SEO is my
                    tool to enhance visibility, and front-end implementation
                    ensures seamless user experiences.
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
                      <span>kashifsonu5098@gmail.com</span>
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      <i className="bi-map" /> <span>Multan, PAKISTAN</span>
                    </p>
                  </div>
                </div>
                <div className="about-exp">
                  <blockquote>
                    <i className="fa-solid fa-quote-left" />
                    <p>
                      “Join me on the journey of creative expression and coding
                      excellence.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* Portfolio Section */}
        <section
          id="work"
          data-scroll-index={3}
          className="section work-section"
        >
          <div className="container">
            <div className="section-heading">
              <h6>My Services</h6>
              <h2>My Specialties</h2>
            </div>
            <div className="row gy-5 lightbox-gallery">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="work-box">
                  <div className="work-text">
                    <h4>Graphic Designing</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="work-box">
                  <div className="work-text">
                    <h4>Digital Marketing</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="work-box">
                  <div className="work-text">
                    <h4>Social Media Management</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="work-box">
                  <div className="work-text">
                    <h4>Shopify Store Development</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="work-box">
                  <div className="work-text">
                    <h4>Wix Designing</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <div className="work-box">
                  <div className="work-text">
                    <h4>SEO</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
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
