import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Press from './components/press/Press';
import Showcase from './components/showcase/Showcase';
import Upsell from './components/upsell/Upsell';
const  App = () => {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Upsell/>
     <Press/>
     <Showcase/>
    </div>
  );
}

export default App;
