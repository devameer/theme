import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
// import { ThemeProvider } from "styled-components";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { blueTheme, darkTheme, lightTheme } from "./global/theme";
// import { GlobalStyle } from "./global/style";
import { router as routes } from "./router";
export const ThemeContext = React.createContext(null);

const App = () => {
  const router = useRoutes(routes);
  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   const my = setInterval(changeTheme, 2000);
  //   return () => clearInterval(my);
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        {/* <GlobalStyle /> */}
        <Header />
        {/* {theme.theme} */}
        {router}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
