function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: "url(images/banner_1.jpg)" }}
            >
              <div className="banner_category">
                <a href="categories.html">Femmes</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: "url(images/banner_2.jpg)" }}
            >
              <div className="banner_category">
                <a href="categories.html">Enfants</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="banner_item align-items-center"
              style={{ backgroundImage: "url(images/banner_3.jpg)" }}
            >
              <div className="banner_category">
                <a href="categories.html">Hommes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
