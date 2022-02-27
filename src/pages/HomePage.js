import React from 'react';

const HomePage = () => {
	return (
		<>
			<img
				src='/bilkent_logo.jpg'
				alt='bilkent_logo'
				style={{ maxWidth: '100%' }}
				className='mt-4'
			/>

			<h3 className='mt-5'>
				<strong className='text-dark'>
					Group 9 Project Home Page{' '}
				</strong>
				<small>Bilkent University, CS 353 Database Systems</small>
			</h3>

			<hr />
		</>
	);
};

export default HomePage;
