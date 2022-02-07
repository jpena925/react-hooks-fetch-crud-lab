import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, handleSetQuestions, handleDeletes }) {

  useEffect(() => {
  fetch('http://localhost:4000/questions')
  .then(res => res.json())
  .then(data => handleSetQuestions(data))
  },[])

  const eachQuestion = [...questions].map((question) => <QuestionItem key={question.id} question={question} handleDeletes={handleDeletes}/> )
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      {eachQuestion}
    </section>
  );
  
}

export default QuestionList;
