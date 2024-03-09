import React from 'react'

export default function FaqPage() {
  return (// FAQ page made with tailwind css
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions</h1>
        <div className="flex flex-col">
          <div className="flex flex-col my-4">
            <h2 className="text-2xl font-bold">What is the purpose of this website?</h2>
            <p className="text-lg">This website was created to help people find the best deals on the internet. We have a team of people who are constantly searching for the best deals and updating the website with new deals every day.</p>
          </div>
        </div>
      </div>
    </>
  )
}
