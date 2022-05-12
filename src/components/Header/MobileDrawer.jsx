import { useTranslation } from 'react-i18next';

const MobileDrawer = props => {
	const { t } = useTranslation();
	const handleDrawer = () => {
		props.setMobileDrawer(!props.mobileDrawer);
	};

	return (
		<nav className={`header__nav-mobile ${props.show}`}>
			<button onClick={handleDrawer} className="header__nav-mobile-close">
				<i className="bi bi-x-lg"></i>
			</button>
			<ul>
				<li onClick={handleDrawer}>
					<a className="active" href="#home">
						{t('nav-home')}
					</a>
				</li>
				<li onClick={handleDrawer}>
					<a href="#about">{t('nav-about')}</a>
				</li>
				<li onClick={handleDrawer}>
					<a href="#projects">{t('nav-projects')}</a>
				</li>
				<li onClick={handleDrawer}>
					<a href="#contact">{t('nav-contact')}</a>
				</li>
			</ul>
		</nav>
	);
};

export default MobileDrawer;
