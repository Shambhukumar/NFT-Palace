import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Press from './components/press/Press';
import Section2 from './components/Section-2/Section2';
import Section1 from './components/Section1/Section1';
import Showcase from './components/showcase/Showcase';
import Upsell from './components/upsell/Upsell';
import upsellpng from "./Assets/img/section-3.png";
import heroimage from "./Assets/img/hero.png";
import Footer from './components/footer/Footer';
const  App = () => {
  return (
    <div className="App">
     <Header/>
     <Hero data={{img: heroimage, size: "large"}}/>
     <Upsell/>
     <Press/>
     <Showcase/>
     <Section1/>
     <Section2/>
     <Hero data={{img: upsellpng, size: "small"}}/>
     <Footer/>
    </div>
  );
}

export default App;
