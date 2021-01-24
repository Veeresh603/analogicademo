import React from 'react';
import Hero from "../components/Hero"
import InfoBox from "../components/InfoBox"
import styled from "styled-components"

function Home(){

    return(
        <>
        <Hero />
        <Secondcontainer>
        <InfoBox className="iconbox"/>
        <InfoBox />
        <InfoBox />

        </Secondcontainer>
        
        </>
    )
}

export default Home

const Secondcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 404px;
  @media (max-width: 991px) {
    height: 422px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    height: 1212px;
    justify-content: flex-start;
  }
`