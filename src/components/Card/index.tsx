import { useNavigate } from 'react-router-dom';
import { IData } from '../../interface/IData';
import './Card.scss';

export const Card = ({ data }: IData) => {
	const navigate = useNavigate();
	return (
		<>
			{data && data.map(item => (
				<div
					className="card"
					key={item.id}
					onClick={() => navigate(`/${item.id}`)}
				>
					<img
						src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='{item.name}' />
					<div className="title">
						<h3>{item.name}</h3>
					</div>
				</div>
			))}
		</>
	);
}

