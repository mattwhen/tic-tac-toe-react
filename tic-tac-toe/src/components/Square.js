import React, { useState } from 'react';
import '../styles/styles.css';

export default function Square({ value, onSquareClick }) {
	// The return JS keyword means whatever comes after is returned as a value to the caller of the function.
	return (
		<>
			{/* <button> is returned as a JSX element. A JSX element is a combination of JS and HTML. */}
			{/* className is a button property or prop that tells CSS how to style */}
			{/* We want the Square component to "remember" that it got clicked, and fill it with an "X".
			To remember things, components use state. React uses a special function called useState to create state variables.
			*/}
			<button className='square' onClick={onSquareClick}>
				<span className='x-mark'>{value}</span>
			</button>
		</>
	);
}
