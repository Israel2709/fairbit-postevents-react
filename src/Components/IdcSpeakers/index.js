import React, { useState, useEffect } from 'react';
import SpeakerItem from '../SpeakerItem'
import firebase from '../../lib/firebase'

import{
    Row,
    Col
} from 'reactstrap'

const IdcSpeakers = () => {
    const [speakersList, setSpeakersList ] = useState( null )
    
    useEffect(() => {
        const database = firebase.database();
        console.log( database )
        const speakersRef = database.ref('/speakers')
        speakersRef.on('value', snapshot => {
          console.log(snapshot.val())
          setSpeakersList( snapshot.val() )
        })
    },[])
    return (
        <Col xs="12">
            <h2 class="py-4 text-center">Programa / Speakers</h2>
            <Row className="speakers-wrapper">
                {
                    speakersList && Object.values( speakersList ).map( speaker => <SpeakerItem speakerData = {speaker}/>)
                }  
            </Row>
        </Col>
    );
};

export default IdcSpeakers;