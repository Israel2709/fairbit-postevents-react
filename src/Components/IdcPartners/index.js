import './style.scss'

import{
    Row,
    Col
} from 'reactstrap'

const IdcPartners = props => {
    const { partners, sponsorsList } = props
    console.log( partners, 'partners')
    console.log( sponsorsList)
    return(
        <Col xs="12" id="partners">
            <h2 className="py-4 text-center">Alianzas</h2>
            <Row className="partners-wrapper">
                {
                    (partners.length != 0 && Object.keys(sponsorsList).length != 0) && partners.map( (partner, key) => {
                        const { logo, name } = sponsorsList[partner]
                        return (
                            <div key = {key} className="card partner-card">
                                <div className="card-body">
                                    <img src={logo} alt={name} />
                                </div>
                            </div>
                        )
                    })
                }
                {
                    /*( speakersList && speakers ) && Object.values( speakers ).map( (speaker, index) => <SpeakerItem speakerData = {speakersList[speaker]} key={index}/>)*/
                }  
            </Row>
        </Col>
    )
}

export default IdcPartners