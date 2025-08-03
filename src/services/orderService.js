import Order from '../models/Order.js';
import crypto from 'crypto';

const getOrders = async () => {
  const orders = await Order.find().
  populate("orderItems.product")
  .populate("user",['name','email','phone','address']);
  return orders;
};

const createOrder = async (data, userId) => {
  // Generate a unique order number using crypto
  const orderNumber = crypto.randomUUID();

  // Create a new order document with the data, userId, and generated order number
  return await Order.create({
    ...data,
    userId,
    orderNumber
  });
  };
  const deleteOrder = async (id) =>{
    return await Order.findByIdAndDelete(id);
  };


export default { getOrders, createOrder, deleteOrder };
