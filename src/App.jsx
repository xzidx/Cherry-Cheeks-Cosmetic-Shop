import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/shared/Footer";
import CategoryFilter from "./components/user/CategoryFilter";

function App() {
  return (
    // <BrowserRouter>
    <CategoryFilter/>
    //   <AppRoutes />
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;