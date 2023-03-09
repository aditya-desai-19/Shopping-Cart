import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Shop} from "./pages/shop/Shop";
import {Cart} from "./pages/cart/Cart";


function App(){
    return(
        <div className="App">
            <Router>
            {/*Navbar component is placed here because to render it on every page*/}
            <Navbar />
                {/*This are different routes */}
                <Routes>
                    <Route path="/" element={<Shop />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;