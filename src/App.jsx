import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;