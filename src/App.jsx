import { BrowserRouter } from "react-router-dom";
import Header from "./components/shared/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;