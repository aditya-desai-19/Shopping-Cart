import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
    return(
        <div className="App">
            <Router>
            {/*Navbar component is placed here because to render it on every page*/}
            <Navbar />
                <Routes>
                    <Route path="/" />
                    <Route path="/cart" />
                </Routes>
            </Router>
        </div>
    )
}

export default App;