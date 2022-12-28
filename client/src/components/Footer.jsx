import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaTwitterSquare } from 'react-icons/fa';
import {AiOutlinePlayCircle, AiFillInstagram} from 'react-icons/ai';
import FooterImg from '../images/footerimg.png';

const Footer = () => {
  return (
    <>
    <div>
      <img src={FooterImg} alt="footerimg" style={{ width: 1350, height: 200 }}/>
    </div>
   <div className="footer_container">
      <Container>
        <Row>
        <Col lg={9} className="Col1">
            <Col md={3} xs={3}>
            <h5 className="about_us_heading">POPULAR CATEGORIES</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Cars</a>
              </li>
              <li className="navlink">
                <a href="#/">Flats for rent</a>
              </li>
              <li className="navlink">
                <a href="#/">Mobile Phones</a>
              </li>
              <li className="navlink">
                <a href="#/">Jobs</a>
              </li>
            </ul>
          </Col>

          <Col md={3} xs={3}>
            <h5 className="about_us_heading">TRENDING SEARCHES</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Bikes</a>
              </li>
              <li className="navlink">
                <a href="#/">Watches</a>
              </li>
              <li className="navlink">
                <a href="#/">Books</a>
              </li>
              <li className="navlink">
                <a href="#/">Dogs</a>
              </li>
            </ul>
          </Col>

          <Col md={3} xs={3}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">About EMPG</a>
              </li>
              <li className="navlink">
                <a href="#/">OLX Blog</a>
              </li>
              <li className="navlink">
                <a href="#/">Contact Us</a>
              </li>
              <li className="navlink">
                <a href="#/">Olx for Businesses</a>
              </li>
            </ul>
          </Col>


          <Col md={3} xs={3}>
            <h5 className="about_us_heading">OLX</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Help</a>
              </li>
              <li className="navlink">
                <a href="#/">Sitmap</a>
              </li>
              <li className="navlink">
                <a href="#/">Terms of use</a>
              </li>
              <li className="navlink">
                <a href="#/">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Col>

        <Col lg={3}>
        <Col md={3} xs={3}>
            <h5 className="about_us_heading">FOLLOW US</h5>
             <ul className="navlinks Col2">
              <li className="navlink">
                <a href="#/"><FaFacebookF/></a>
              </li>
              <li className="navlink">
                <a href="#/"><FaTwitterSquare/></a>
              </li>
              <li className="navlink">
                <a href="#/"><AiOutlinePlayCircle/></a>
              </li>
              <li className="navlink">
                <a href="#/"><AiFillInstagram/></a>
              </li>
            </ul>
           
          </Col>
        </Col>
        </Row>

        
        
        

      </Container>
    </div>
    </>
  )
}

export default Footer
