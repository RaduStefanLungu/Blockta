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
<<<<<<< HEAD
        
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
        <FaqItem question="What is this website about?" comment="This website aims to..." />
=======
        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?", 0) }
          { showResults[0] ? <Results comment="This website aims to..." /> : null }
          { showResults[0] ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(0)}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(0)}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?", 1) }
          { showResults[1] ? <Results comment="This website aims to..." /> : null }
          { showResults[1] ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(1)}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(1)}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?", 2) }
          { showResults[2] ? <Results comment="This website aims to..." /> : null }
          { showResults[2] ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(2)}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(2)}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?", 3) }
          { showResults[3] ? <Results comment="This website aims to..." /> : null }
          { showResults[3] ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(3)}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(3)}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?", 4) }
          { showResults[4] ? <Results comment="This website aims to..." /> : null }
          { showResults[4] ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(4)}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(4)}/> }
        </div>

        <div className={`flex flex-col my-1 questions`} >
          { Questions("What is this website about?", 5) }
          { showResults[5] ? <Results comment="This website aims to..." /> : null }
          { showResults[5] ? <FaChevronUp className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(5)}/> : <FaChevronDown className='mx-auto my-auto text-xl icon' onClick={() => toggleResults(5)}/> }
        </div>
>>>>>>> 94fbabb8cc7ed7e57d73fd472cbfacc4043fba7a
      </div>
    </>
  );
}
