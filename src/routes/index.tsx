import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

function AllRoutes() {
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
