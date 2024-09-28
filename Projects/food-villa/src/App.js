import { lazy, Suspense } from "react";
import Header from "./components/common/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Error from "./components/common/Error/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";

const Instamart = lazy(() =>
  import("./components/common/Navigations/Instamart")
);
const Body = lazy(() => import("./components/Body"));
const AboutUs = lazy(() => import("./components/common/Navigations/AboutUs"));
const ContactUs = lazy(() =>
  import("./components/common/Navigations/ContactUs")
);
const Cart = lazy(() => import("./components/common/Navigations/Cart"));
// Define the App component
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
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
