import './Card.scss';

export const Card = ({ data }) => {
	return (
		<>
			{
				(data) ? (
					data.map(item => {
						return (
							<div className="card">
								<img
									src={`${item.thumbnail.path}.${item.thumnail.extension}`} alt='Hulk' />
								<div className="title">
									<h3>Hulk</h3>
								</div>
							</div>
						)
					})
				) : ""
			}
		</>
	)
}

