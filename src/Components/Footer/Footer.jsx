import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { SocialIcon } from "react-social-icons"
import "./footer.css"

function Footer() {
	return (
		<Container className='footer text-center my-auto py-auto'>
			<Row id='social-icons'>
				<Col>
					<SocialIcon
						url='https://github.com/Thewakamau'
						target='_blank'
						rel='noopener noreferrer'
					/>
				</Col>
				<Col>
					<SocialIcon
						url='https://twitter.com/mnyakamau'
						target='_blank'
						rel='noopener noreferrer'
					/>
				</Col>
				<Col>
					<SocialIcon
						url='https://www.linkedin.com/in/peter-kamau-munyambu'
						target='_blank'
						rel='noopener noreferrer'
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Footer
