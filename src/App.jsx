import './App.css';

import Tickets from './pages/Tickets/Tickets'
import {Route, Routes} from "react-router-dom"
import Main from "./pages/Main/Main"
import Footer from "./components/global/Footer/Footer";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/trains/*"} element={<Tickets/>}/>
                <Route path={"/order-success"} element={<OrderSuccess/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
