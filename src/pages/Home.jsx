import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product/ProductList";

const Home = () => {
  return (
    <>
      <NavBar>
        <ProductList />
      </NavBar>
    </>
  );
};

export default Home;
