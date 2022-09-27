import React from 'react';
import './body.css';
import img2 from '../images/image2.png';

const Body = () => {
	return (
		<div className="container">
			<div className="container-text">
				<div className="title">
					<h1>Fastest Approach to </h1>
					<h1>
						<span>Patent</span> Your Inventions
					</h1>
				</div>
				<div className="title-small">
					<p>We provide you with comprehensive guidance and</p>
					<p>assistance while filing patents for your inventions</p>
					<p>in the most efficient process.</p>
				</div>
				<div className="rectangle">
					<button className="startfillingyourpatent">Start Filling Your Patent</button>
				</div>
			</div>
			<div className="container-image">
				<img className="image" src={img2} alt="" />
			</div>
		</div>
	);
};

export default Body;
