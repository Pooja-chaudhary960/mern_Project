
import orderService from "../services/orderService.js";

const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const data = await orderService.getOrdersByUser(req.user._id);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOrderById = async (req, res) => {
  try {
    const data = await orderService.getOrderById(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};


const createOrder = async (req, res) => {
  const input = req.body;

  // Validate order items
  if (!input.orderItems || !input.orderItems.length) {
    return res.status(400).send("Order items are required.");
  }

  // Validate that each order item has product and quantity
  for (let item of input.orderItems) {
    if (!item.product || !item.quantity) {
      return res.status(400).send("Each order item must have a product and quantity.");
    }
  }

  try {
    // Call the service with the user ID and the input data
    const data = await orderService.createOrder(input, req.user._id); // Ensure req.user._id is set in your auth middleware
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const data = await orderService.updateOrder(req.params.id, req.body);

    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};


const deleteOrder = async (req, res) => {
  try {
    await orderService.deleteOrder(req.params.id);

    res.send("Order deleted successfully.");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export default { getOrders, createOrder , deleteOrder,getOrdersByUser, getOrderById, updateOrder};
