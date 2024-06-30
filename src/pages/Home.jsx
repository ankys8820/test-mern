import Signup from "../features/auth/components/Signup";
import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product/components/ProductList";
import LoginPage from "./LoginPage";

const Home = () => {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <Signup /> */}
      <NavBar>
        <ProductList />
      </NavBar>
    </>
  );
};

export default Home;
