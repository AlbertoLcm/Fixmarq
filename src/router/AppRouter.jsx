import { Routes, Route } from "react-router-dom";
import { routes } from "../helpers/routes";
import { Suspense, lazy } from "react";
import Finishes from "../pages/Finishes";

const Home = lazy(() => import("../pages/Home"));
const Cleaning = lazy(() => import("../pages/Cleaning"));
const Facilities = lazy(() => import("../pages/Facilities"));

export default function AppRouter() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.cleaning} element={<Cleaning />} />
        <Route path={routes.finishes} element={<Finishes />} />
        <Route path={routes.facilities} element={<Facilities />} />
      </Routes>
    </Suspense>
  );
}
