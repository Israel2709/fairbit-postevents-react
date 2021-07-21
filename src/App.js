import React, { useState, useEffect } from 'react'
import useWindowSize from './Hooks/useWindowSize'
import firebase from './lib/firebase'
import parse from 'html-react-parser'

import IdcNavbar from './Components/IdcNavbar'
import IdcHero from './Components/IdcHero'
import IdcSlider from './Components/IdcSlider'
import IdcPresentations from './Components/IdcPresentations'
import IdcVideos from './Components/IdcVideos'
import IdcSpeakers from './Components/IdcSpeakers'
import IdcPartners from './Components/IdcPartners'
import IdcFooter from './Components/IdcFooter'

import {
  Container,
  Row
} from 'reactstrap'

import './App.scss';


function App() {
  const [eventData, setEventData] = useState({
    title:"",
    abstract:""
  })
  const [speakersList, setSpeakersList] = useState({})
  const [sponsorsList, setSponsorsList] = useState({})

  const screenWidth = useWindowSize().width
  console.log( screenWidth )

  useEffect( () => {
    const database = firebase.database();
    const eventsRef = database.ref('/events/cumbreGobierno')
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
  
  const { 
    title, 
    abstract, 
    heroImg, 
    heroImgResponsive, 
    sponsors, 
    hasSlider, 
    type, 
    speakers, 
    presentations,
    video,
    partners
  } = eventData
  console.log( sponsors )
  const getSponsors = ( sponsors ) => sponsors ? sponsors.map( sponsor => sponsorsList[sponsor]) : []
  return (
    <div className="App">
      <IdcNavbar video={ video } presentations={presentations}/>
      <IdcHero
        title={title}
        abstract={ parse( abstract )}
        masterGraphic={ screenWidth < 1366 ? heroImgResponsive : heroImg }
      />
      <Container fluid>
        <Row>
          { (sponsors && sponsorsList) && <IdcSlider sponsors={ getSponsors(sponsors) } hasSlider={ hasSlider }/> }
        </Row>
      </Container>
      <Container>
        <Row>
          {
            (partners && sponsorsList) && <IdcPartners  partners={partners } sponsorsList = {sponsorsList}/>
          }
        </Row>
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
