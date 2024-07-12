// import logo from './logo.svg';
// import './App.css';
// import Navigation from './customer/components/Navigation/Navigation';
// import HomePage from './customer/pages/HomePage';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';
// import Cart from './customer/components/Cart/Cart';
// import Checkout from './customer/components/Checkout/Checkout';
// function App() {
//   return (
//     <div className="">
//       <Navigation/>
//       <div>
//         {/* <HomePage/> */}
//         {/* <Product/> */}
//         {/* <ProductDetails/> */}
//         {/* <Cart/> */}
//         <Checkout/>
//       </div>
//     </div>
//   );
// }

// export default App;

// // import { Route, Routes } from "react-router-dom";
// // import { Provider } from 'react-redux';
// // import "./App.css";
// // import Navigation from "./customer/components/Navbar/Navigation";
// // import CustomerRoutes from "./Routers/CustomerRoutes";
// // import AdminRoutes from "./Routers/AdminRoutes";
// // import NotFound from "./Pages/Notfound";
// // import AdminPannel from "./Admin/AdminPannel";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useEffect } from "react";
// // import { getUser } from "./Redux/Auth/Action";
// // import Routers from './Routers/Routers';

// // function App() {
// //   const {auth}=useSelector(store=>store);
// //   const dispatch = useDispatch();
// //   const jwt = localStorage.getItem("jwt");
// //   useEffect(() => {
// //     if (jwt) {
// //       dispatch(getUser(jwt));
// //     }
// //   }, [jwt]);
// //   return (
// //     <div className="">
// //       <Routes>
// //         <Route path="/*" element={<CustomerRoutes />} />
// //        {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<AdminPannel />} />}
// //       </Routes>
// //     </div>
// //   );
// // }

// // // function App(){
// // //   return (
// // //     <div className="">
// // //       <Routes>
// // //       <Route path="/*" element={<CustomerRoutes />} />
// // //       </Routes>
// // //       <div>
        
// // //       </div>
// // //     </div>
    
// // //   );
// // // }

// // export default App;




import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "../src/customer/components/Navigation/Navigation";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRoutes from "./Routers/AdminRoutes";
import NotFound from "./Pages/Notfound";
import AdminPannel from "./Admin/AdminPannel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./Redux/Auth/Action";
// import Routers from './Routers/Routers';

function App() {
  const {auth}=useSelector(store=>store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
       {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<AdminPannel />} />}
      </Routes>
    </div>
  );
}

export default App;
