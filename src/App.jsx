import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Category from "./components/Category";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProductList />
                <Category />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
