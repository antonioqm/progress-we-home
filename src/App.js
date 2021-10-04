import homeVideo from './assets/video/my-home.mp4';
import ipe from './assets/img/ipe.png';
import './App.css';
import Countdown from './components/countdown';

function App() {
  return (
    <div className="App">
    <div id="logo-ipe"><img src={ipe} alt="" />
    </div>

  <div id="rule">
      <ul>
        <li>
          <div>19</div>
          <div>mai.</div>
        </li>
      </ul>
    </div>
    <div className="loader ">
      <div id="bar" className="stripes animated reverse slower">
        <div id="loaderBar"></div>
        <div id="digit">50</div><div id="percent">%</div>
      </div>
    </div>
      <div> bem-vindo a casa 27</div>
      
         <video playsInline loop muted autoPlay>
          <source src={homeVideo} type="video/mp4"/>
      </video>
      <div id="content">
       <h1>Casa 27</h1>
        <h3>CONTAGEM REGRESSIVA<p>para a realização do sonho</p></h3>
        
        <Countdown/>
   
      </div>
       
      

    </div>
  );
}

export default App;
