function Benefits() {
  return (
    <div className="benefit">
      <div className="container">
        <div className="row benefit_row">
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-truck" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>Livraison gratuite</h6>
                <p>Au-delà de 150€ d'achat</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-money" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>Payer en espèce</h6>
                <p>Payer à la livraison</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-undo" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>Retour sous 45 jours</h6>
                <p>Colis endommagé, pas conforme.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 benefit_col">
            <div className="benefit_item d-flex flex-row align-items-center">
              <div className="benefit_icon">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </div>
              <div className="benefit_content">
                <h6>Ouvert toute la semaine</h6>
                <p>8H30 - 21H00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Benefits;
