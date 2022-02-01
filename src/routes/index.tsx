import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import ReactGA from "react-ga4";

import { useEffect } from "react";
ReactGA.initialize(process.env.REACT_APP_GA_ID!);

function AllRoutes() {
  useEffect(() => {
    console.log(process.env.REACT_APP_GA_ID);
    ReactGA.send("Portfolio home page");
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;
