import "./App.css";
import Header from "./components/header/Header";
import Particles from "./components/Particles/Particles";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import SoftwareDev from "./pages/SoftwareDev";
import DataScience from "./pages/DataScience";
import Footer from "./components/footer/Footer";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import React from "react";
import StockMarketPrediction from "./pages/StockMarketPrediction";

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="Particles d-flex flex-column ">
        <Particles />
      </div>

      <div className="mainWrapper">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/software-developer" element={<SoftwareDev />} />
          <Route exact path="/software-dev" element={<SoftwareDev />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/data-science" element={<DataScience />} />
          <Route
            exact
            path="/data-science/stock-market-prediction"
            element={<StockMarketPrediction />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

/*

*/
