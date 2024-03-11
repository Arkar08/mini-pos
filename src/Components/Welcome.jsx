import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center text-center flex-col mt-8">
      <h2 className="text-3xl font-bold">Welcome to my mini pos system</h2>
      <h3 className="text-2xl mt-4">
        Plz click button let go to watch product
      </h3>
      <Link
        to="/pos"
        className="w-[100px] bg-black text-xl text-white text-center border-none outline-none mt-8 h-[50px] flex items-center justify-center rounded"
      >
        Click Me
      </Link>
    </div>
  );
};

export default Welcome;
