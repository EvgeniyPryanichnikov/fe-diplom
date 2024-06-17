import './App.css';

import MainHeader from './components/global/Main-header/Main-header';
import About from './components/global/Main-page/About/About';
import HowWorksBlock from './components/global/Main-page/How-works-block/How-works-block';
import ReviewsBlock from './components/global/Main-page/Reviews-block/Reviews-block';
import Footer from './components/global/Footer/Footer'

function App() {
  return (
    <div className="App">
      <MainHeader /> 
      
      <About />

      <HowWorksBlock />

      <ReviewsBlock />

      <Footer />
    </div>
  );
}

export default App;
