import Footer from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/userRegister/UserRegister";

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
