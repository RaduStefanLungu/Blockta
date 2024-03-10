import React from 'react';
import '../styles/portfolio.css';
import logoT from "../assets/portfolioBgImg/logoMaxime.jpg"
import logoT2 from "../assets/portfolioBgImg/testingZone2.jpg"
import logoT3 from "../assets/portfolioBgImg/testingZone3.jpg"
import logo1 from "../assets/portfolioBgImg/logo1.jpg"
import logo2 from "../assets/portfolioBgImg/logo2.jpg"
import logo3 from "../assets/portfolioBgImg/testintgZone1.jpg"
import logo4 from "../assets/portfolioBgImg/logo4.jpg"
import logo5 from "../assets/portfolioBgImg/logo5.jpg"
import logo6 from "../assets/portfolioBgImg/logo6.jpg"
import logo7 from "../assets/portfolioBgImg/logo7.jpg"


export default function PortfolioPage() {
  return (
    <div id="base">
      <h1 id="blc">Our <span>creations</span>, there you will find design, mockups, or previously implemented <span>projects</span></h1>
      <div id="contBlocks">
        <BlocFolio  URL={logoT} Text={"Test Zone: an example of a fully functional demonstration."} isClickable={true} />
        <BlocFolio URL={logo1} Text={"S-tract : Unlock the power of smart contracts. Create, deploy, and manage contracts effortlessly "} isClickable={false}/>
        <BlocFolio  URL={logo2}  Text={"WebTh : a template of a generic website with an easy design"} isClickable={false}/>
        <BlocFolio URL={logo3}  Text={"GraphTe : a template of a generic website"} isClickable={false}/>
        <BlocFolio URL={logo4}  Text={"Cooksta : a template of a generic cooking website"} isClickable={false}/>
        <BlocFolio  URL={logo5}  Text={"Sportseed : a template of a generic sport website"} isClickable={false}/>
        <BlocFolio URL={logo6}  Text={"S-tract : a template of a smart contract website"} isClickable={false}/>
        <BlocFolio  URL={logo7}  Text={"S-tract : a template of a smart contract website"} isClickable={false}/>
      </div>
    </div>
  );
}

const BlocFolio = ({Text, URL, isClickable}) => {

  
  if (isClickable) {
    return (
      <a href='https://tendosbg.github.io/ProjetDevWeb_HEH-2023/'>
      <div id="containerC"style={{ backgroundImage: `url(${URL})` }} >
        
        <div id="subWork" >
         
          <p id="item2">{Text}</p>
        </div>
        
      </div>
      </a>
    )
  }
  else {
    return (
      <div id="container"style={{ backgroundImage: `url(${URL})` }} >
        
        <div id="subWork" >
         
          <p id="item2">{Text}</p>
        </div>
        
      </div>
    )
  } 
}


