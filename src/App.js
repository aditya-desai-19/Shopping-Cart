import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Shop} from "./pages/shop/Shop";
import {Cart} from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";

function App(){
    return(
        <div className="App">
            <ShopContextProvider>
            <Router>
            {/*Navbar component is placed here because to render it on every page*/}
            <Navbar />
                {/*This are different routes */}
                <Routes>
                    <Route path="/" element={<Shop />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </Router>
            </ShopContextProvider>
        </div>
    )
}

export default App;