import Header from './components/Header/Header.tsx'
import {Hero} from './components/Hero/Hero.tsx'
import {LogoContainer} from './components/LogoContainer/LogoContainer.tsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <LogoContainer/>
    </div>
  );
}

export default App;
