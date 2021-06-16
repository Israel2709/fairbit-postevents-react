import React, { useState, useEffect } from 'react';
import firebase from '../../lib/firebase'
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Button,
    CardText
} from 'reactstrap'

import sponsorLogo from '../../assets/IDC_TRANSTELCO_PostEvento_SponsorCard.svg'

const IdcSponsors = ( props ) => {
    const [ sponsorsList, setSponsorsList ] = useState(null)
    useEffect( async () => {
        const database = await firebase.database();
        console.log( database )
        const sponsorsRef = database.ref('/sponsors')
        sponsorsRef.on('value', snapshot => {
          console.log(snapshot.val())
          setSponsorsList( snapshot.val() )
        })
      },[])
    const { sponsors, type } = props
    return (
        <Container className="mt-3">
            <Row>
                <Col xs="12" md="6">
                    <h2 className="text-center">&nbsp;</h2>
                    <Card>
                        <CardBody className="d-flex justify-content-center align-items-center">
                            <img src={sponsorLogo} alt="" />
                        </CardBody>
                        {/*
                            <div class="links-wrapper">
                                <a href="">Link 1</a>
                                <a href="">Link 2</a>
                                <a href="">Link 3</a>
                            </div>
                        */}
                        
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    <h2 className="text-center">Patrocinador Premium</h2>
                    <Card>
                        <CardBody>
                            <Button className="mx-auto d-block mb-3" type="button">Ser contactado</Button>
                            <CardTitle tag="h3" className="text-center text-uppercase mb-3">
                            { sponsorsList ? sponsorsList['sponsor1'].name : "lorem" }
                            </CardTitle>
                            <CardText className="text-center mb-3">{ sponsorsList ? sponsorsList['sponsor1'].boilerplate : "lorem" }</CardText>
                            <div className="social-wrapper d-flex justify-content-center">
                                <a href="https://www.facebook.com/IDCLatinAmerica/" target="_blank" className="fab fa-facebook-square mx-2 text-main-color"></a>
                                <a href="https://twitter.com/IDCLatin"  target="_blank" className="fab fa-twitter-square mx-2 text-main-color"></a>
                                <a href="https://www.linkedin.com/company/idc-latin-america/"  target="_blank" className="fab fa-linkedin mx-2 text-main-color"></a>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default IdcSponsors;