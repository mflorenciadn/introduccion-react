import CupcakesList from "../../components/CupcakesList";
import Banner from "../../components/Banner";
import products from "../../data/products";
import "./Home.css";

const Home = () => (
  <>
    <Banner />
    <CupcakesList products={products} />
  </>
);

export default Home;
