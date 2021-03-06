import React, { useState, useEffect } from 'react'
import firebase from './lib/firebase'
import parse from 'html-react-parser'

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
  const [eventData, setEventData] = useState({
    title:"",
    abstract:""
  })
  const [speakersList, setSpeakersList] = useState({})
  const [sponsorsList, setSponsorsList] = useState({})

  useEffect( () => {
    const database = firebase.database();
    const eventsRef = database.ref('/events/equinix')
    eventsRef.on('value', snapshot => {
      setEventData( snapshot.val() )
    })
    const speakersRef = database.ref('/speakers')
    speakersRef.on('value', snapshot => {
      setSpeakersList( snapshot.val() )
    })
    const sponsorsRef = database.ref('/sponsors')
    sponsorsRef.on('value', snapshot => {
      setSponsorsList( snapshot.val() )
    })
  },[])
  
  const { title, abstract, masterGraphic, sponsors, hasSlider, type, speakers, presentations } = eventData
  console.log( sponsors )
  const getSponsors = ( sponsors ) => sponsors ? sponsors.map( sponsor => sponsorsList[sponsor]) : []
  return (
    <div className="App">
      <IdcNavbar 
        hasVideo = {eventData.video ? true : false}
      />
      <IdcHero
        title={title}
        abstract={ parse( abstract )}
        masterGraphic={masterGraphic}
      />
      { (sponsors && sponsorsList) && <IdcSlider sponsors={ getSponsors(sponsors) } hasSlider={ hasSlider }/> }
      { (sponsors && sponsorsList) && <IdcSponsors sponsors={ getSponsors(sponsors) }  type={ type }/> }
      <Container>
        <Row>
          {
            (presentations && speakersList) && <IdcPresentations presentations={ presentations } speakersList = {speakersList}/>
          }
          
          {
            eventData.video && <IdcVideos videoList={eventData.video} speakersList={ speakersList}/>
          }
          <IdcSpeakers speakers={ speakers }/>
        </Row>
      </Container>
      <IdcFooter />
    </div>
  );
}

export default App;
