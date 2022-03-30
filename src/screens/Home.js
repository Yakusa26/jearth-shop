import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";

import { useEffect, useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const cady = localStorage.getItem("cady");
    cady !== "" ? setCount(JSON.parse(cady).length) : setCount(0);
  }, []);
  return (
    <>
      <Header count={count} />
      <Intro />
      <Benefits />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
