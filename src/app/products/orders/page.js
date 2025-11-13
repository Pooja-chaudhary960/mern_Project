"use client";

import api from "@/api/orders"; 
const { getOrdersByUser } = api; // Destructures the function from the default exported object
import OrderCard from "./_components/Card";

import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

const OrdersPage = () => {
  const [loading, setLoading] = useState(true); 
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //  Function can now be called directly
    getOrdersByUser() 
      .then(response => {
        setOrders(response.data); 
        console.log(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch orders:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
  return(
    <div className="py-10 flex justify-center">
      <Spinner className="w-10 h-10 fill-secondary"/>
    </div>
  );

  return (
    <section className="py-10">
        <h1 className="text-3xl font-semibold mb-5">Order Items</h1>
    <div className="grid grid-cols-1 gap-6 ">
        {orders.map((order, index)=>(
             <OrderCard key={index} order={order}/>
        ))}
  </div>
    </section>
  )
};

export default OrdersPage;