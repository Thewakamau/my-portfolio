import React from "react"
import myProjects from "../../MyProjects"
import Project from "../Projects/Project"
import { Container, Row, Col } from "react-bootstrap"
import { CardGroup } from "react-bootstrap"

const Portfolio = () => {
	return (
		<Container>
			<Row>
				<Col xs={12}>
					<h1 className='display-4 text-center'>Portfolio</h1>
					<p className='lead text-center'>
						Here are some of my full stack applications built with React, Node,
						Express, MongoDB, and Bootstrap.
					</p>
				</Col>
			</Row>
			<CardGroup>
				<Row>
					{myProjects
						.filter((item, idx) => idx < 3)
						.map((project, index) => (
							<Col key={index} md={4}>
								<Project project={project} key={index} />
							</Col>
						))}
				</Row>
				<Row>
					{myProjects
						.filter((item, idx) => idx > 2)
						.map((project, index) => (
							<Col key={index} md={4}>
								<Project project={project} key={index} />
							</Col>
						))}
				</Row>
			</CardGroup>
		</Container>
	)
}
export default Portfolio
