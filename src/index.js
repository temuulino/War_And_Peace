import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import App from "./App";
import Characters from "./Characters";
import MoreChar from "./MoreChar";
import Navigation from "./Navigation";
import NavSlide from "./NavSlide";
import CharMap from "./CharMap";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    {/* <Navigation /> */}
    {/* <NavSlide /> */}
    <Routes>
      <Route path="*" element={<App />} />
      <Route
        path="/characters"
        element={
          <>
            <NavSlide />
            <Characters />
          </>
        }
        component={Characters}
      />
      <Route
        path="/map"
        element={
          <>
            <NavSlide />
            <CharMap />
          </>
        }
        component={CharMap}
      />
      <Route
        path="/characters/morechar"
        element={
          <>
            <NavSlide />
            <MoreChar />
          </>
        }
        component={MoreChar}
      />
      <Route
        path="/map"
        element={
          <>
            <NavSlide />
            <CharMap />
          </>
        }
        component={MoreChar}
      />
    </Routes>
  </Router>
);
