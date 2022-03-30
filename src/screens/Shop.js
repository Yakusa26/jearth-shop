import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";

import { useState, useEffect } from "react";

function Shop() {
  useEffect(() => {
    const cady = localStorage.getItem("cady");
    console.log(typeof cady);
    cady !== "" ? setCount(JSON.parse(cady).length) : setCount(0);
  }, []);

  const [count, setCount] = useState(0);
  const addCount = (number) => {
    setCount(number);
  };
  return (
    <>
      <Header count={count} />
      <ProductsList addCount={addCount} />
      <Footer />
    </>
  );
}

export default Shop;
