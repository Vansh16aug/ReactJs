import Header from "./components/common/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/common/Footer";
import AboutUs from "./components/common/Navigations/AboutUs";
import ContactUs from "./components/common/Navigations/ContactUs";
import Cart from "./components/common/Navigations/Cart";
import Error from "./components/common/Error/Error";
import RestrauntMenu from "./components/RestrauntMenu";

// Define the App component
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// Define the routes using createBrowserRouter
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default App;
