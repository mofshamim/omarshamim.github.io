import React, { useState } from "react";
import Routing from "./Routing";
import { themes } from "./utils/theme";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <>
      <Routing theme={themes[theme]} setTheme={setTheme} />
    </>
  );
}

export default App;
