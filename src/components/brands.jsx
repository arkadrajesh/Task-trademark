import React from 'react';
import kick from '../images/kick.png';
import indigo from '../images/indigo.png';
import shark from '../images/shark.png';
import dragon from '../images/dragon.png';
import './brands.css';
const Brands = () => {
	return (
        <div className='brand'>

		<div className="brand-title">
			<p>
				Our <span className="client">clients</span> have been featured on
			</p>
		</div>
        <div className='brands'>
            <div className='shark-brand'>

            <img className='shark' src={shark} alt=""/>
            </div>
            <div className='indigo-brand'>
            <img className='indigo' src={indigo} alt=""/>

            </div>
            <div className='kick-brand'>

            <img className='kick' src={kick} alt=""/>
            </div>
            <div className='dragon-brand'>

            <img className='dragon' src={dragon} alt=""/>
            </div>
        </div>
        </div>
	);
};

export default Brands;
