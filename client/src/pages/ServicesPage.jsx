import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import '../styles/servicesPage.css'

export default function ServicesPage() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  return (
    <div className="page">
      <PageTitle TitleName={"Services"} />
      <Intro Texte={"we offer different services on the blockchain.several prices for websites or service to implement a blockchain"}/>
      <div className="Type-Service">
      <TitreServices TitleName={"Website"} toggle={toggle} setToggle={setToggle} />
      {toggle &&(
        <div className='article'>
          <div className='Card'><Card Title={"First"} List0={"je"}  Price={100} /></div>
          <div className='Card'><Card Title={"Second"} List0={"je"} List1={"suis"}  Price={500} /></div>
          <div className='Card'><Card Title={"Third"} List0={"je"} List1={"suis"} List2={"thomas"} Price={1000} /></div>
        </div>
      )}
      </div>
      <div className="Type-Service">
      <TitreServices TitleName={"Blockshain"}  toggle={toggle1} setToggle={setToggle1}/>
      {toggle1 &&(
        <div className='article'>
          <div className='Card'><Card Title={"Nft"} List0={"create a nft auto"}  Price={10} /></div>
          <div className='Card'><Card Title={"Wallet"} List0={"create a wallet for you"}  Price={5} /></div>
        </div>
        )}
      </div>
    </div>
  )
}

const Intro = ({Texte})=>{
  return(
    <p className="Intro">{Texte}</p>
  )
}

const PageTitle = ({TitleName}) => {
  return(
    <h1 id="Title">{TitleName}</h1>
  )
  }

const TitreServices = ({TitleName, toggle, setToggle}) => {
  const Click = (e) => {
    e.preventDefault()
    setToggle(!toggle);
  };
  function arrow (){
    if (toggle){
      return <FaArrowDown className=''/>
    }
    else{
      return <FaArrowRight className=''/>
    }
  }
  return(
    <button id="linkTitle" onClick={Click}>{TitleName} {arrow()}</button>
  )
  }

const Card = ({Price,Title,List0=null,List1=null,List2=null}) =>{
  return(
    <article >
      <h2 className='TitleCard'>{Title}</h2>
      <p>price : {Price}$</p>
        <li>{List0}</li>
        <li>{List1}</li>
        <li>{List2}</li>
      <button className="bouton">Buy</button>
    </article>
  )
}
