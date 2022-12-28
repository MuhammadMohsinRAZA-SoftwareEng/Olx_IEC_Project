import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'

import { InnerCard } from './InnerCard'
import Carousel from 'react-bootstrap/Carousel';
import SlideImg from '../images/slide1.jpg';
import SlideImg2 from '../images/slide2.jpg'

const Cards = () => {
   
    return (
      <>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImg2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ThreeDots color="#3a77ff" height={100} width={100} />
      </div>
    <div className="AdCard">
      <Row className="g-3">
        
      </Row>
    </div>
  </>
  )
}

export default Cards
