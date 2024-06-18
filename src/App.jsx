import './App.css';

// import Main from './pages/Main/Main'  ======>>>  Закомментировал чтобы начать делать вторую страницу (<Tickets />).
import Tickets from './pages/Tickets/Tickets'
import Footer from './components/global/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Tickets />

      <Footer />
    </div>
  );
}

export default App;
