import React, { useState } from 'react';
import Square from './Square';

// The default keyword tells other files using your code, that it's the main function in your file!

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));

	// Connect the onSquareClick prop to the handleClick function. 
	// To connect onSquareClick to handleClick, we need to pass the handleClick function to the Square component as a prop.

	// handleClick function inside the Board component to update the squares array, holding the state of the board. 
	function handleClick(i) {
		const nextSquares = squares.slice();
		nextSquares[i] = 'X';
		// the setSquares function let's React know that the state of the component has changed. Triggering a re-render.
		setSquares(nextSquares);
	}

	return (
		// React components need to return a single element, so we wrap our board in either a <div> </div> or <> and </> tag.
		<>
			<div className='board-row'>
				{/* We cannot update the Board's state directly from Square. So we lift state up. */}
				{/* Next, you will need to pass "i" to handleClick. You could try to set the onSquareClick
				prop to handleClick(0) in the Board component. However, that would call handleClick immediately instead of when the button is clicked.
				It also would cause an infinite loop because it would re-render the Board component, which calls handleClick again, which re-renders the Board, and so on.
				*/}
				{/* <Square value={squares[0]} onSquareClick={handleClick(0)} /> */}
				<Square value={squares[0]} onSquareClick={handleClick} />
				<Square value={squares[1]} onSquareClick={handleClick} />
				<Square value={squares[2]} onSquareClick={handleClick} />
			</div>
			<div className='board-row'>
				<Square value={squares[3]} onSquareClick={handleClick} />
				<Square value={squares[4]} onSquareClick={handleClick} />
				<Square value={squares[5]} onSquareClick={handleClick} />
			</div>
			<div className='board-row'>
				<Square value={squares[6]} onSquareClick={handleClick} />
				<Square value={squares[7]} onSquareClick={handleClick} />
				<Square value={squares[8]} onSquareClick={handleClick} />
			</div>
		</>
	);
}
