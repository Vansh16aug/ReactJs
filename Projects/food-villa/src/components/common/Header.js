import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  Home,
  Info,
  Phone,
  ShoppingCart,
  LogOut,
  LogIn,
  Loader2,
  SignalHigh,
  SignalLow,
  Flame,
  Menu,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginSuccess, logout } from "../../redux/auth/authSlice";
import axios from "axios";

export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOnline, setIsOnline] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);

  // Check online status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.success("You are back online!");
    };
    const handleOffline = () => {
      setIsOnline(false);
      toast.error("You are offline. Please check your connection.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Check authentication status
  useEffect(() => {
    const fetchAuthStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/status",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.user) {
          dispatch(loginSuccess(response.data.user));
          toast.success("Welcome back!");
        }
      } catch (err) {
        console.error("Error fetching auth status:", err);
        localStorage.removeItem("token");
        toast.error("Session expired. Please login again.");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchAuthStatus();
  }, [dispatch, navigate]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      dispatch(logout());
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error during logout");
    }
  };

  const NavItem = ({ path, label, icon: Icon }) => (
    <Link
      to={path}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
        hover:bg-gray-100 dark:hover:bg-gray-800
        ${
          location.pathname === path
            ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            : "text-gray-600 dark:text-gray-300"
        }`}
      onClick={() => setIsMenuOpen(false)}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
      {path === "/cart" && cartItems?.length > 0 && (
        <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
          {cartItems.length}
        </span>
      )}
    </Link>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-16">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <Flame className="w-6 h-6" />
            </div>
            <span className="hidden sm:inline-block font-bold text-xl text-gray-900 dark:text-white">
              Goala Foods
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <NavItem path="/" label="Home" icon={Home} />
            <NavItem path="/contact" label="Contact" icon={Phone} />
            <NavItem path="/cart" label="Cart" icon={ShoppingCart} />
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Internet Status */}
            <div
              className="flex items-center"
              title={isOnline ? "Online" : "Offline"}
            >
              {isOnline ? (
                <SignalHigh className="w-4 h-4 text-green-500" />
              ) : (
                <SignalLow className="w-4 h-4 text-red-500" />
              )}
            </div>

            {/* User Section */}
            {user ? (
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline-block font-medium text-gray-900 dark:text-white">
                  {user.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline-block">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline-block">Login</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden px-4 py-2 bg-white dark:bg-gray-900 border-t">
            <NavItem path="/" label="Home" icon={Home} />
            <NavItem path="/about" label="About" icon={Info} />
            <NavItem path="/contact" label="Contact" icon={Phone} />
            <NavItem path="/cart" label="Cart" icon={ShoppingCart} />
          </nav>
        )}
      </header>
    </>
  );
}
