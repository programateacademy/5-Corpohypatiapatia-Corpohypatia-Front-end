// import Footer from "./components/layouts/footer/Footer";
// import Header from "./components/layouts/header/Header";
// import Home from "./pages/home/Home"
// import Login from "./pages/login/Login";
// import Register from "./pages/userRegister/UserRegister";
// import ProjectDetails from "./pages/projectDetails/ProjectDetails";
// import Form1 from "./pages/projectCreate/Form1"

// function App() {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   );
// }
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/layouts/Layout/Layout";
import AllRoutes from "./Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./styles/theme";

export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" && lightTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - Code Focus</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                    <Layout>
                        <AllRoutes />
                    </Layout>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;