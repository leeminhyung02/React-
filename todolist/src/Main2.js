import React, { useState } from 'react';
import './Main2.css';


function Main2(){
	let [TodoCount, setCount] = useState(-1);
	let [Todoobj, setTodoobj] = useState([{
		index: TodoCount,
		todo:''
	}]);

	
	function Input(){

		let [Todo,setTodo] = useState("");
		
		function change(e){
			setTodo(e.target.value);
		}

		function enter(){
			setCount(++TodoCount);
			setTodoobj([...Todoobj, {
				index:TodoCount,
				todo:Todo
			}])
			console.log(Todoobj);
			setTodo('');
		}
			return(
				<div className="inputer shake-horizontal" >
				<input value={Todo} onChange={change} className="input" placeholder='할일 입력'></input><button onClick={enter} className="inputbtn" >+</button>
				</div>
			)
		}
		
function Content(){
	let RemoveBtn = (e) => {
		setTodoobj(Todoobj.filter(Todoobj => Todoobj.index !== e))
	}
	let Todolist2 = Todoobj.filter((val) => val.index !== -1).map((value) =>
		<div className='listContainer' key={value.index}>
			<input className='list listcheckbox' type='checkbox'></input><li className='list'>{value.todo}</li><button onClick={()=> RemoveBtn(value.index)} className='list'>X</button>
	</div>
); 
	return(
		<div>
			<div></div>
			<ul className="contentList">
				{Todolist2}
			</ul>
		</div>
	)

}
	return(
		<div className='container'>
			<h1>ToDo</h1>
			<Input/>
			<Content/>
		</div>
	)
}



export default Main2;