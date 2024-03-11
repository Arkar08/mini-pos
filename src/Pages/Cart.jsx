import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

// eslint-disable-next-line react/prop-types
const Cart = ({ carts, handelAdd, handelMinus, handelDelete, handelClear }) => {

  // eslint-disable-next-line react/prop-types
  const total = carts.reduce((cart, item) => {
    return cart + Math.ceil(item.price * item.quantity);
  }, 0);

  
  return (
    <>
      <Navbar />
      <div className="my-4 px-6">
        <Link to="/pos">
          <span className="font-bold text-2xl hover:text-blue-500 hover:underline">
            Pos
          </span>
        </Link>
        <span className="font-semibold text-xl"> {">"} </span>
        <span className="font-bold text-2xl select-none">Cart</span>
      </div>
      <div className="w-[100%] shadow-xl">
        <h2 className="text-center text-4xl font-bold text-black mt-4">Cart</h2>
        <div className="flex items-center justify-end mx-8">
          <button
            className="text-2xl px-4 bg-black text-white rounded"
            onClick={handelClear}
          >
            Clear all
          </button>
        </div>
    {
      // eslint-disable-next-line react/prop-types
      carts.length === 0 && <p className="text-center text-2xl font-semibold text-red-500">No cart is available</p>
    }
    {
        // eslint-disable-next-line react/prop-types
        carts.map((cart, index) => {
          return (
            <div
              key={index}
              className="grid items-center justify-around px-8 mt-8 grid-cols-2 border h-[100px]"
            >
              <div className="title flex items-center">
                <img src={cart.image} alt="image" className="w-[50px]" />
                <h2 className="px-4">{cart.title}</h2>
              </div>
              <div className="flex items-center justify-center text-center">
                <button
                  className="px-2 bg-green-500 text-center rounded text-white"
                  onClick={() => handelAdd(cart)}
                >
                  +
                </button>
                <h3 className="px-4">{cart.quantity}</h3>
                <button
                  className="px-2  bg-red-700 text-center rounded text-white"
                  onClick={() => handelMinus(cart)}
                >
                  -
                </button>
                <button
                  className="mx-4 px-2 bg-red-500 text-center rounded text-white"
                  onClick={() => handelDelete(cart)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
    }
        <div className="total flex items-center justify-between mt-6 px-8">
          <h2 className="font-bold text-2xl">Total:<span className="font-bold text-2xl mx-4">${total}</span></h2>
          <div className="flex items-center justify-end">
            <button className="px-6 py-2 mb-4 bg-black text-white rounded">Print</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
