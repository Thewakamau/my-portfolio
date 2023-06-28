import { Col, Container, Row } from "react-bootstrap"

import "react-multi-carousel/lib/styles.css"

import colorSharp from "./assets/color-sharp.png"
import React from "react"
import { Accordion, ListGroup, Button } from "react-bootstrap"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"

/*//----------------------------------------------------------------------------+
// - Front-End Proficiencies
// _ HTML5, CSS3, JavaScript, jQuery, Bootstrap, React, version control/Git, responsive design
// - Dev Tool Proficiencies 
// _ Git npm Jest Webpack
// - Database Proficiencies
// _ MySQL, Sequelize, NoSQL, SQLite, GraphQL, MongoDB, Mongoose */

const skillTypes = [
	{
		name: "Frontend Development",
		skills: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"React",
			"Redux",
			"Bootstrap",
			"Version Control/Git",
			"Responsive Design",
		],
	},
	{
		name: "Development Tools",
		skills: ["Git", "npm", "Jest", "Webpack"],
	},
	{
		name: "Database Skills",
		skills: [
			"Currently learning Node.js and other back-end technologies to enhance my ability to create full-stack applications.",
		],
	},
]

export const Skills = () => {
	return (
		<section className='skills' id='skills'>
			<Container>
				<Row>
					<Col>
						<div className='skill-bx'>
							<h5 className='text-primary'>Skills</h5>
							<p> Here are some of my skills:</p>

							<Container className='bg-dark'>
								<Row>
									<Col>
										<div className='jumbotron jumbotron-fluid'>
											<Container>
												<h1 className='display-4 text-center'>Resume</h1>
											</Container>
										</div>
									</Col>
								</Row>
								<Row>
									<Col className='text-center mb-3'>
										<Button href='https://github.com/Thewakamau/resume/raw/main/Peter_CV.docx'>
											Download My Resume
										</Button>
									</Col>
								</Row>
								<Row>
									<Col>
										<Accordion className='panel-group'>
											{skillTypes.map((skillCategory, evtKey) => {
												return (
													<Accordion.Item eventKey={evtKey}>
														<AccordionHeader>
															{skillCategory.name}
														</AccordionHeader>
														<Accordion.Body>
															<ListGroup>
																{skillCategory.skills.map((skill) => {
																	return (
																		<ListGroup.Item>{skill}</ListGroup.Item>
																	)
																})}
															</ListGroup>
														</Accordion.Body>
													</Accordion.Item>
												)
											})}
										</Accordion>
									</Col>
								</Row>
							</Container>
						</div>
					</Col>
				</Row>
			</Container>
			<img
				className='background-image-left'
				src={colorSharp}
				alt='back ground img'
			/>
		</section>
	)
}
