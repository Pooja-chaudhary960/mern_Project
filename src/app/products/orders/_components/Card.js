import { FaImage } from "react-icons/fa6";
import Image from "next/image";
const OrderCard = ({order}) => {
  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
    <div className="py-4 px-6">
        <div className="flex items-center justify-between ">
            <h3 className="font-medium">Order Number: #{order.orderNumber}</h3>
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900">{order.status}</span>
        </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {order.orderItems.map((item, index)=>(
            <div
            key={index}
            className="border border-gray-200 bg-gray-50 rounded-md px-4 py-2">
        <div className="flex items-center gap-4">
        {item.product?.imageUrls && item.product.imageUrls[0] ? (
              <Image
                src={item.product.imageUrls[0]}
                alt={item.product?.name || "Product Image"}
                width={100}
                height={100}
                className="h-24 w-24 object-cover rounded-md border-gray-200"
              />
            ) : (
            <FaImage/>
            )}
            <div>
            <h4 className="text-lg font-medium text-gray-800">{item.product?.name}</h4>
            <p className="text-gray-600">
               Total: Rs. {item.product.price} X {item.quantity}</p>
            </div>
        </div>
        </div>
        ))}
       </div>
       <div className="flex justify-between items-center bg-gray-100 py-2 px-6">
        <p className="font-medium">Total: {order.totalPrice}</p>
        <button className="bg-primary rounded-md shadow text-white px-4 py-1 text-sm">Payment</button>
       </div>
    </div>
    </div>
  );
};
export default OrderCard;
