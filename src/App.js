import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import ProposalPage from './pages/ProposalPage';
import AboutPage from './pages/AboutPage';

function App() {
	return (
		<Router>
			<AppBar />
			<Container>
				<Route exact path='/' component={HomePage} />
				<Route path='/proposal' component={ProposalPage} />
				<Route path='/about' component={AboutPage} />
			</Container>
		</Router>
	);
}

export default App;
