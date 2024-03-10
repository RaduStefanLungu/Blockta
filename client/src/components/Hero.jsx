import React from 'react'
import '../styles/homePage.css'


export default function Hero() {
  return (
    <div className='bg-[var(--color-primary)]'>

        <HeroCard />

    </div>
  )
}


const HeroCard = () => {
    return(
        <div className='bg-hero min-h-screen text-[var(--color-secondary)] flex flex-col justify-center items-center'>
            <h1 className='font-oswald font-bold text-8xl '>
                Join the blockchain <br/> with <span className='text-[var(--color-highlight-1)]'>Blockta</span>
            </h1>
            <p className='py-10 text-2xl max-w-[700px]'>
                Using <span className='underline'>Etherium</span>, we are connecting our clients to the blockchain to create the best environment for their projects. 
            </p>
            <div className='flex gap-12'>
                <CallToAction Style={"px-3 py-2 border-[0.10rem] border-[var(--color-secondary)] rounded-full text-xl font-montserrat font-bold uppercase tracking-widest text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all duration-150"}
                                Text={"Learn More"} To={'/'}/>
                <CallToAction Style={"px-3 py-2 border-[0.10rem] bg-[var(--color-highlight-1)] border-[var(--color-highlight-1)] rounded-full text-xl font-montserrat font-bold uppercase tracking-widest text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-highlight-1)] transition-all duration-150"}
                                Text={"Let's Start"} To={'/'}/>
            </div>
        </div>
    )
}

const CallToAction = ({Style, Text, To}) => {
    return(
        <a href={To} className={Style}>
            {Text}
        </a>
    )
}