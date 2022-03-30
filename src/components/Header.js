function Header(props) {
  return (
    <header className="header trans_300">
      {/* <!-- Top Navigation --> */}
      <div className="top_nav">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">
                Livraison gratuite pour tout panier supérieur à 150€
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  <li className="account">
                    <a href="#">
                      Mon compte
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="account_selection">
                      <li>
                        <a href="#">
                          <i className="fa fa-sign-in" aria-hidden="false"></i>
                          Se connecter
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                          S'inscrire
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Main Navigation --> */}
      <div className="main_nav_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <div className="logo_container">
                <img style={{ width: "200px" }} src="images/logo.png" />
              </div>
              <nav className="navbar">
                <ul className="navbar_menu">
                  <li>
                    <a href="/accueil">Accueil</a>
                  </li>
                  <li>
                    <a href="/boutique">Boutique</a>
                  </li>
                  <li>
                    <a href="/contact">contact</a>
                  </li>
                </ul>
                <ul className="navbar_user">
                  <li className="checkout">
                    <a href="/panier">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      {props.count > 0 ? (
                        <span id="checkout_items" className="checkout_items">
                          {props.count}
                        </span>
                      ) : null}
                    </a>
                  </li>
                </ul>
                <div className="hamburger_container">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
