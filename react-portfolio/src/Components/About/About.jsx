import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import profile from "./Images/peterkamau.jpeg"

const About = () => {
	const toRotate = ["Front-end Developer", "Web-designer", "UI/UX designer"] //words to be rotated
	const [loopNum, setloopNum] = useState(0) //index of word to be rotated
	const [deleting, setDeleting] = useState(false) //as we start by typing the word
	const [currentText, setCurrentText] = useState("")
	const [delta, setDelta] = useState(300 - Math.random() * 100) //freq of displaying each word
	const period = 2000 //delay time
	useEffect(
		() => {
			let ticker = setInterval(() => {
				tick()
			}, delta)
			return () => {
				clearInterval(ticker)
			}
		},
		[currentText] //runs whenever text gets updated
	)
	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = deleting
			? fullText.substring(0, currentText.length - 1)
			: fullText.substring(0, currentText.length + 1)
		setCurrentText(updatedText)
		if (deleting) {
			setDelta((prevState) => prevState / 2)
		}
		if (!deleting && updatedText === fullText) {
			setDeleting(true)
			setDelta(period)
		} else if (deleting && updatedText === "") {
			setDeleting(false)
			setloopNum(loopNum + 1)
			setDelta(500)
		}
	}

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='alignitems-center'>
					<Col xs={12} md={6} xl={7}>
						<span className='tagline'>Greeatings! Welcome to my portfolio</span>
						<h1>
							{"My name Peter Kamau. I am a"}{" "}
							<span className='wrap'>
								{<span className='text-warning'>{currentText}</span>}
							</span>
						</h1>
						<p>
							Hello! I'm Peter Kamau, a self-taught front-end web developer
							based in Nairobi, Kenya. With a year of intensive hands-on
							experience, I have honed my skills in JavaScript, CSS, HTML, and
							React.js, creating dynamic and responsive web applications that
							provide seamless user experiences.
						</p>
						<p>
							My journey in coding has been one of continuous learning and
							growth. I am currently expanding my skill set into back-end
							development, with a focus on Node.js, to become a full-stack
							developer. This pursuit stems from my belief that understanding
							both the front and back ends of web development allows for a more
							holistic approach to building robust and efficient applications.
						</p>

						<button onClick={() => alert("connected")}></button>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={profile} alt='animation image' />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default About
