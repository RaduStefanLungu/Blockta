import React, { useState } from 'react';
import "../styles/faqPage.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function FaqPage() {
  const [showResults, setShowResults] = useState(false);

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  const Questions = (question) => {
    return (
      <h2 className="text-2xl font-bold">{question}</h2>
    );
  };

  const Results = ({ comment }) => {
    return (
      <p className="text-lg">{comment}</p>
    );
  };

  
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions</h1>
        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?") }
          { showResults ? <Results comment="This website aims to..." /> : null }
          { showResults ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?") }
          { showResults ? <Results comment="This website aims to..." /> : null }
          { showResults ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?") }
          { showResults ? <Results comment="This website aims to..." /> : null }
          { showResults ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?") }
          { showResults ? <Results comment="This website aims to..." /> : null }
          { showResults ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?") }
          { showResults ? <Results comment="This website aims to..." /> : null }
          { showResults ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?") }
          { showResults ? <Results comment="This website aims to..." /> : null }
          { showResults ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={toggleResults}/> }
        </div>
      </div>
    </>
  );
}
