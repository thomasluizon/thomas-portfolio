const Project = props => {
	return (
		<div data-aos="slide-from-top" className="projects__project">
			<img src={props.img} />
			<div className="project__about">
				<p>{props.desc}</p>
				<div className="project__btns">
					<a target="_blank" href={props.repo}>
						<i className="bi bi-github"></i>
						Repo
					</a>
					<a target="_blank" href={props.demo}>
						Demo
					</a>
				</div>
			</div>
		</div>
	)
}

export default Project
