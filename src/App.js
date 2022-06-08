import Header from './components/Header/Header.tsx'
import {Hero} from './components/Hero/Hero.tsx'
import {LogoContainer} from './components/LogoContainer/LogoContainer.tsx'
import {Footer} from './components/Footer/Footer.tsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <LogoContainer/>
      <Footer/>
    </div>
  );
}

export default App;
