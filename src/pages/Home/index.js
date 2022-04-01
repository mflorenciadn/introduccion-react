import ProductsList from "../../components/ProductsList";
import Banner from "../../components/Banner";
import products from "../../data/products";
import "./Home.css";

const Home = () => (
  <>
    <Banner />
    <ProductsList products={products} />
  </>
);

export default Home;
