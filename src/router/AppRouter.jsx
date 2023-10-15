import { Routes, Route } from "react-router-dom";
import { routes } from "../helpers/routes";
import Finishes from "../pages/Finishes";

import Home from "../pages/Home";
import Cleaning from "../pages/Cleaning";
import Facilities from "../pages/Facilities";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.cleaning} element={<Cleaning />} />
      <Route path={routes.finishes} element={<Finishes />} />
      <Route path={routes.facilities} element={<Facilities />} />
    </Routes>
  );
}
