import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const cady = localStorage.getItem("cady");
    setCount(JSON.parse(cady).length);
  }, []);
  return (
    <>
      <Header count={count} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
