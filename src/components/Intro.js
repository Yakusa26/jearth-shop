function Intro() {
  return (
    <div
      className="main_slider"
      style={{ backgroundImage: "url(images/32.png)" }}
    >
      <div className="container fill_height">
        <div className="row align-items-center fill_height">
          <div className="col">
            <div className="main_slider_content">
              <h6>Jeans éco responsables pour jeunes</h6>
              <p>
                La marque Jearth est une marque transparente avec ses
                consommateurs ! C’est une marque de vêtements créée à base de
                jeans éco responsables « mode éthique » c’est-à-dire qui
                respectent l’environnement. A l’heure d’aujourd’hui
                l’environnement est un problème majeur il faut donc réellement
                agir en changeant nos habitudes de consommation. Notre marque a
                donc été conçue pour plaire à nos jeunes, ce sont des vêtements
                originaux avec des collaborations avec de nombreux artistes pour
                apporter ce côté stylé et décalé et en même temps, pour
                préserver notre chère planète..
              </p>
              <div className="red_button shop_now_button">
                <a href="/boutique">Acheter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
