import './App.css';

import Tickets from './pages/Tickets/Tickets'
import Footer from './components/global/Footer/Footer'
import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main/Main"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Main />}/>
        <Route path={"/trains"} element={<Tickets />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
