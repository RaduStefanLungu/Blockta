import React from 'react';
import '../styles/portfolio.css';
import logo from "../assets/portfolioBgImg/imdoxford2.jpg"
import logo1 from "../assets/portfolioBgImg/logo1.jpg"
import logo2 from "../assets/portfolioBgImg/logo2.jpg"
import logo3 from "../assets/portfolioBgImg/logo3.jpg"
import logo4 from "../assets/portfolioBgImg/logo1.jpg"
import logo5 from "../assets/portfolioBgImg/logo1.jpg"


export default function PortfolioPage() {
  return (
    <div id="base">
      <h1 id="blc">Our <span>creations</span>, there you will find design, mockups, or previously implemented <span>projects</span></h1>
      <div id="contBlocks">
        <BlocFolio  URL={logo} Text={" BiBit : a template of a crypto game website"}  />
        <BlocFolio URL={logo1} Text={"S-tract : a template of a smart contract website "} />
        <BlocFolio  URL={logo2}  Text={"WebTh : a template of a generic website with an easy design"} />
        <BlocFolio URL={logo3}  Text={"GraphTe : a template of a generic website"}/>
        <BlocFolio URL={logo4}  Text={"S-tract : a template of a smart contract website"} />
        <BlocFolio  URL={logo5}  Text={"S-tract : a template of a smart contract website"}/>
      </div>
    </div>
  );
}

const BlocFolio = ({Text, URL}) => {

  
  
    return (
      <div id="container"style={{ backgroundImage: `url(${URL})` }} >
        
        <div id="subWork" >
         
          <p id="item2">{Text}</p>
        </div>
        
      </div>
    )
  } 


