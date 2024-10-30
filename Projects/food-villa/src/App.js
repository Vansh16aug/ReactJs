import { lazy, Suspense } from "react";
import Header from "./components/common/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Error from "./components/common/Error/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginComponent from "./components/auth/Login";
import RegisterComponent from "./components/auth/Register";
import Checkout from "./components/Checkout";
import SuccessfulOrderPage from "./components/SuccessfulOrder";
const Body = lazy(() => import("./components/Body"));
const ContactUs = lazy(() =>
  import("./components/common/Navigations/ContactUs")
);
const Cart = lazy(() => import("./components/common/Navigations/Cart"));

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

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
        path: "contact",
        element: (
          <Suspense>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense>
            <LoginComponent />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense>
            <RegisterComponent />
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
        path: "checkout",
        element: (
          <Suspense>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "order-success",
        element: (
          <Suspense>
            <SuccessfulOrderPage />
          </Suspense>
        ),
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
