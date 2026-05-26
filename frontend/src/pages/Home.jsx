import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
         <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white">

  <div className="flex flex-col items-center justify-center pt-20">

    <h1 className="text-5xl font-bold text-cyan-400 tracking-wide">
      Trending Collection
    </h1>

    <p className="text-gray-400 mt-4 text-lg">
      Discover premium fashion products
    </p>

    <Link
      to="/shop"
      className="mt-6 bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white font-semibold rounded-xl py-3 px-8 shadow-lg"
    >
      Explore Shop
    </Link>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 mt-16">
    {data.products.map((product) => (
      <div key={product._id}>
        <Product product={product} />
      </div>
    ))}
  </div>

</div>
        </>
      )}
    </>
  );
};

export default Home;
