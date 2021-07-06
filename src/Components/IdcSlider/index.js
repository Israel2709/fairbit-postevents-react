import React, { Component } from 'react';
import SponsorModal from '../SponsorModal/index'
import './style.scss'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button
} from 'reactstrap'
import Slider from 'react-slick'

class IdcSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
      modal:false,
      sponsorName:""
    }
    this.setModal = this.setModal.bind( this )
  }

  setModal(){
    this.setState({modal: !this.state.modal})
  }

  componentDidMount() {
    console.log(this.props.sponsors)
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  render() {
    const { hasSlider, sponsors } = this.props
    const iconClasses = {
      "facebook":"fab fa-facebook-square mx-2 text-main-color",
      "twitter":"fab fa-twitter-square mx-2 text-main-color",
      "linkedin":"fab fa-linkedin mx-2 text-main-color",
      "web":"fas fa-globe mx-2 text-main-color",
      "video":"fab fa-youtube mx-2 text-main-color",
      "info":"fas fa-file-alt mx-2 text-main-color"
    }
    return (
      <>
      <SponsorModal 
        modal={this.state.modal} 
        handler={this.setModal}
        sponsorName={this.state.sponsorName}
      />
      <div class="col-12">
        {
          (hasSlider && sponsors) && (
            <>
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                slidesToShow={5}
                focusOnSelect={true}
                slidesToScroll= {1}
                className="control"
                pauseOnHover= {true}
              >
                {sponsors.map(sponsor => {
                  return (
                    <div className="icon-wrapper">
                      <div className="card">
                        <div className="card-body d-flex justify-content-center align-items-center"><img src={sponsor ? sponsor.ico : ""} alt="" /></div>
                      </div>
                    </div>
                  )
                })}
              </Slider>
              <Slider
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
                autoplay= {true}
                speed= {1000}
                autoplaySpeed={5000}
                pauseOnHover= {true}
              >
                {sponsors.map(sponsor => {
                  return (
                    <>
                    <Row>
                      <Col xs="12" md="6">
                        {/*<h2 className="text-center">&nbsp;</h2>*/}
                        <Card className="sponsor">
                          <CardBody className="d-flex justify-content-center align-items-center">
                            {sponsor && <img src={sponsor.logo} alt="" />}
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
                      <Col xs="12" md="6" className="pr-3">
                        {/*<h2 className="text-center">Patrocinador Premium</h2>*/}
                        <Card className="sponsor-data">
                          <CardBody>
                            <Button className="mx-auto d-block mb-3" type="button" onClick={() => {
                              this.setState({ sponsorName: sponsor.name, modal:true })
                            }}>Ser contactado</Button>
                            {sponsor && <CardTitle tag="h3" className="text-center text-uppercase mb-3">
                              {sponsor.name}
                            </CardTitle>}
                            {sponsor && <CardText className="text-center mb-3">{sponsor.boilerplate}</CardText>}
                            <div className="social-wrapper d-flex justify-content-center">
                              {
                                sponsor && Object.keys(sponsor.links).map(link => {
                                  return <a href={sponsor.links[link]} target="_blank" className={iconClasses[link]}></a>
                                })
                              }
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    </>
                  )
                })}
              </Slider>
            </>
          )
        }
      </div>
      </>
    )
  }
}

export default IdcSlider;