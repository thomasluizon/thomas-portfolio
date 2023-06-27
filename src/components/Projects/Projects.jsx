import { useTranslation } from 'react-i18next'
import Project from './Project'
import { useEffect, useState } from 'react'

const Projects = () => {
	const { t } = useTranslation()
	const [showMore, setShowMore] = useState(false)
	const [projects, setProjects] = useState([])

	useEffect(() => {
		async function fetchRepositories() {
			const token = import.meta.env.VITE_GITHUB_TOKEN
			const authorization = `Bearer ${token}`
			const apiUrl = 'https://api.github.com/user/repos'

			const res = await fetch(apiUrl, {
				method: 'GET',
				headers: {
					Authorization: authorization,
				},
			})

			const json = await res.json()

			const repos = json.filter(repo =>
				repo.topics.includes('show-portfolio')
			)

			const projectArray = []

			repos.forEach(repository => {
				const repoUrl = repository.html_url

				const obj = {
					repo: repoUrl,
					demo: repository.homepage,
					desc: repository.description,
					img: `${repoUrl}/blob/main/screenshot.jpeg?raw=true`,
				}

				projectArray.push(obj)
			})

			setProjects(projectArray)
		}

		fetchRepositories()
	}, [])

	return (
		<section id="projects">
			<div className="container">
				<h2 className="projects__title" data-aos="slide-to-left">
					{t('my_projects')}
				</h2>
				<div className="projects__container">
					{projects
						.filter((p, i) => i < 2)
						.map((project, i) => {
							return (
								<Project
									repo={project.repo}
									demo={project.demo}
									desc={project.desc}
									img={project.img}
									key={project.repo}
								/>
							)
						})}

					{showMore && (
						<>
							{projects
								.filter((p, i) => i >= 2)
								.map((project, i) => {
									return (
										<Project
											repo={project.repo}
											demo={project.demo}
											desc={project.desc}
											img={project.img}
											key={project.repo}
										/>
									)
								})}
						</>
					)}
				</div>

				<button
					className="show-more"
					data-aos="slide-from-top"
					onClick={() => setShowMore(!showMore)}
				>
					{t(showMore ? 'show_less' : 'show_more')}
				</button>
			</div>
		</section>
	)
}

export default Projects
