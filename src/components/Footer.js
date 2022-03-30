function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
              <ul className="footer_nav">
                <li>
                  <a href="/contact">Contacter nous</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Jearth-Shop-110147591649343"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jearth-shop-5381ab236/"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/jearth.shop/?utm_medium=copy_link"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_nav_container">
              <div className="cr">
                ©2022 Jearth. Tout droit reservé. Powered{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a target="_blank" href="http://www.maritasdenim.com/">
                  Maritaş Denim
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
