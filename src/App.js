import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/userRegister/UserRegister";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import Form1 from "./pages/projectCreate/Form1"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
