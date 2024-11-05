function JSXpr1(){

	const name = '이민형';
	const elementName = <h1>{name}</h1>

	const numbers = [1, 2, 3, 4, 5];
	const listItems = numbers.map((number) =>
		<li key={number.toString()}>{number}</li>
	);
	return(	
		<div>
			{elementName}
			{listItems}
		</div>
	);
}
export {JSXpr1};