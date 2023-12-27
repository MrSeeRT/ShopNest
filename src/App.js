import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SignIn from './Pages/Sign/SignIn';
import SignUp from './Pages/Sign/Signup';
import Error404 from './Pages/404_ERROR/ErrorPage';
import Shop from './Pages/Products/Shop';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import { Provider } from "react-redux";
import store from './Redux/Store';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        {/* <Route path="/offer" element={<Offer />}></Route> */}
        {/* <Route path="/product/:_id" element={<ProductDetails />}></Route> */}
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/paymentgateway" element={<Payment />}></Route> */}
        </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/*" element={<Error404 />}></Route>
    
    </Route>


  )
);

function App() {
  return (
    <div >
    <Provider store={store} >

      <RouterProvider router={router} />
      </Provider>

    </div>
  );
}

export default App;