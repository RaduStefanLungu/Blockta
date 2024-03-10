import React, { useState } from 'react';
import "../styles/faqPage.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function FaqPage() {
  const [showResults, setShowResults] = useState([false, false, false, false, false, false]);

  const toggleResults = (index) => {
    const updatedResults = [...showResults];
    updatedResults[index] = !updatedResults[index];
    setShowResults(updatedResults);
  };

  const Questions = (question, index) => {
    return (
      <h2 className="text-2xl font-bold" onClick={() => toggleResults(index)}>{question}</h2>
    );
  };

  const Results = ({ comment }) => {
    return (
      <p className="text-lg">{comment}</p>
    );
  };

  const FaqItem = ({ question, comment }) => {
    return (
      <div className={`flex flex-col my-1 questions`} >
        { Questions(question) }
        { showResults ? <Results comment={comment} /> : null }
        { showResults ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> }
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions</h1>        
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
      </div>
    </>
  );
}
