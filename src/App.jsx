import './App.css';

import MainHeader from './components/global/Main-header/Main-header';
import About from './components/global/Main-page/About/About';
import HowWorksBlock from './components/global/Main-page/How-works-block/How-works-block';

function App() {
  return (
    <div className="App">
      <MainHeader />
      
      <About />

      <HowWorksBlock />
    </div>
  );
}

export default App;
