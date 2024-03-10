import React from 'react'
import Hero from '../components/Hero'

export default function HomePage() {



  return (
    <div className='min-h-screen w-[99vw]'>


        {/* <div className='text-[var(--color-secondary)]'>
        
          <div id='user data belt' className='flex justify-center gap-20 py-5 border-b-[0.15rem] border-white font-montserrat'>
            <div className='flex gap-2'>
              <labe>Username : </labe>
              <label>Jack Sparrow</label>
            </div>
            <div className='flex gap-2'>
              <labe>Wallet ID : </labe>
              <label>0230213013012</label>
            </div>
          </div>

          <div id='transactions'>
            <form className='grid justify-center'>
              <h3 className='text-3xl py-5 font-oswald font-bold'>Transaction</h3>
              <div className='grid justify-center gap-5'>
                <input placeholder='From Account' className='rounded-xl px-2 py-1 text-[var(--color-primary)]'></input>
                <input placeholder='To Account' className='rounded-xl px-2 py-1 text-[var(--color-primary)]'></input>
                <input type='number' placeholder='Amount' className='rounded-xl px-2 py-1 text-[var(--color-primary)]'></input>
              </div>
              <button className='font-montserrat border-[0.15rem] border-[var(--color-secondary)] mx-auto px-5 py-2 rounded-xl my-5 tracking-widest hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all duration-150'>Send</button>
            </form>
          </div>


        </div> */}

        <Hero/>

    </div>
  )
}
