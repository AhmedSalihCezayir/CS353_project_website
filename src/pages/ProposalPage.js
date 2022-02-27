import React from 'react';
import Proposal from '../components/Proposal';

const ProposalPage = () => {
	return (
		<>
			<div className='mt-4 d-flex justify-content-between'>
				<span className='h3'>
					<strong className='text-dark'>Project Proposal </strong>
					<small>Group 9</small>
				</span>
				<a
					style={{ textDecoration: 'none' }}
					href='/proposal.pdf'
					target='_blank'
					rel='noopener noreferrer'
				>
					<strong className='text-muted'>
						Download in PDF Format
					</strong>
				</a>
			</div>
			<hr />
			<Proposal />
		</>
	);
};

export default ProposalPage;
