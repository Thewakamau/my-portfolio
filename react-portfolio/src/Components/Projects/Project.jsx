import { Row, TabContainer, Container, Col, Nav, Tab } from "react-bootstrap"

import Tenzie from "../Projects/tenzie-game.png"
import Notes from "../Projects/notes.png"
import Peter from "../About/Images/peterkamau.jpeg"

import ProjectsCard from "../ProjectsCard"

export const Project = () => {
	const projects = [
		{
			title: "My Portfolio",
			description:
				"Personal portfolio crafted with React, Bootstrap, and custom CSS, highlighting my proficiency in modern web development.",
			imgUrl: Peter,
			live: "https://my-portfolio-seven-nu-86.vercel.app/",
		},
		{
			title: "Tenzie Game",
			description:
				"A creative and entertaining web application that allows users to generate their own memes. Built with React.js, the Meme Generator showcases my skills in working with APIs and manipulating images. ",
			imgUrl: Tenzie,
			live: "https://mellow-pixie-fab490.netlify.app/",
		},
		{
			title: "Notes App",
			description:
				"Developed a user-friendly notes app using React, JS, and CSS, showcasing my ability to create practical, interactive applications",
			imgUrl: Notes,
			live: "https://my-notes-app-tau.vercel.app/",
		},
	]
	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col>
						<h1 className='text-center'>My Projects</h1>
						<p>Here is some of my projects:</p>
						<TabContainer id='projects-tab' defaultActiveKey='first'>
							<Nav variant='pills' defaultActiveKey='/home'>
								<Nav.Item>
									<Nav.Link eventKey='first'>Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second'>Tab 2</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third'>Tab 3</Nav.Link>
								</Nav.Item>
							</Nav>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<Row>
										{projects.map((project, index) => {
											return <ProjectsCard key={index} {...project} />
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='second'></Tab.Pane>
								<Tab.Pane eventKey='third'></Tab.Pane>
							</Tab.Content>
						</TabContainer>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
