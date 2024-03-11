import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pos from "./Pages/Pos";
import { useEffect, useState } from "react";
import Cart from "./Pages/Cart";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setLoading(true);
    setProducts(data);
  };

  const handleChange = (item) => {
    const changeValue = products.find((p) => {
      return p.id === item.id;
    });
    if (changeValue) {
      setCarts([...carts, { ...item, quantity: 1 }]);
      toast.success("Success Notification !");
    } 
  };
  const handelAdd = (item) => {
    const filterProduct = products.find((p) => {
      return p.id === item.id;
    });
    if (filterProduct) {
      setCarts(
        carts.map((cart) => {
          return cart.id === item.id
            ? {
                ...cart,
                quantity: cart.quantity + 1,
              }
            : cart;
        })
      );
    }
  };

  const handelMinus = (item) => {
    const newChoice = carts.find((c) => {
      return c.id === item.id;
    });
    if (newChoice) {
      if (newChoice.quantity === 1) {
        return setCarts(
          carts.filter((cho) => {
            return cho.id !== item.id;
          })
        );
      } else {
        return setCarts(
          carts.map((dat) => {
            return dat.id === item.id
              ? { ...dat, quantity: newChoice.quantity - 1 }
              : dat;
          })
        );
      }
    }
  };

  const handelDelete = (item) => {
    const newChoice = carts.find((c) => {
      return c.id === item.id;
    });
    if (newChoice) {
      setCarts(
        carts.filter((cart) => {
          return cart.id !== item.id;
        })
      );
    }
    toast.error("Delete successfully!");
  };
  const handelClear = () => {
    setCarts([]);
    toast.error("Clear successfully!");
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pos"
            element={
              <Pos
                products={products}
                handleChange={handleChange}
                loading={loading}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                carts={carts}
                handelAdd={handelAdd}
                handelMinus={handelMinus}
                handelDelete={handelDelete}
                handelClear={handelClear}
              />
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
