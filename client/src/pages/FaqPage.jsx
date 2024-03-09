import React, { useState } from 'react'
import "../styles/faqPage.css"

export default function FaqPage() {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions</h1>
        <div className="flex flex-col">
          <div className="flex flex-col my-4 questions" onClick={() => setShowResults(!showResults)}>
            <h2 className="text-2xl font-bold">What is the purpose of this website?</h2>
            { showResults ? <Results /> : null }
          </div>
        </div>
      </div>
    </>
  )
}

function Results() {
  return (
    <p className="text-lg">The purpose of this website is to provide a platform for people to share their experiences and learn from others. We believe that everyone has a story to tell and that everyone can learn from others.</p>
  )
}
