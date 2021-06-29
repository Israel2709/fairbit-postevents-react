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
    const sponsorsRef = database.ref('/sponsors')
    sponsorsRef.on('value', snapshot => {
      setSponsorsList( snapshot.val() )
    })
  },[])
  
  const { title, abstract, masterGraphic, sponsors, hasSlider, type, speakers, presentations,video } = eventData
  const getSponsors = ( sponsors ) => sponsors ? sponsors.map( sponsor => sponsorsList[sponsor]) : []
  return (
    <div className="App">
      <IdcNavbar video={ video }/>
      <IdcHero
        title={title}
        abstract={ parse( abstract )}
        masterGraphic={masterGraphic}
      />
      <Container fluid>
        <Row>
          { (sponsors && sponsorsList) && <IdcSlider sponsors={ getSponsors(sponsors) } hasSlider={ hasSlider }/> }
        </Row>
      </Container>
      <Container>
        <Row>
          {
            (presentations && speakersList) && <IdcPresentations presentations={ presentations } speakersList = {speakersList}/>
          }
        </Row>
        <Row>
          {
            eventData.video && <IdcVideos videoList = {eventData.video} speakersList={speakersList}/>
          }
        </Row>  
        <Row>
          <IdcSpeakers speakers={ speakers }/>
        </Row>
      </Container>
      <IdcFooter />
    </div>
  );
}

export default App;
