import { useState, useEffect } from "react";

function CadyProducts(props) {
  const [cady, setCady] = useState([]);

  useEffect(() => {
    const storedCady = localStorage.getItem("cady");
    setCady(JSON.parse(storedCady));
    console.log(cady);
  }, []);

  const deleteProduct = (cady, elt) => {
    var filtered = cady.filter(function (value, index, arr) {
      return value.product_name !== elt.product_name;
    });
    setCady(filtered);
  };

  return (
    <div className="container benefit">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div
            className="product-grid"
            data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
          >
            {/* Products */}
            {cady.map((product) => (
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
                      <span>{product.product_reduction}€</span>
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
                <div className="delete_button delete_to_cart_button">
                  <a
                    onClick={() => {
                      deleteProduct(cady, product);
                    }}
                  >
                    supprimer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CadyProducts;
