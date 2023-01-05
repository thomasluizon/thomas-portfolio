import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

const App = () => {
	const languages = [
		{
			code: 'pt',
			name: 'Português',
			country_code: 'br',
		},
		{
			code: 'en',
			name: 'English',
			country_code: 'us',
		},
	]

	useEffect(() => {
		Aos.init({ duration: 2000, once: true })
	}, [])

	return (
		<>
			<Header languages={languages} />
			<main>
				<Home />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default App
