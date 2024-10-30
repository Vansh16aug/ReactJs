import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag } from "lucide-react";

const SuccessfulOrderPage = () => {
  const latestOrder = useSelector((state) => {
    const orders = state.order.items;
    return orders.length > 0 ? orders[orders.length - 1] : null;
  });

  if (!latestOrder) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            No order found
          </h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <h1 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
              Order Placed Successfully!
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Thank you for your purchase. Your order has been received and is
              being processed.
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">
                Order Summary
              </h2>
              <dl className="mt-2 divide-y divide-gray-200">
                <div className="py-3 flex justify-between text-sm font-medium">
                  <dt className="text-gray-500">Order ID</dt>
                  <dd className="text-gray-900">{latestOrder._id}</dd>
                </div>
                <div className="py-3 flex justify-between text-sm font-medium">
                  <dt className="text-gray-500">Total Amount</dt>
                  <dd className="text-gray-900">
                    ₹{latestOrder.totalAmount.toFixed(2)}
                  </dd>
                </div>
                <div className="py-3 flex justify-between text-sm font-medium">
                  <dt className="text-gray-500">Shipping Address</dt>
                  <dd className="text-gray-900">
                    {latestOrder.shippingInfo.address},{" "}
                    {latestOrder.shippingInfo.city},{" "}
                    {latestOrder.shippingInfo.country}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Order Items</h3>
              <ul className="mt-2 divide-y divide-gray-200">
                {latestOrder.items.map((item) => (
                  <li
                    key={item._id}
                    className="py-3 flex justify-between text-sm"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrderPage;
