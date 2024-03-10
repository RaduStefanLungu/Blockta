import React, { useState } from 'react';
import "../styles/faqPage.css";
import "../index.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function FaqPage() {
  const [showResults, setShowResults] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const toggleResults = (index) => {
    setShowResults(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const Questions = (question) => {
    return (
      <h2 className="text-2xl font-bold">{question}</h2>
    );
  };

  const Results = ({ comment }) => {
    return (
      <p className="text-lg commentaire">{comment}</p>
    );
  };

  const FaqItem = ({ question, comment, index }) => {
    const isResultShown = showResults[index];
    const toggleResult = () => toggleResults(index);

    return (
      <div className={`flex flex-col my-1 questions`} >
        <div className="question" onClick={toggleResult}>
          { Questions(question, index) }
          { isResultShown ? (
            <FaChevronUp className='text-xl icon'/>
          ) : (
            <FaChevronDown className='text-xl icon'/>
          )}
        </div>

        { isResultShown && <Results comment={comment} /> }
        
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions</h1>        
        <FaqItem question="What is this website about?" comment="This website aims to..." index={0} />
        <FaqItem question="What is this website about?" comment="This website aims to..." index={1} />
        <FaqItem question="What is this website about?" comment="This website aims to..." index={2} />
        <FaqItem question="What is this website about?" comment="This website aims to..." index={3} />
        <FaqItem question="What is this website about?" comment="This website aims to..." index={4} />
        <FaqItem question="What is this website about?" comment="This website aims to..." index={5} />
      </div>
    </>
  );
}
