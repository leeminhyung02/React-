function Parent(){
	return(
		<div>
			<Child text={"텍스트"}/>
		</div>
	);
}

function Child(props){
	const text = props.text;
	return(
		<div>
			<button onClick={()=>console.log({text})}>{props.text}</button>
		</div>
	)
}

export {Parent, Child};