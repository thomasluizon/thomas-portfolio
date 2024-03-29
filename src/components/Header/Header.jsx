import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import Lang from './Lang'
import MobileDrawer from './MobileDrawer'

const Header = props => {
	const { t } = useTranslation()
	const [langMenu, setLangMenu] = useState(false)
	const [mobileDrawer, setMobileDrawer] = useState(false)

	const langClick = e => {
		const icon = document.querySelector('#lang')
		if (e.target != icon) {
			setLangMenu(false)
		}
	}

	const scroll = sections => {
		const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
		sections.forEach(section => {
			const sectionTop = section.offsetTop
			const sectionHeight = section.offsetHeight
			const sectionId = section.getAttribute('id')

			const checkpointStart = checkpoint >= sectionTop
			const checkpointEnd = checkpoint <= sectionTop + sectionHeight

			if (checkpointStart && checkpointEnd) {
				document
					.querySelectorAll(`li a[href*='${sectionId}']`)
					.forEach(link => {
						link.classList.add('active')
					})
			} else {
				document
					.querySelectorAll(`li a[href*='${sectionId}']`)
					.forEach(link => {
						link.classList.remove('active')
					})
			}
		})
	}

	const sectionsAll = useRef([])

	useEffect(() => {
		document
			.querySelectorAll('section')
			.forEach(section => sectionsAll.current.push(section))
		window.addEventListener('click', e => langClick(e))

		window.addEventListener('scroll', () => scroll(sectionsAll.current))
	}, [])

	useEffect(() => {
		mobileDrawer
			? document.body.classList.add('scroll')
			: document.body.classList.remove('scroll')
	}, [mobileDrawer])

	return (
		<>
			<header className="header" data-aos="slide-down">
				<div className="container">
					<h1 className="header__title">Portfolio</h1>
					<nav className="header__nav">
						<ul className="header__nav__menu">
							<li>
								<a className="active" href="#home">
									{t('nav-home')}
								</a>
							</li>
							<li>
								<a href="#about">{t('nav-about')}</a>
							</li>
							<li>
								<a href="#projects">{t('nav-projects')}</a>
							</li>
							<li>
								<a href="#contact">{t('nav-contact')}</a>
							</li>
						</ul>
						<button
							onClick={() => setMobileDrawer(!mobileDrawer)}
							className="header__drawer-btn"
						>
							<i className="bi bi-list"></i>
						</button>
						<div>
							<button
								onClick={() => setLangMenu(!langMenu)}
								className="header__nav__lang-btn"
							>
								<i id="lang" className="bi bi-globe2"></i>
							</button>
							<Lang
								style={langMenu ? '' : 'disappear'}
								languages={props.languages}
							/>
						</div>
					</nav>
				</div>
			</header>
			<MobileDrawer
				setMobileDrawer={setMobileDrawer}
				mobileDrawer={mobileDrawer}
				show={mobileDrawer ? 'show' : ''}
			/>
		</>
	)
}

export default Header
