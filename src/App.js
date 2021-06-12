import IdcNavbar from './Components/IdcNavbar'
import IdcHero from './Components/IdcHero'
import IdcSlider from './Components/IdcSlider'
import IdcPresentations from './Components/IdcPresentations'
import IdcVideos from './Components/IdcVideos'
import IdcSpeakers from './Components/IdcSpeakers'
import IdcFooter from './Components/IdcFooter'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

import './App.scss';

function App() {
  return (
    <div className="App">
      <IdcNavbar/>
      <IdcHero />
      <IdcSlider />
      <IdcPresentations />
      <IdcVideos />
      <IdcSpeakers />
      <IdcFooter />
    </div>
  );
}

export default App;
