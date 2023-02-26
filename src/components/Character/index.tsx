import './Character.scss'
import { Character, IData } from '../../interface/IData';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Characters = () => {
	const { id } = useParams();
	const [data, setData] = useState<Character>();

	const fetch = async () => {
		const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=e8abfc4d7ead0b8b0362ac59e7b75afb&hash=88038bcab9713de5733969f620c1fa31`)
		setData(res.data.data.results[0])
	}
	fetch()
	return (
		<>
			{
				(!data) ? "" : (
					<div className="container_content">
						<div className="img_box">
							<img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} />
							<h3>{data.name}</h3>
						</div>
						<div className="content_box"></div>
					</div>
				)
			}
		</>
	)
}

export default Characters;