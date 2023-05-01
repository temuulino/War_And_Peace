import "./styles.css";
import Homepage from "./Homepage";
import Characters from "./Characters";
import MoreChar from "./MoreChar";
import NavSlide from "./NavSlide";
import CharMap from "./CharMap";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {/* {pathname !== "/" && <NavSlide />} */}
      <Routes>
        <Route path="/" element={<Homepage />} component={Homepage} />
        <Route
          path="/characters"
          element={
            <>
              <Characters />
              <NavSlide />{" "}
            </>
          }
          component={Characters}
        />
        <Route path="/map" element={<CharMap />} component={CharMap} />
        <Route
          path="/characters/morechar"
          element={
            <>
              <MoreChar />
              <NavSlide />
            </>
          }
          component={MoreChar}
        />
      </Routes>
    </div>
  );
}

export default App;
