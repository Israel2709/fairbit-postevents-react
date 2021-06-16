import React, { useState, useEffect } from 'react'
import firebase from './lib/firebase'

import IdcNavbar from './Components/IdcNavbar'
import IdcHero from './Components/IdcHero'
import IdcSlider from './Components/IdcSlider'
import IdcPresentations from './Components/IdcPresentations'
import IdcVideos from './Components/IdcVideos'
import IdcSpeakers from './Components/IdcSpeakers'
import IdcFooter from './Components/IdcFooter'
import IdcSponsors from './Components/IdcSponsors'

import {
  Container,
  Row,
  Col
} from 'reactstrap'

import './App.scss';

function App() {
  const [eventData, setEventData] = useState({})
  const [speakersList, setSpeakersList] = useState({})

  useEffect( () => {
    const database = firebase.database();
    console.log( database )
    const eventsRef = database.ref('/events')
    eventsRef.on('value', snapshot => {
      console.log(snapshot.val())
      setEventData( snapshot.val().transtelco )
    })
    const speakersRef = database.ref('/speakers')
    speakersRef.on('value', snapshot => {
      console.log(snapshot.val())
      setSpeakersList( snapshot.val() )
    })
  },[])
  
  const { title, abstract, masterGraphic, sponsors, hasSlider, type, speakers, presentations } = eventData
  return (
    <div className="App">
      <IdcNavbar />
      <IdcHero
        title={title}
        abstract={abstract}
        masterGraphic={masterGraphic}
      />
      <IdcSlider sponsors={ sponsors } hasSlider={ hasSlider }/>
      <IdcSponsors sponsors={ sponsors }  type={ type }/>
      <Container>
        <Row>
          {
            (presentations && speakersList) && <IdcPresentations presentations={ presentations } speakersList = {speakersList}/>
          }
          
          {
            eventData.videos && <IdcVideos />
          }
          <IdcSpeakers speakers={ speakers }/>
        </Row>
      </Container>
      <IdcFooter />
    </div>
  );
}

export default App;
