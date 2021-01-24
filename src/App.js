import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/ana.png";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Services from "./Pages/Services";
import Training from "./Pages/Training";
import Blog from "./Pages/Blog";

import "./App.css"

function App() {
  return (
    <div className="container">
      <Router>
        <Menu>
          <Logo src={logo} alt="analogo" />
          <MenuContainer>
            <HomeList exact to="/" activeClassName="active">Home</HomeList>

            <TrainingList exact to="/training" activeClassName="active">Training</TrainingList>

            <ServicesList exact to="/services" activeClassName="active" >Services</ServicesList>

            <BlogList exact to="/blog" activeClassName="active">Blog</BlogList>

            <ProfileList exact to="/profile" activeClassName="active">Profile</ProfileList>

            <AboutList exact to="/about" activeClassName="active" >About Us</AboutList>
          </MenuContainer>
        </Menu>
        <Switch>
        <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/training">
            <Training />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
const Menu = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;
const Logo = styled.img`
  width: 150px;
  height: 100%;
  object-fit: contain;
  margin-left: 50px;
`;

const MenuContainer = styled.div`
  width: 922px;
  height: 100px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  transition: 2s ease-in-out;
  @media (max-width: 767px) {
    display: none;
  }
`;
const HomeList = styled(NavLink)`
  color: #999999;
  font-size: 20px;
  font-family: Poppins;
  font-weigth: 400;
  text-decoration:none;
  &:hover{
    color:#5C5C5C
  }
  &.${props => props.activeClassName} {
    color: #EB16AC;
    text-decoration:underline;
  }
 
  
`;
const TrainingList = styled(HomeList)`

  
`;
const ServicesList = styled(HomeList)``

const BlogList = styled(HomeList)`
`;
const ProfileList = styled(HomeList)``;
const AboutList = styled(HomeList)`
`;
