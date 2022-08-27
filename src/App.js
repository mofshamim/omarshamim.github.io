import React, { useState, useEffect } from "react";
import ReactGA from 'react-ga';
import Routing from "./Routing";
import { ThemeProvider } from "styled-components";

import { appSettings } from "./utils/appSettings";
import { themes } from "./utils/theme";
import { GlobalStyles } from "./utils/globalStyles";


function App() {

  useEffect(() => {
    if (appSettings.googleTrackingID) {
      ReactGA.initialize(appSettings.googleTrackingID,);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <Routing theme={themes[theme]} setTheme={setTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
