import React from "react"

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
import NavBar from "./Components/Navigation/NavBar"
import About from "./Components/About/About"
//import Portfolio from "./Components/Portfolio/Portfolio"
import { Skills } from "./Components/Skills"
import { Project } from "./Components/Projects/Project"
import Contacts from "./Components/Contact/Contacts"
import Footer from "./Components/Footer/Footer"

const App = () => {
	return (
		<div>
			<NavBar />
			<About />
			<Skills />
			<Project />
			<Contacts />
			<Footer />
		</div>
	)
}

export default App
