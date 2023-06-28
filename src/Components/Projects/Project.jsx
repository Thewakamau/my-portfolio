import { Row, TabContainer, Container, Col, Nav, Tab } from "react-bootstrap"
import meme from "../Projects/meme-gen.png"
import Tenzie from "../Projects/tenzie-game.png"
import Notes from "../Projects/notes.png"

import ProjectsCard from "../ProjectsCard"

export const Project = () => {
	const projects = [
		{
			title: "Tenzie game",
			description:
				"A dynamic and interactive web-based game developed using JavaScript and React.js. The Tenzie Game showcases my ability to create engaging user experiences and implement complex game logic. It's a testament to my skills in creating applications that are not only functional but also fun and engaging for users.",
			imgUrl: Tenzie,
			live: "https://mellow-pixie-fab490.netlify.app/",
		},
		{
			title: "Meme Generator",
			description:
				"A creative and entertaining web application that allows users to generate their own memes. Built with React.js, the Meme Generator showcases my skills in working with APIs and manipulating images. ",
			imgUrl: meme,
			live: "https://mellow-pixie-fab490.netlify.app/",
		},
		{
			title: "Notes App",
			description:
				"A practical and user-friendly application designed to help users keep track of their tasks and ideas. Developed using HTML, CSS, and JavaScript, the Note App demonstrates my ability to create applications that solve real-world problems. It features a clean, intuitive interface and robust functionality, including the ability to add, edit, and delete notes.",
			imgUrl: Notes,
			live: "https://mellow-pixie-fab490.netlify.app/",
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
