import React, { useState, useEffect } from 'react'
import Cat from './Cat' // Import the Cat component
import './App.css' // Make sure to import your CSS

const App = () => {
	const [cats, setCats] = useState([])

	useEffect(() => {
		const fetchCats = async () => {
			try {
				const response = await fetch('/cats.json')
				const data = await response.json()

				// Normalize data: remove duplicates, empty objects, etc.
				const normalizedData = data
					.filter(
						(cat, index, self) =>
							index ===
							self.findIndex(t => t.name === cat.name && t.description)
					)
					.filter(cat => cat.name && cat.description && cat.image)

				setCats(normalizedData)
			} catch (error) {
				console.error('Failed to fetch cats', error)
			}
		}

		fetchCats()
	}, [])

	return (
		<div className='cat-list'>
			{cats.map(cat => (
				<Cat key={cat.name} cat={cat} />
			))}
		</div>
	)
}

export default App
