import { lazy, Suspense } from "react";
import Header from "./components/common/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import Body from "./components/Body";
import Footer from "./components/common/Footer";
// import AboutUs from "./components/common/Navigations/AboutUs";
// import ContactUs from "./components/common/Navigations/ContactUs";
// import Cart from "./components/common/Navigations/Cart";
import Error from "./components/common/Error/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const Body = lazy(() => import("./components/Body"));
const AboutUs = lazy(() => import("./components/common/Navigations/AboutUs"));
const ContactUs = lazy(() =>
  import("./components/common/Navigations/ContactUs")
);
const Cart = lazy(() => import("./components/common/Navigations/Cart"));
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
        element: (
          <Suspense>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: (
          <Suspense>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default App;
