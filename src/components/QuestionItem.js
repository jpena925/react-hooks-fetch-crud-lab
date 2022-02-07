import React from "react";

function QuestionItem({ question, handleDeletes }) {
	const { id, prompt, answers, correctIndex } = question;

	const options = answers.map((answer, index) => (
		<option key={index} value={index}>
			{answer}
		</option>
	));

	function handleDeleteQ() {
		console.log(question, id);
		fetch(`http://localhost:4000/questions/${id}`, {
			method: "DELETE",
		}).then(handleDeletes(question));
	}

	function handleNewCorrect(e) {
		//e.target.value will be the new correct index
		let newAnswer = e.target.value;
		fetch(`http://localhost:4000/questions/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...question, correctIndex: newAnswer }),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<li>
			<h4>Question {id}</h4>
			<h5>Prompt: {prompt}</h5>
			<label>
				Correct Answer:
				<select defaultValue={correctIndex} onChange={handleNewCorrect}>
					{options}
				</select>
			</label>
			<button onClick={handleDeleteQ}>Delete Question</button>
		</li>
	);
}

export default QuestionItem;
