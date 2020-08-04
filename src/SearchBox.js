import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lighest-blue' 
				type='search' 
				placeholder='search pals' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;