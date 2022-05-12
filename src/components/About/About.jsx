import { useTranslation } from 'react-i18next';
import codingGif from '../../../assets/imgs/coding.gif';

const About = () => {
	const { t } = useTranslation();

	const getAge = () => {
		const today = new Date();
		const birthDate = new Date('05/28/2004');
		let age = today.getFullYear() - birthDate.getFullYear();
		const month = today.getMonth() - birthDate.getMonth();

		if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	};

	return (
		<section id="about">
			<div className="container">
				<div data-aos="slide-from-top" className="about__desc">
					<h3>{t('who_am_i')}</h3>
					<h2>{t('about_me')}</h2>
					<p>
						<span>{t('desc_1', { age: getAge() })}</span>
						<span>{t('desc_2')}</span>
						<span>{t('desc_3')}</span>
					</p>
				</div>
				<div data-aos="slide-to-left" className="about__img">
					<img src={codingGif} alt={t('gif')} />
				</div>
			</div>
		</section>
	);
};

export default About;
