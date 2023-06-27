import React from "react"
import { Col } from "react-bootstrap"

const ProjectsCard = ({ title, description, imgUrl, live }) => {
	return (
		<Col sm={6} md={4}>
			<div className='proj-imgbx'>
				<img src={imgUrl} alt='projrct' className='imgs' />
				<div className='proj-txtx'>
					<h4>{title}</h4>
					<span>{description}</span>
					<a href={live}>
						<button className='btn btn-danger m-3'>Go live</button>
					</a>
				</div>
			</div>
		</Col>
	)
}

export default ProjectsCard
