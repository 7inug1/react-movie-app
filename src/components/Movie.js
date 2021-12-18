import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImg, rating, title, summary, genres }) => {
  // console.log(genres);
  return (
    <li className="panel v1">
      <Link to={`/movie/${id}`} className="movieContainer">
        <h2 className="title">{title}</h2>
        <div className="content">
          <div className="poster">
            <img src={coverImg} alt={title} />
          </div>
          <div className="description">
            <ul className="genre">
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
            <span className="rating">⭐ {rating}</span>
            <p className="summary">
              {summary.length < 255 ? summary : `${summary.slice(0, 255)}...`}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

// function Movie({ id, coverImg, title, summary, genres }) {
//   return (
//     <li className="panel v1">
//       <Link to={`/movie/${id}`} className="movieContainer">
//         <div className="poster">
//           <img src={coverImg} alt={title} />
//         </div>
//         <div className="description">
//           <h2 className="title">
//             {/* <a href="/movie"> */}

//             {title}
//             {/* </a> */}
//           </h2>
//           <ul className="genre">
//             {genres.map((genre) => (
//               <li key={genre}>{genre}</li>
//             ))}
//           </ul>
//           <p className="summary">
//             {summary.length < 255 ? summary : `${summary.slice(0, 255)}...`}
//           </p>
//         </div>
//       </Link>
//     </li>
//   );
// }

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
