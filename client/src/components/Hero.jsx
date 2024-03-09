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
        <h1 className='text-3xl font-montserrat'>
            Welcome to <span className='font-bold underline bg-[var(--color-primary)] text-[var(--color-secondary)] px-3 py-1'> {TitleName} </span>
        </h1>
    )
}