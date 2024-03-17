import  Hero  from "./components/Hero";
import  Highlights  from "./components/Highlights";
import  Navbar  from "./components/Navbar";
import  Model  from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  
  return (
    <main className="bg-black">
      <Navbar /><br /><br />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Footer />
     
    </main>
  );
};

export default Sentry.withProfiler(App);