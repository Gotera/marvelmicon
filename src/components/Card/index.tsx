import { IData } from '../../interface/IData';
import './Card.scss';

export const Card = ({ data }: IData) => {
	return (
		<>
			{data && data.map(item => (
				<div
					className="card"
					key={item.id}
				>
					<img
						src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='Hulk' />
					<div className="title">
						<h3>{item.name}</h3>
					</div>
				</div>
			))}
		</>
	);
}

