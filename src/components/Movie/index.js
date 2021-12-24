import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styledComponent from 'styled-components'

const Movie = ({ id, coverImg, rating, title, summary, genres }) => {
  const [movieSaveToggle, setMovieSaveToggle] = useState(false)
  
  // const saveMovieToLocalStorage = async() =>{
  //   if(movieSaveToggle){
  //     console.log("true")
  //   }
  // }

  // useEffect(()=>{
  //   saveMovieToLocalStorage();
  // }, [movieSaveToggle])
  // console.log(genres);
  return (
    <li className="panel v1">
      <Link to={`/movie/${id}`} className="movieContainer" style={{ position: 'relative', zIndex: '1' }}>
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
            <button className="saveButton" 
            // onClick={setMovieSaveToggle()}
            >save</button>
            <Summary>
              {summary.length < 255 ? summary : `${summary.slice(0, 255)}...`}
            </Summary>

          </div>
        </div>
      </Link>
    </li>
  );
};

const Summary = styledComponent.p`
  margin-top: 20px;
`;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
