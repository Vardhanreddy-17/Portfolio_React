import './App.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import OnlinePlatforms from './components/OnlinePlatforms';
import Skill from './components/Skill';
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='navbar_main'>
    <Navbar></Navbar>
    <div className='HeroSection_main'>
      <HeroSection></HeroSection>
    </div>
    <div className='Cards_main'>
      <Cards></Cards>
    </div>
    <div className='Skill_main'>
      <Skill></Skill>
    </div>
    <div className='online_main'>
      <OnlinePlatforms></OnlinePlatforms>
    </div>
    <div className='content_main'>
      <Content></Content>
    </div>
    <div className='fotter_main'>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
