import React from 'react';
import { removeHyphensAndCapitalize } from './utils/helpers';


function Card({ card }) {
	const { name, repo, link, description } = card;

	return (
		<div className="col-lg-4 col-sm-6">
		<div className="project-box">
			<img
				src={require(`../assets/images/${name}.png`).default}
				alt={removeHyphensAndCapitalize(name)}
				className="img-fluid"
			/>
			<div className="project-box-caption">
				<div className="project-box-caption-content">
				<a href={repo} className="project-category text-faded" target="_blank" rel="noreferrer">
						<i className="fab fa-github"></i>
					</a>
					<br />
					<a href={link} className="card-category text-faded" target="_blank" rel="noreferrer">{removeHyphensAndCapitalize(name)}</a>{' '}
					
					<p className="card-name">{description}</p>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Card;