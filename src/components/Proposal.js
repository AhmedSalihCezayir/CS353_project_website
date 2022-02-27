import React from 'react';

const Proposal = () => {
	return (
		<>
			<div>
				<h3 className='text-black'>1. Introduction</h3>
				<p>
					The report represents our Online Coding Platform proposal.
					The project aim, functionalities, constraints, limitations,
					the reason and logic behind database usage E-R diagram of
					database are given below related sections.
				</p>

				<p>
					Our online coding platform’s properties are explained in the
					project description chapter. This chapter also includes the
					reason and logic behind the database that will be created
					for the project.
				</p>

				<p>
					Functional and non-functional requirements are given under
					the requirements chapter. Functional requirements represent
					the system's promises and are determined by user input
					analysis. Non-functional requirements represent the things
					that need to be done to fulfill these promises. These are
					related to back-end requirements.
				</p>

				<p>
					System boundaries are examined in the limitations chapter.
					An E-R diagram created to represent the database system
					behind the system and given under the related section.
				</p>
			</div>

			<div>
				<h3 className='text-black'>2. Project Description</h3>
				<p>
					This project aims to create a platform for companies to
					interview and sponsor coding contests while job seekers can
					practice with coding challenges and participate in coding
					contests. The project will be implemented with SQL standard
					language.
				</p>
				<p>
					Database will be available for several user types and these
					are described as follows: Editors, companies and job
					seekers. Editors can prepare both coding challenges, coding
					contests and non-coding questions. Companies can prepare
					coding challenges, interview with job seekers and sponsor
					coding contests. Companies can also publish information
					about themselves such as what they do, where their buildings
					are etc. Job seekers can practice with coding challenges and
					participate in coding contests. They can also interview with
					companies and prepare a profile so companies can see them.
					Each of the users are required to login to the system in
					order to access the functionalities described above.
				</p>
				<p>
					Contests will be another important part of our platform. As
					mentioned before, companies can sponsor contests. In these
					contests, participants will try to solve coding challenges
					in a particular time. There will be a leaderboard determined
					according to how much total points participants get from
					challenges.
				</p>
				<p>
					Interviews can be created with a combination of code
					challenges and non-coding questions. Users can not see or
					enter interviews unless they are invited. By doing this,
					companies have more control over their interviewee list.
					Companies can see interviewee’s results and answers.
				</p>
			</div>

			<div>
				<h3 className='text-black'>3. Why do we use the database?</h3>
				<p>
					An online coding platform, like other online applications,
					needs to store lots of data. For instance users, contests,
					challenges, question statistics etc. should be stored in
					some place. Also when these data are needed,
					fetching/querying them should be efficient and fast. To
					store these data, we can use either a database or a file
					system. A file system is not a reliable/scalable solution
					for an online system, because of concurrency and
					inconsistency issues. On the other hand, by using a
					database, we can structure the data and control them easier.
					Thus, using a database for data management is a good idea.
				</p>
			</div>

			<div>
				<h3 className='text-black'>
					4. How do we use a database in our project ?
				</h3>
				<p>
					Nearly every functionality depends on the database in our
					project. All job seekers, editors, and companies should be
					kept in a database with their names, display names, emails,
					telephone numbers. After the authentication, the website
					offers different functionalities depending on the account
					type. Challenges and non-coding questions will be stored to
					create contests and interviews. Finished contests and
					interviews will be saved with their leaderboards. Plus, all
					non-coding questions’ answers of interviewees should be
					stored. Changes and reviews can be done with the help of
					queries.
				</p>
			</div>

			<div>
				<h3 className='text-black'>5. Requirements</h3>
				<h4 className='text-black'>5.1 Functional Requirements</h4>
				<div>
					<h5 className='text-black'>
						&emsp;&emsp;5.1.1 Login/Signup
					</h5>
					<p>
						&emsp;&emsp; Users can enter the website with their
						emails and passwords in the login screen. There is a
						register option for people who don’t have an account. In
						the register screen, users will select their account
						type and give information about themselves such as their
						name(or company name), display name, email, telephone
						and password.
					</p>
				</div>

				<div>
					<h5 className='text-black'>&emsp;&emsp;5.1.2 Challenges</h5>
					<p>
						&emsp;&emsp; In our application, editors can create
						challenges, which generally consist of one question.
						They can edit or delete these challenges if needed.
						Editors can also see the statistics related to the
						challenges they created. Challenges do not have a
						leaderboard, however, each user can see the best time
						for the current question if they want to see. Each
						challenge has a dedicated forum/comment page, so other
						users can share the code they wrote or their thoughts
						about the current challenge. If users like the challenge
						they worked on, they can add it to their favorite
						challenges list. This list can be accessed
					</p>
				</div>

				<div>
					<h5 className='text-black'>
						&emsp;&emsp;5.1.3 Non-Coding Questions
					</h5>
					<p>
						&emsp;&emsp; Editors and companies can create non-coding
						questions. Different from challenges, these questions
						will not have leaderboard, rate or forum/comment page.
						These questions are mostly personal information.
						Non-coding questions will be combined with challenges to
						create interviews. They can be given any part in the
						interview.
					</p>
				</div>

				<div>
					<h5 className='text-black'>&emsp;&emsp;5.1.4 Contests</h5>
					<p>
						&emsp;&emsp; Contests consist of multiple challenges and
						they can be created by either an editor or a company. If
						the contest is created by an editor, companies can
						request to be a sponsor for the contest. Every contest
						has a leaderboard which can be seen by everyone. Users
						can see their ranking on this list. Like challenges,
						contests can also be edited or deleted by their creator.
						Users can also create teams if teams are allowed.
					</p>
				</div>

				<div>
					<h5 className='text-black'>&emsp;&emsp;5.1.5 Interviews</h5>
					<p>
						&emsp;&emsp; Users will contact companies from outside.
						They will be invited to interviews by companies through
						emails. Uninvited users can not see ongoing interviews
						on the website. There won’t be any interview related UI
						for normal users. Companies can see the leaderboard of
						coding questions and non-coding questions’ answers for
						all entered users.
					</p>
				</div>

				<h4 className='text-black'>5.2 Non-functional requirements</h4>
				<div>
					<h5 className='text-black'>
						&emsp;&emsp;5.2.1 User-Friendly Interface
					</h5>
					<p>
						&emsp;&emsp; The user interface is one of the most
						important aspects of our program. Since time is
						important in contests and interviews, normal users
						should be able to reach them again easily if they quit
						from the website. Companies will not want to spend much
						time controlling their interview process, so the
						interface should be straightforward. For user
						satisfaction, the interface will be created considering
						the needs of the users.
					</p>
				</div>
				<div>
					<h5 className='text-black'>
						&emsp;&emsp;5.2.2 Maintainability
					</h5>
					<p>
						&emsp;&emsp; Since the project will be made using the
						Object Oriented approach, maintainability of the
						application will be easier. Adding new features, finding
						bugs and eliminating them will not be hard. Since many
						of our codes and functionalities are separated, our
						classes will be loosely coupled which will help us in
						maintainability.
					</p>
				</div>

				<h4 className='text-black'>5.3 Limitations</h4>
				<ul>
					<li>Only editors can give hints</li>
					<li>Only companies can create interviews</li>
					<li>Companies can not withdraw their sponsorship</li>
					<li>Job seekers can take 3 hints at most</li>
					<li>Job seekers can not create contests or challenges</li>
					<li>
						Job seekers can not exceed given time limit for contests
						and interviews
					</li>
					<li>
						All users need to be logged in to be able to access the
						site.
					</li>
				</ul>
			</div>

			<div>
				<h3 className='text-black'>6. Entity Relationship Diagram</h3>
				<img src='/er_diagram.png' alt='er_diagram' />
			</div>

			<div>
				<h3 className='text-black'>7. References</h3>
				<p>
					[1] “Flowchart Maker & Online Diagram Software”, Draw.io.
					[Online]. Available: https://app.diagrams.net/. [Accessed:
					27-Feb-2022].
				</p>
			</div>
		</>
	);
};

export default Proposal;
