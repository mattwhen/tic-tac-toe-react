import React, { useState } from 'react';

export default function Square({ value, onSquareClick }) {

	return (
		<>
			<button className='btn btn-secondary' onClick={onSquareClick}>
				{value}
			</button>
		</>
	);
}
