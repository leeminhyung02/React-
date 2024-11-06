import React from 'react';

function TodoList(){
	return(
		<div>
			<h1>ToDo</h1>
			<Input></Input>
		</div>

	)
}

function Input(){
	return(
		<div>
		<input placeholder='할일 입력'></input><button>+</button>
		</div>
	)
}
export default TodoList;