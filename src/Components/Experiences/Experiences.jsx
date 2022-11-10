import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				 Full-Stack Web Developer | Software Development Engineer-1{' '}
					<a href='https://www.allen.ac.in/'>@ ALLEN CAREER INSTITUTE</a>
				</div>
				<div className={styles.date}>Aug 2022 - Present(full-time)</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & Responsibilities </h3>
					</legend>
					<ul>
						<li>
							Working as a Full-Stack developer,with team of backend development, 
						</li>
						<li>
							Worked on the main project ERP Software,(Enterprise resource planning )
						</li>
						<li>
							Developed API & Microservices according to functionality and logic's using framework like a
							Node.js,Express.js,Sequelize,Mysql etc.  
						</li>
						<li>
							Maintain mysql database structure,queries,model and datatypes
						</li>
						<li>
							Solving the issue related with code in backend side as well as fronted also 
							related with design and database.
						</li>
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
