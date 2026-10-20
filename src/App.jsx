import { BrowserRouter } from "react-router-dom";
import Header from "./components/shared/Navbar";
import AppRoutes from "./routes/AppRoutes";
import ProductList from "./components/user/ProductGrid";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <ProductList/>
    </BrowserRouter>
  );
}

export default App;