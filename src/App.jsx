import { useState, Suspense,useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import FirstProject from "./pages/Project/firstProject";
import SecondProject from "./pages/Project/secondProject";
import ThirdProject from "./pages/Project/thirdProject";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
      <Suspense fallback={"Loading"}>
          <Router>
              <Routes>
                  <Route exact path={"/"} element={<Main/>}/>
                  <Route exact path={"/1"} element={<FirstProject/>}/>
                  <Route exact path={"/2"} element={<SecondProject/>}/>
                  <Route exact path={"/3"} element={<ThirdProject/>}/>
              </Routes>
              {/*<Navigation />*/}
              {/*<Header/>*/}
              {/*<Features data={landingPageData.Features} />*/}
              {/*<About data={landingPageData.About} />*/}
              {/*<Services data={landingPageData.Services} />*/}
              {/*<Gallery data={landingPageData.Gallery}/>*/}
              {/*<Testimonials data={landingPageData.Testimonials} />*/}
              {/*<Team data={landingPageData.Team} />*/}
              {/*<Contact data={landingPageData.Contact} />*/}
          </Router>
      </Suspense>
  );
};

export default App;
