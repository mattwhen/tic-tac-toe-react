import React, { useState } from 'react';
import Square from './Square';

// The default keyword tells other files using your code, that it's the main function in your file!

export default function Board() {
	// In order for our function to 'remember' that it was clicked, and fill it with an 'X' mark.
	// we need it to remember things using the useState Hook
	const [squares, setSquares] = useState(Array(9).fill(null));

	// Our handleClick() function is also a 'closure' which means it has access to variables and functions
	// defines in our outer function, in this case, in our Board() function, we have access to the state variable, 'squares'.
	function handleClick(i) {
        console.log(`Clicked on Square ${i + 1}`);
		const nextSquares = squares.slice(); // create a copy of the squares Array.
		nextSquares[i] = 'X';
		setSquares(nextSquares); // Calling the setSquares functions let's React know the state of the component has changed.
		// This will trigger a re-render of the components that use the squares state (Board) as well as its child components
		// (the Square components that make up the board).
	}

	return (
		<>
			{/* The className='square' is a button property or prop that tells CSS how to style the button. */}
			<div className='board-row'>
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className='board-row'>
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className='board-row'>
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
		</>
	);
}
