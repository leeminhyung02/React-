import React, { useState } from 'react';
import './Main.css';

function Main(){

	let [inputvalue, SetInputvalue] = useState('');
	function change(e){
		SetInputvalue(e.target.value);
	}

	let [TodoList, SetTodoList] = useState([]);

	function addTodoList(){
		SetTodoList([...TodoList, inputvalue]);
		SetInputvalue('');
	}


	return(
		<div className='container'>
			<h1 className='header'>TODO LIST</h1>
			<input value={inputvalue}  onChange={change} type='text' className='inputer' placeholder='할일 입력'></input>
			<button onClick={addTodoList} className='plusbtn'>+</button>
			<ul >
				{
					TodoList.map((value)=>{
						return (
							<div className='List'>
								<input type='checkbox'/><li >{value}</li>
							</div>
					)})
				}
			</ul>
		</div>
	);
};

export default Main;