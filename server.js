const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/contact", async (req, res) => {
	const { firstName, lastName, email, message } = req.body

	// Configure your email service
	let transporter = nodemailer.createTransport({
		// Your email service configuration goes here
		service: "gmail",
		auth: {
			user: "kamaumunyambu17@gmail.com",
			pass: "rmkpozthhtwbfvgy",
		},
	})

	// Set up email data
	let mailOptions = {
		from: email,
		to: "kamaumunyambu17@gmail.com",
		subject: `New message from ${firstName} ${lastName}`,
		text: message,
	}

	// Send email
	try {
		await transporter.sendMail(mailOptions)
		res.json({ success: true })
	} catch (error) {
		res.status(500).json({ success: false, message: error.message })
	}
})

app.listen(3000, () => console.log("Server started on port 3000"))
