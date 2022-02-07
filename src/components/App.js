import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
	const [page, setPage] = useState("List");
	const [questions, setQuestions] = useState([]);

	function renderQuestions(data) {
		setQuestions(data);
	}

	function handleAddQ(newQ) {
		setQuestions([...questions, newQ]);
	}

  function handleDeleteQ(deletedq){
    setQuestions(questions.filter(q => q.id !== deletedq.id))
  }
	return (
		<main>
			<AdminNavBar onChangePage={setPage} />
			{page === "Form" ? (
				<QuestionForm onHandleAddQ={handleAddQ} />
			) : (
				<QuestionList
					questions={questions}
					handleSetQuestions={renderQuestions}
          handleDeletes={handleDeleteQ}
				/>
			)}
		</main>
	);
}

export default App;
