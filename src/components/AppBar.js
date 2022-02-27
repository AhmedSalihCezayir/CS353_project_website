import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AppBar = () => {
	return (
		<header>
			<Navbar bg='primary' variant='dark' expand='lg'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>Group 9</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<LinkContainer to='/proposal'>
								<Nav.Link>Project Proposal</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link>About</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
					<a
						className='text-white'
						href='https://github.com/ismailsergengocmen/OnlineCodingPlatform'
					>
						Project Github Page
					</a>
				</Container>
			</Navbar>
		</header>
	);
};

export default AppBar;
