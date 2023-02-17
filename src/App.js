import React from "react";
import { BrowserRouter } from 'react-router-dom';

//Components
import AllRoutes from "./routes/Routes"

function App() {
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}
export default App;

// import Footer from "./components/layouts/footer/Footer";
// import Header from "./components/layouts/header/Header";
// import Home from "./pages/home/Home";
// //import Home from "./pages/home/Home"

// function App() {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

// export default App;