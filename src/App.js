import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';
import Routing from "./Routing";
import { themes } from "./utils/theme";
import { appSettings } from "./utils/appSettings";

function App() {

  useEffect(() => {
    if (appSettings.googleTrackingID) {
      ReactGA.initialize(appSettings.googleTrackingID,);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <>
      <Routing theme={themes[theme]} setTheme={setTheme} />
    </>
  );
}

export default App;
