import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import{myName} from "../../constants/constants";
import styles from './Contact.module.css';

const Contact = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const Name = myName
	console.log(Name)
	var date = new Date();
	var year = date.getFullYear();
	console.log("yy", year);
	return (
		<footer
			className={styles.footer}
			id='contact'
			// style={{ background: `${newTheme.highlightBackground}` }}
		>
			<div className={styles.container}>
				<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}
				>
					I'm actively looking for any new opportunities, in
					full-stack web development.
				</p>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.contactOptions}
				>
					<a
						href='tel:9890455817'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fas fa-phone-alt' />
					</a>
					<a
						href='mailto: sunilsarsande1998@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
					>
						<i className='far fa-envelope'></i>
					</a>
					<a
						href='https://mobile.twitter.com/home'
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='https://github.com/Sarsande-Sunil'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-github' />
					</a>

					<a
						href='https://www.linkedin.com/in/sunil-sarsande-5b8486195/'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
				</div>
			</div>
			<div
				style={{ background: `${newTheme.line}` }}
				className={styles.line}
			/>
			<div
				style={{ color: `${newTheme.para}` }}
				className={styles.copyright}
			>
				Designed and build by {Name}, © {year} All rights
				reserved.
			</div>
		</footer>
	);
};

export default Contact;
