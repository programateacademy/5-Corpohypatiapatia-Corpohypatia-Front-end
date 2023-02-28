import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
// import Layout from "./components/layouts/layout/Layout";
import Routes from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./styles/theme";
import AllRoutes from "./routes/Routes";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" && lightTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
        {/* <>
          <Routes />
          <Layout>
            <Routes />
          </Layout>
        </> */}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter } from 'react-router-dom';

// //Components

// import AllRoutes from "./routes/Routes"

// function App() {
// 	return (
// 		<>
// 			<BrowserRouter>
// 				<AllRoutes />
// 			</BrowserRouter>
// 		</>
// 	);
// }

// export default App;
