import React from 'react';
import gp16 from '../images/Group 16.png';
import vector from '../images/Vector.png';
import cart from '../images/cart.png';
import './navbar.css';

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="nav-items">
				<img src={gp16} alt="" className='image1'/>
				<p>PatentExpress</p>
			</div>
            <div className='actions'>
				<ul className='planactions'>
					<li>File a Patent</li>
					<li>Patent Services <span><img src={vector} alt=""/></span></li>
					<li>Trademark Services <span><img src={vector} alt=""/></span></li>
					<li>Learning Center</li>
				</ul>
			</div>
			<div className='icons'>
				<img className='cart' src={cart} alt=""/>
				<button className='login'>Login</button>
			</div>

		</div>
	);
};

export default NavBar;
