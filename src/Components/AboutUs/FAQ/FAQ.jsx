import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isQuestionBoxVisible, setQuestionBoxVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const questionsAnswers = [
    {
      question: "What is SpareShare?",
      answer:
        "SpareShare is a platform that connects event organizers and individuals with surplus food to NGOs and volunteers who can deliver or cook the food for those in need.",
    },
    {
      question: "How does the 7 o'clock scheme work?",
      answer:
        "The 7 o'clock scheme ensures that all needy people receive food every day at 7 PM. The cost of the food is managed by donations and delivered by our volunteers.",
    },
    {
      question: "How can volunteers earn points?",
      answer:
        "Volunteers earn points by delivering food or cooking meals. Points can be redeemed for money once a certain goal is reached.",
    },
    {
      question: "Can users earn points too?",
      answer:
        "Yes, users can earn points by donating surplus food or funds. These points can also be redeemed for money once a certain goal is reached.",
    },
    {
      question: "How can I get involved?",
      answer:
        "You can get involved by signing up as a volunteer, donating surplus food, or providing financial support through our platform.",
    },
    {
      question: "How are donations used?",
      answer:
        "Donations are used to fund the 7 o'clock scheme, cover delivery costs, and support the operational expenses of SpareShare.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    setSubmissionMessage("Thank you for your question! We'll get back to you soon.");
    setUserQuestion("");
    setQuestionBoxVisible(false);
  };

  return (
    <div className="faq-container">
      <h2>
        <span>
          <img src="assets/question.png" alt="FAQ" style={{ width: "40px", height: "40px" }} />
        </span>
        <span className="faq-title">Frequently Asked Questions</span>
      </h2>
      {questionsAnswers.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
      <p className="faq-footer">
        Didn't find what you're looking for?{" "}
        <a href="#" onClick={() => setQuestionBoxVisible(true)}>
          Ask your question
        </a>
      </p>
      {isQuestionBoxVisible && (
        <div className="question-box">
          <form onSubmit={handleQuestionSubmit}>
            <textarea
              value={userQuestion}
              onChange={handleQuestionChange}
              placeholder="Ask your question here..."
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {submissionMessage && (
        <p className="submission-message">{submissionMessage}</p>
      )}
    </div>
  );
};

export default FAQ;
