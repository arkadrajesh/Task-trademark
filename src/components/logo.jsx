import React from 'react';
import trademarkia from '../images/trademarkia.png';
import trustpilot from '../images/trustpilot.png';
import shopper from '../images/shopper.png';
import './logo.css';

const Logo = () => {
	return (
		<div className="logo-container">
			<div className="logos">
				<div>
					<h5>From the creators of</h5>
					<img src={trademarkia} alt="" />
					<p>(A product of LegalForce RAPC)</p>
				</div>
                <hr></hr>
				<div>
					<h5>Rated 4.7/5 by 1000+ users</h5>
					<img src={trustpilot} alt="" />
				</div>
                <hr></hr>
				<div>
					<h5>Rated 4.8/5 by 1000+ users</h5>
					<img src={shopper} alt="" />
				</div>
			</div>
            <div></div>
		</div>
	);
};

export default Logo;
