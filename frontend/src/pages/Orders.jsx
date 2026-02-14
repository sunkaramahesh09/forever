import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/orders/userorders",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      loadOrders();
    }
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orders.map((order, index) =>
          order.items.map((item, i) => (
            <div
              key={i}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>

                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>

                  <p className="mt-2">
                    Date:{" "}
                    <span className="text-gray-400">
                      {new Date(order.date).toDateString()}
                    </span>
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p
                    className={`min-w-2 h-2 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "Shipped"
                          ? "bg-blue-500"
                          : order.status === "Packing"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                    }`}
                  ></p>

                  <p className="text-sm md:text-base font-medium">
                    {order.status ? order.status : "Order Placed"}
                  </p>
                </div>
                <button
                  onClick={loadOrders}
                  className="border px-4 py-2 text-sm font-medium rounded-sm"
                >
                  Track Order
                </button>
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Orders;
