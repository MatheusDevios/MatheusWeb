import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
// import Testimonials from './components/Testimonials'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project5 from "./pages/project5";
import { Routes, Route } from "react-router-dom";

import AnimatedPages from "./components/AnimatedPages";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100vh",
                }}
              >
                {" "}
                <PacmanLoader
                  className="load"
                  color={"#c21212"}
                  loading={loading}
                  size={30}
                />
              </div>
            ) : (
              <AnimatedPages>
                <section id="home">
                  <Header />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="experience">
                  <Experience />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="portfolio">
                  <Portfolio />
                </section>
                <Nav />
                {/* PUT BACK ONCE GET CLIENTS */}
                {/* <section id='testimonials'><Testimonials /></section> */}
                <section id="contact">
                  <Contact />
                </section>
                <section>
                  <Footer />
                </section>
              </AnimatedPages>
            )}
          </div>
        }
      />
      <Route path="Authentication-and-Security" element={<Project5 />} />
    </Routes>
  );
}

export default App;
