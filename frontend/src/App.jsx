// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Quiz from "./pages/Quiz";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Supplements from "./pages/Supplements";
// import Learn from "./pages/Learn";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function App(){
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/quiz" element={<Quiz/>} />
//         <Route path="/products" element={<Products/>} />
//         <Route path="/products/:skinType" element={<Products/>} />
//         <Route path="/products/details/:id" element={<ProductDetails/>} />
//         <Route path="/cart" element={<Cart/>} />
//         <Route path="/checkout" element={<Checkout/>} />
//         <Route path="/supplements" element={<Supplements/>} />
//         <Route path="/learn" element={<Learn/>} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/signup" element={<Signup/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Supplements from "./pages/Supplements";
import Learn from "./pages/Learn";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// CONTEXT
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:skinType" element={<Products />} />
          <Route path="/products/details/:id" element={<ProductDetails />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Other pages */}
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

