import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { FaComments } from "react-icons/fa";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPanel from "./pages/UserPanel";
import { UserContextProvider } from "./context/UserContext"; // ایمپورت پرووایدر

// صفحات
import Home from "./pages/Home";
import Services from "./pages/Services";
import Clinics from "./pages/Clinics";
import Academy from "./pages/Academy";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <UserContextProvider> {/* اینجا */}
      <Router>
        <ScrollProgressBar />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
           <Route path="/user" element={<UserPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* دکمه پشتیبانی */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {isSupportOpen && (
            <div className="backdrop-blur-sm bg-white/70 border border-white/40 text-right p-4 rounded-xl shadow-2xl w-64 animate-fade-in">
              <p className="text-sm text-gray-800 font-semibold">سلام! 👋</p>
              <p className="text-sm text-gray-600 mt-1">
                چطور می‌تونم کمکتون کنم؟
              </p>
              <button
                className="mt-3 text-xs text-blue-600 hover:underline"
                onClick={() => alert("در حال انتقال به چت یا فرم پشتیبانی...")}
              >
                شروع گفتگو
              </button>
            </div>
          )}

          <button
            className="relative flex items-center bg-gradient-to-tr from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white px-5 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 animate-bounce"
            title="پشتیبانی"
            onClick={() => setIsSupportOpen(!isSupportOpen)}
          >
            <span className="absolute inset-0 rounded-full bg-orange-400 opacity-75"></span>
            <FaComments size={24} className="relative z-10 mr-2" />
            <span className="relative z-10 font-medium">پشتیبانی</span>
          </button>
        </div>

        <Footer />
      </Router>
    </UserContextProvider> /* اینجا هم بسته میشه */
  );
}

export default App;
