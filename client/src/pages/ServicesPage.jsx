import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import '../styles/servicesPage.css'

export default function ServicesPage() {
  return (
    <div class="page">
      <PageTitle TitleName={"Nos service sont:"} />
      <Intro Texte={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
      <div class="Type-Service">
      <TitreServices TitleName={"Website"} />
        <div class='article'>
          <div class='Card'><Card Title={"bonjour"} List0={"je"} List1={"suis"} List2={"thomas"} Price={30} /></div>
          <div class='Card'><Card Title={"bonjour"} List0={"je"} List1={"suis"} List2={"thomas"} Price={30} /></div>
          <div class='Card'><Card Title={"bonjour"} List0={"je"} List1={"suis"} List2={"thomas"} Price={30} /></div>
        </div>
      </div>
      <div class="Type-Service">
      <TitreServices TitleName={"Blockshain"} />
        <div class='article'>
          <div class='Card'><Card Title={"bonjour"} List0={"je"} List1={"suis"} List2={"thomas"} Price={30} /></div>
          <div class='Card'><Card Title={"bonjour"} List0={"je"} List1={"suis"} List2={"thomas"} Price={30} /></div>
          <div class='Card'><Card Title={"bonjour"} List0={"je"} List1={"suis"} List2={"thomas"} Price={30} /></div>
        </div>
      </div>
    </div>
  )
}
const showResult =() => {
  return(
    <p>bonjour</p>
  )
}
const Intro = ({Texte})=>{
  return(
    <p class="Intro">{Texte}</p>
  )
}

const PageTitle = ({TitleName}) => {
  return(
    <h1 id="Title">{TitleName}</h1>
  )
  }

const TitreServices = ({TitleName}) => {
  return(
    <button id="linkTitle" onclick={showResult}>{TitleName}<FaArrowRight className=''/></button>
  )
  }

const Card = ({Price,Title,List0,List1,List2}) =>{
  return(
    <article>
      <h2>{Title}</h2>
        <li>{List0}</li>
        <li>{List1}</li>
        <li>{List2}</li>
      <p>price : {Price}$</p>
      <button class="bouton">Lien</button>
    </article>
  )
}