import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import All from "./components/Categories/All";
import Electronics from "./components/Categories/Electronics";
import Groceries from "./components/Categories/Groceries";
import Literature from "./components/Categories/Literature";
import SkinCare from "./components/Categories/SkinCare";
import Automotives from "./components/Categories/Automotives";
import Appliances from "./components/Categories/Appliances";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";


function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
      <section>

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="all" element={<All />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="groceries" element={<Groceries />} />
            <Route path="literature" element={<Literature />}  />
            <Route path="skincare" element={<SkinCare /> } />
            <Route path="automotives" element={<Automotives />}  />
            <Route path="appliances" element={<Appliances />} />
          </Route>
            
          <Route path="/about" element={<About />} />
          <Route path="/categories/product/:id" element={<Store />} />

        </Routes>
      </section>
    </ShoppingCartProvider>
  )
}

export default App
