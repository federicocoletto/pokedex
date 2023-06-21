import './styles/PokePagination.css'

const PokePagination = ({ pokemonsPerPage, totalPokemons, paginate }) => {
	const pageNumbers = [];
	

	for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
		pageNumbers.push(i)
	}

	const handlePagination = (e) => {
		console.log(e.target['__reactProps$9j4odp3ktu'].children);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<a onClick={handlePagination} className="page-link">
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default PokePagination