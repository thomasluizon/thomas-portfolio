import { useTranslation } from 'react-i18next'
import Project from './Project'
import { useState } from 'react'

const Projects = () => {
	const { t } = useTranslation()
	const [showMore, setShowMore] = useState(false)

	return (
		<section id="projects">
			<div className="container">
				<h2 className="projects__title" data-aos="slide-to-left">
					{t('my_projects')}
				</h2>
				<div className="projects__container">
					<Project
						repo="https://github.com/thomasluizon/publink-front"
						demo="https://publink.vercel.app"
						desc={t('publink_desc')}
						img="https://github.com/thomasluizon/publink-front/raw/main/public/imgs/Publink.jpeg"
					/>
					<Project
						repo="https://github.com/thomasluizon/url-shortening-api-react"
						demo="https://url-shortening-api-react.vercel.app/"
						desc={t('linkshortener_desc')}
						img="https://github.com/thomasluizon/url-shortening-api-react/raw/main/src/assets/Screenshots/Screenshot_2-mobile.png"
					/>

					{showMore && (
						<>
							<Project
								repo="https://github.com/thomasluizon/react-notes-app"
								demo="https://react-notes-app-thomas.vercel.app/"
								desc={t('notes_desc')}
								img="https://github.com/thomasluizon/react-notes-app/raw/main/Screenshot.png"
							/>
							<Project
								repo="https://github.com/thomasluizon/ip-address-tracker-react"
								demo="https://ip-address-tracker-react-thomas.vercel.app/"
								desc={t('ipaddress_desc')}
								img="https://github.com/thomasluizon/ip-address-tracker-react/blob/main/src/assets/ScreenshotMobile.png?raw=true"
							/>
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
