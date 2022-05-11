import MovieStars from 'components/MovieStars';

import './styles.css';

const MovieScore = () => {
  const score = 3.5;
  const count = 13;

  return (
    <div className="score-container">
      <p className="score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars />
      <p className="score-count">{count} avaliações</p>
    </div>
  );
};

export default MovieScore;
