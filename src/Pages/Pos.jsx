import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

// eslint-disable-next-line react/prop-types
const Pos = ({ products, handleChange, loading }) => {
  return (
    <div>
      <Navbar />
      <Main products={products} handleChange={handleChange} loading={loading} />
    </div>
  );
};

export default Pos;
