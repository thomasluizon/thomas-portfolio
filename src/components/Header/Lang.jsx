import i18next from 'i18next'

const Lang = props => {
	return (
		<ul className={`header__nav__lang-menu ${props.style}`}>
			{props.languages.map(lang => (
				<li key={lang.country_code}>
					<button onClick={() => i18next.changeLanguage(lang.code)}>
						<span
							className={`flag-icon flag-icon-${lang.country_code}`}
						></span>
						{lang.name}
					</button>
				</li>
			))}
		</ul>
	)
}

export default Lang
