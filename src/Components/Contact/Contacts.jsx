// contact.js
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import contactImg from "../assets/contact.png"

const initialFormState = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "", // Added missing phone property
	message: "",
}

const Contacts = () => {
	const [formDetails, setFormDetails] = useState(initialFormState)
	const [status, setStatus] = useState({ success: false, message: "" })
	const [buttonText, setButtonText] = useState("Send")

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (
			!formDetails.firstName ||
			!formDetails.lastName ||
			!formDetails.email ||
			!formDetails.phone || // Added phone field to the condition
			!formDetails.message
		) {
			setStatus({ success: false, message: "Please fill in all fields." })
			return
		}
		setButtonText("Sending...")
		try {
			const response = await fetch("/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formDetails),
			})
			const data = await response.json()
			if (data.success) {
				setStatus({ success: true, message: "Message sent successfully!" })
				setFormDetails(initialFormState)
			} else {
				throw new Error(data.message)
			}
		} catch (error) {
			setStatus({ success: false, message: error.message })
		} finally {
			setButtonText("Send")
		}
	}

	return (
		<section className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} md={6}>
						<img src={contactImg} alt='contacts' />
					</Col>
					<Col xs={12} md={6}>
						<h2>Get In Touch</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col xs={12} sm={6} className='px-1'>
									<input
										type='text'
										value={formDetails.firstName}
										placeholder='First Name'
										onChange={(e) =>
											setFormDetails({
												...formDetails,
												firstName: e.target.value,
											})
										}
									/>
								</Col>
								<Col xs={12} sm={6} className='px-1'>
									<input
										type='text'
										value={formDetails.lastName}
										placeholder='Last Name'
										onChange={(e) =>
											setFormDetails({
												...formDetails,
												lastName: e.target.value,
											})
										}
									/>
								</Col>
								<Col xs={12} sm={6} className='px-1'>
									<input
										type='email'
										value={formDetails.email}
										placeholder='Email Address'
										onChange={(e) =>
											setFormDetails({
												...formDetails,
												email: e.target.value,
											})
										}
									/>
								</Col>
								<Col xs={12} sm={6} className='px-1'>
									<input
										type='tel'
										value={formDetails.phone}
										placeholder='Phone No.'
										onChange={(e) =>
											setFormDetails({
												...formDetails,
												phone: e.target.value,
											})
										}
									/>
								</Col>
								<Col xs={12} className='px-1'>
									<textarea
										rows='6'
										value={formDetails.message}
										placeholder='Message'
										onChange={(e) =>
											setFormDetails({
												...formDetails,
												message: e.target.value,
											})
										}
									></textarea>
									<button type='submit'>
										<span>{buttonText}</span>
									</button>
								</Col>
								{status.message && (
									<Col xs={12}>
										<p
											className={
												status.success === false ? "danger" : "success"
											}
										>
											{status.message}
										</p>
									</Col>
								)}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Contacts
