import React from 'react';

const AboutPage = () => {
	return (
		<>
			<h3 className='mt-4'>
				<strong className='text-dark'>Online Coding Platform</strong>
				<br />
				<small>Bilkent University, CS 353 Database Systems</small>
			</h3>

			<hr style={{ height: '0.5px' }} />

			<h5 className='mt-4'>Members</h5>
			<ul className='text-dark'>
				<li>Ahmed Salih Cezayir</li>
				<li>Şule Nur Yılmaz</li>
				<li>İsmail Sergen Göçmen</li>
				<li>Ezgi Lena Sönmez</li>
			</ul>
		</>
	);
};

export default AboutPage;
