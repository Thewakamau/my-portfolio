import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import "./Header.css"

function Header(props) {
	const { currentTab, setCurrentTab } = props

	return (
		<Container fluid className='p-0'>
			<Row className='p-0 bg-dark text-white'>
				<Col className='text-center p-0 ' md={12}>
					<div className='jumbotron-fluid mt-2'>
						<h2 className='display-2 mb-0 pb-0'>Peter Kamau</h2>
						<p className='lead pt-0 mt-0'>Front End Developer</p>
					</div>
				</Col>
				<header>
					<div></div>
					<div>
						<NavBar
							currentTab={currentTab}
							setCurrentTab={setCurrentTab}
						></NavBar>
					</div>
				</header>
			</Row>
		</Container>
	)
}

export default Header
