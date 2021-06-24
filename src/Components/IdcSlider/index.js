import React, { Component } from 'react';
import Slider from 'react-slick'

class IdcSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    console.log( this.props.sponsors )
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  render() {
    const { hasSlider,sponsors } = this.props
    return (
      <div class="col-12">
        {
          ( hasSlider && sponsors ) && (
            <>
              <Slider
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                slidesToShow={5}
              >
                {sponsors.map(sponsor => {
                  return (
                    <div className="p-3">
                      <div className="card">
                        <div className="card-body p-3 mx-2 d-flex justify-content-center align-items-center"><img src={ sponsor ? sponsor.ico : ""} alt="" /></div>
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
              >
                {sponsors.map(sponsor => {
                  return (
                    <div className="p-3">
                      <div className="card">
                        <div className="card-body p-3 mx-2 d-flex justify-content-center align-items-center"><img src={ sponsor ? sponsor.ico : ""} alt="" /></div>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </>
          )
        }
      </div>
    )
  }
}

export default IdcSlider;