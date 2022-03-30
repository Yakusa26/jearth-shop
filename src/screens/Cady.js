import Header from "../components/Header";
import Footer from "../components/Footer";
import CadyProducts from "../components/CadyProducts";

import { useState, useEffect } from "react";
import Benefits from "../components/Benefits";

function Cady() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cady = localStorage.getItem("cady");
    setCount(JSON.parse(cady).length);
  }, []);

  const addCount = (number) => {
    setCount(number);
  };

  return (
    <>
      <Header count={count} />
      <CadyProducts addCount={addCount} />
    </>
  );
}

export default Cady;
