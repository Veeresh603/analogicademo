import React from 'react';
import styled from "styled-components"
import anagirl from "../images/anagirl_animated.svg"
import "./Hero.css"


function Hero(){
 return(
    <Container>
    <Anagirl src={anagirl} alt="anagirl" />
    <Heading>Let's get you from <span className="text_animation">If-Else</span> to <span className="text_animation">What-Else</span> </Heading>
   
</Container>
 )
    
}
 
export default Hero;

const Container = styled.div`
width: 100%;
height: 440px;
display: flex;
flex-wrap: nowrap;
align-self: center;
align-items: center;
flex-direction: row;
justify-content: center;
background-color: #def0fe;
@media (max-width:479px){
    flex-direction:column;
}
`
const Anagirl = styled.img`
width: 448px;
height: 100%;
object-fit: cover;
@media (max-width: 991px) {
    width: 448px;
  }
  @media (max-width: 767px) {
    width: 268px;
  }
  @media (max-width: 479px) {
    width: 320px;
    height: 352px;
  }
`
const Heading = styled.span`
color: #000000;
right: 5%;
width: 574px;
font-size: 30px;
position: relative;
text-align: center;
font-family: Poppins;
margin-right: 20px;
@media (max-width: 991px) {
    width: 574px;
    font-size: 26px;
  }
  @media (max-width: 767px) {
    margin-right: 0;
    right: 6%;
    font-size: 23px;
    height: 92px;
    width: 404px;
  }
  @media (max-width: 479px) {
    width: 320px;
    right: 0%;
  }
`