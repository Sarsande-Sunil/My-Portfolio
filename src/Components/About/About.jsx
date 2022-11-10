import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? "https://avatars.githubusercontent.com/u/93374701?s=400&u=dfdd9e28273c536972e080cf0bb54fa6c964ae70&v=4"
			: "https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true";
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img
					src={
						"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"
					}
					alt=""
				/>
			</div>
			<div className={styles.second}>
				<h1 style={{ color: `${newTheme.title}` }} 
				className={styles.heading}>
					About Me
					<br />
				</h1>
				<div className={styles.borderBottom} />
				<p style={{ color: `${newTheme.para}` }} 
				className={styles.aboutMe}>
                   A passionate aspiring Full-Stack Web Developer skilled in MERN stack, Moduled and shaped by Masai School’s Numerous training.
					Passion and diligence are two traits that I believe most reflect me as an 
					individual.I’ve been faced with many Challenges.Without enthusiasm, patience, and some degree of positivity,
					we cannot bring about the change that Is needed to better life!
					Actively ready to join in the great lively team of A good start-up to adapt me in any situation and the environment with ease And perform the best.
					<span style={{ color: `#00a0a0` }}>
				    Looking for an opportunity as a full-stack web developer
					</span>
			    </p>
			</div>
		</div>
	);
};

export default About;
