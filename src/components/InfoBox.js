import React from 'react';
import styled from "styled-components"
import BuildIcon from '@material-ui/icons/Build';

function InfoBox(){
    return(
        <Container01>
        <Container02>
          <Icon viewBox="0 0 1024 1024">
            <BuildIcon />
          </Icon>
        </Container02>
        <Container03>
          <Text02>We build</Text02>
          <Text03>
            Lorem ipsum some content goes here on hover the list shows up in the bottom Lorem
            ipsum some content goes here on hover the list shows up in the bottom
          </Text03>
        </Container03>
        <Container04>
          <Text04>Read more</Text04>
          <Icon1 viewBox="0 0 1024 1024">
            <Title1>arrow_forward</Title1>
            <Path1 d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></Path1>
          </Icon1>
        </Container04>
      </Container01>
    )
}

export default InfoBox



const Container01 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 332px;
  height: 368px;
  background-color: #0511F2;
  border-radius: 20px;
  margin-left:20px;
  @media (max-width: 991px) {
    height: 372px;
    width: 276px;
    justify-content: flex-start;
    margin-left:0px;

  }
  @media (max-width: 767px) {
    width: 332px;
    height: 368px;
    margin-top: 20px;
    margin-left:0px;

  }
`

const Container02 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 75px;
  height: 75px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 16px;
  border-width: 2px;
  border: 1px solid #fc16b7;
`

const Icon = styled.svg`
  
  width: 54px;
  height: 54px;
  fill: rgba(0, 0, 0, 0.6);

`



const Container03 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 198px;
  margin-top: 20px;
`

const Text02 = styled.span`
  color: #ffffff;
  font-family: Poppins;
  font-size: 25px;
  font-weight: 600;
  margin-left: 20px;
  @media (max-width: 767px) {
    font-size: 29px;
  }
`

const Text03 = styled.p`
  margin-left: 20px;
  color: #ffffff;
  margin-right: 17px;
  font-size: 14px;
  margin-bottom: 28px;
  font-weight:200;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

const Container04 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  height: 56px;
  width: 144px;
  
  @media (max-width: 991px) {
    height: 60px;
  }
  @media (max-width: 767px) {
    height: 42px;
  }
`

const Text04 = styled.span`
  margin-left: 20px;
  color: #030000;
  cursor:pointer;
  &:hover{
      color:#FC16B7;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 0;
    margin-top: 17px;
   
  }
`

const Icon1 = styled.svg`
  
  width: 24px;
  height: 24px;
  fill: #ffffff;
  margin-left: 10px;
  cursor:pointer;
  &:hover{
      color:#FC16B7;
  }
  @media (max-width: 767px) {
    margin-top: 17px;
  }
`

const Title1 = styled.title``

const Path1 = styled.path``