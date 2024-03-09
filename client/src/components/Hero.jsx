import React from 'react'

export default function Hero() {
  return (
    <div className='container mx-auto '>

        <HeroTitle TitleName={"Blockta"} />

    </div>
  )
}


const HeroTitle = ({TitleName}) => {
    return(
        <h1 className='text-3xl'>
            Welcome to <span className='font-bold underline bg-[var(--color-primary)]'> {TitleName} </span>
        </h1>
    )
}