import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Main = ({ products, handleChange, loading }) => {
  return (
    <>
      <div className="my-4 px-6">
        <Link to="/">
          <span className="font-bold text-2xl hover:text-blue-500 hover:underline">
            Home
          </span>
        </Link>
        <span className="font-semibold text-xl"> {">"} </span>
        <span className="font-bold text-2xl select-none">Pos</span>
        <span className="font-semibold text-xl"> {">"} </span>
        <Link to="/cart">
          <span className="font-bold text-2xl  hover:text-blue-500 hover:underline">
            Cart
          </span>
        </Link>
      </div>
      {!loading ? (
        <div>
          <h2 className="flex justify-center items-center text-center font-bold text-4xl">
            Loading
          </h2>
        </div>
      ) : (
        <div className="container-fluid mt-4 px-4 w-[100%] flex flex-col items-center justify-center">
          <div className="row grid grid-flow-col">
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 w-[100%]">
              {products &&
                // eslint-disable-next-line react/prop-types
                products.map((product, index) => {
                  return (
                    <div
                      className="card w-[200px] h-[300px] border rounded shadow-lg flex flex-col justify-between items-center"
                      key={index}
                    >
                      <img
                        src={product.image}
                        alt="product_image"
                        className="w-[100%] h-[150px] p-4 object-cover object-center"
                      />
                      <div className="title flex flex-col justify-center items-center overflow-hidden px-4">
                        <h2 className="font-bold text-xl text-red-400">
                          {product.title}
                        </h2>
                        <h3 className="font-bold text-xl">${product.price}</h3>
                      </div>
                      <div className="w-[70%] flex items-center justify-center my-4 text-center bg-gray-500 mx-[auto] py-2 hover:bg-blue-400 rounded cursor-pointer border-none outline-none">
                        <Link to="/cart">
                          <button
                            className="text-xl text-white font-bold"
                            onClick={() => handleChange(product)}
                          >
                            Add to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
