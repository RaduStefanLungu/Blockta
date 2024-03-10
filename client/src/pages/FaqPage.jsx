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
      <div className='module-border-wrap'>
        <div className={`flex flex-col questions`} >
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
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">Frequently Asked Questions</h1>        
  <FaqItem
  question="What services do you offer?"
  comment="Our website offers a range of services for website designers, including custom website design, template customization, and website maintenance."
  index={0}
/>
<FaqItem
  question="How can I contact your team?"
  comment="You can reach out to our team via email at contact@websitedesigners.com or through our contact form on the website."
  index={1}
/>
<FaqItem
  question="Do you provide website hosting?"
  comment="While we do not provide hosting services directly, we can recommend reliable hosting providers based on your needs and budget."
  index={2}
/>
<FaqItem
  question="What platforms do you specialize in?"
  comment="Our team specializes in designing websites on popular platforms such as WordPress, Shopify, and Squarespace."
  index={3}
/>
<FaqItem
  question="How long does it take to complete a website design project?"
  comment="The timeline for a website design project depends on various factors, including the complexity of the design and the client's requirements. We typically provide an estimated timeline after discussing the project details with the client."
  index={4}
/>
<FaqItem
  question="Can you redesign an existing website?"
  comment="Yes, we offer website redesign services to give your existing website a fresh and updated look while retaining its core functionality."
  index={5}
/>
      </div>
    </>
  );
}
