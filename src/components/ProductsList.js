import Products from "../data/products.json";
import { useState, useEffect } from "react";

function ProductsList(props) {
  const [cady, setCady] = useState([]);

  useEffect(() => {
    const cady = localStorage.getItem("cady");
    cady !== "" ? setCady(JSON.parse(cady)) : setCady([]);
  }, []);

  const addProduct = (product) => {
    let allCady = cady;
    allCady.push(product);
    setCady(allCady);
    props.addCount(cady.length);
    localStorage.setItem("cady", JSON.stringify(cady));
  };

  return (
    <div className="new_arrivals benefit">
      <div className="container">
        <div className="row align-items-center">
          <div className="col text-center">
            <div className="new_arrivals_sorting">
              <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                  data-filter="*"
                >
                  Tout
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                  data-filter=".women"
                >
                  Femmes
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                  data-filter=".child"
                >
                  Enfants
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                  data-filter=".men"
                >
                  Hommes
                </li>
                <li
                  className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                  data-filter=".unisexe"
                >
                  Unisexe
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div
              className="product-grid"
              data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
            >
              {/* Products */}
              {Products.map((product) => (
                <div
                  key={product.product_name}
                  className={`product-item ${product.product_category}`}
                >
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img
                        style={{ width: "50%" }}
                        src={product.product_image}
                        alt=""
                      />
                    </div>
                    <div className="favorite favorite_left"></div>
                    {product.product_reduction > 0 ? (
                      <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                        <span>-{product.product_reduction}€</span>
                      </div>
                    ) : null}
                    <div className="product_info mb-4">
                      <h6 className="product_name">
                        <a href="single.html">{product.product_name}</a>
                      </h6>
                      {product.product_reduction > 0 ? (
                        <div className="product_price mb-4">
                          {product.product_price - product.product_reduction}€
                          <span>{product.product_price}€</span>
                        </div>
                      ) : (
                        <div className="product_price mb-4">
                          {product.product_price}€
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button">
                    <a
                      onClick={() => {
                        addProduct(product);
                      }}
                    >
                      Ajouter
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsList;
