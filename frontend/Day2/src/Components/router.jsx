import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./pages/navigation";
import Product from "./pages/Product/Product";
import Home from "./pages/Home";
import Footer from "./pages/Footer";


const Router = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      {!isAdmin && <Navigation />}
      <Routes>
        {!isAdmin && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/pro" element={<Product />} />
            <Route path="/login" element={<Home />} />
    
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/admin" element={<AttendanceDashboard />} />
            <Route path="/theme" element={<ManageThemesPage />} />
          </>
        )}

        <Route path="*" element={<Notfound />} />
      </Routes>
      {!isAdmin && <Footer />}
    </div>
  );
};

export default Router;