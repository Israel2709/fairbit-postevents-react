import React, { useState, useEffect } from 'react';
import SpeakerItem from '../SpeakerItem'
import firebase from '../../lib/firebase'

import{
    Row,
    Col
} from 'reactstrap'

const IdcSpeakers = (props) => {
    const [speakersList, setSpeakersList ] = useState( null )
    const {speakers} = props
    
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
                    ( speakersList && speakers ) && Object.values( speakers ).map( speaker => <SpeakerItem speakerData = {speakersList[speaker]}/>)
                }  
            </Row>
        </Col>
    );
};

export default IdcSpeakers;