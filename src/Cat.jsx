import React, { useState } from 'react'

const Cat = ({ cat }) => {
	const [showInfo, setShowInfo] = useState(false)

	return (
		<div className='cat-block'>
			<img
				src={cat.image}
				alt={cat.name}
				className={`cat-image ${showInfo ? 'enlarge' : ''}`}
			/>
			<h3>{cat.name}</h3>
			<button onClick={() => setShowInfo(!showInfo)}>
				{showInfo ? 'Hide' : 'More info'}
			</button>
			{showInfo && <p className='cat-info'>{cat.description}</p>}
		</div>
	)
}

export default Cat
