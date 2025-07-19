import { ShoppingCart, Search, X } from "lucide-react";
import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "محصول اول", price: 120000 },
    { id: 2, title: "محصول دوم", price: 250000 },
    { id: 3, title: "محصول سوم", price: 98000 },
  ]);

  const cartRef = useRef(null);
  const cartIconRef = useRef(null);
  const navigate = useNavigate();

  const toggleCart = (e) => {
    e.stopPropagation();
    setCartOpen(!cartOpen);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        cartIconRef.current &&
        !cartIconRef.current.contains(e.target) &&
        cartRef.current &&
        !cartRef.current.contains(e.target)
      ) {
        setCartOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const formatPrice = (price) =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const goHome = () => {
    navigate("/");
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4" style={{ direction: "rtl" }}>
          <div className="relative">
            <ShoppingCart
              ref={cartIconRef}
              onClick={toggleCart}
              className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors"
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

            {cartOpen && (
              <div
                ref={cartRef}
                className="fixed top-16 left-70 w-80 bg-white border border-gray-300 rounded-lg shadow-2xl p-5 z-50 text-right"
                style={{ direction: "rtl" }}
              >
                <h3 className="font-bold text-lg mb-3 border-b border-gray-200 pb-2">سبد خرید شما</h3>
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-10">سبد خرید شما خالی است.</p>
                ) : (
                  <>
                    <ul className="max-h-60 overflow-y-auto space-y-3">
                      {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500">{formatPrice(item.price)} تومان</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                            title="حذف محصول"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex justify-between items-center font-semibold border-t border-gray-300 pt-3">
                      <span>جمع کل:</span>
                      <span>
                        {formatPrice(cartItems.reduce((sum, item) => sum + item.price, 0))} تومان
                      </span>
                    </div>

                    <button
                      onClick={() => alert("ادامه خرید")}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      ادامه خرید
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <Search className="w-5 h-5 text-gray-600 cursor-pointer" />

          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/user"
                className="text-green-600 font-semibold cursor-pointer hover:underline"
              >
                خوش آمدید، {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 border border-red-500 px-3 py-1 rounded-md hover:bg-red-100 transition"
              >
                خروج
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="flex items-center justify-center w-44 px-4 py-2 cursor-pointer rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              ورود و ثبت نام
            </button>
          )}
        </div>

        <nav className="hidden md:flex flex-row-reverse items-center space-x-6 text-gray-700 font-medium text-lg">
          <Link to="/" className="menu-item hover:text-blue-600">صفحه اصلی</Link>
          <Link to="/services" className="menu-item hover:text-blue-600">خدمات</Link>
          <Link to="/clinics" className="menu-item hover:text-blue-600">کلینیک ها</Link>
          <Link to="/academy" className="menu-item hover:text-blue-600">آکادمی</Link>
          <Link to="/order" className="menu-item hover:text-blue-600">ثبت سفارش</Link>
          <Link to="/contact" className="menu-item hover:text-blue-600 mr-6">تماس</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="لوگو"
            className="w-24 cursor-pointer"
            onClick={goHome}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-slide-in {
          animation: fadeSlideIn 0.4s ease forwards;
        }
        @keyframes pulseSmooth {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        .animate-pulse-smooth {
          animation: pulseSmooth 2s infinite;
        }

        .menu-item {
          transition: transform 0.3s ease, color 0.3s ease;
          display: inline-block;
          position: relative;
        }

        .menu-item:hover {
          transform: scale(1.1);
          color: #2563eb;
        }

        .menu-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #2563eb;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .menu-item:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </header>
  );
}
