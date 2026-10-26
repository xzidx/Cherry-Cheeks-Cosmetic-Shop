import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/shared/Footer";
import CategoryFilter from "./components/user/CategoryFilter";
import CartItem from "./components/user/CartItem";

function App() {
  return (
    <BrowserRouter>
    <CartItem/>
    <AppRoutes />
    </BrowserRouter>
  );
}

export default App;