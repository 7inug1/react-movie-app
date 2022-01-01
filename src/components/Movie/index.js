import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components'

const Movie = ({ id, medium_cover_image, rating, title, summary, genres }) => {
  // const [movieSaveToggle, setMovieSaveToggle] = useState(false)
  
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
          <Content>
        {/* <div className="content"> */}
          {/* <div className="poster"> */}
            <Poster>
              <img src={medium_cover_image} alt={title} />
            </Poster>
          {/* </div> */}
          {/* <div className="description"> */}
            <Description>
              {/* <div>{genres}</div> */}
              
              <Genre>
                {genres && genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </Genre>
            </Description>
            {/* </ul> */}
            <Rating>
              ⭐ {rating}
            </Rating>
            {/* <button className="saveButton"  */}
            {/* // onClick={setMovieSaveToggle()} */}
            {/* >save</button> */}
            <Summary>
              {summary.length < 255 ? summary : `${summary.slice(0, 255)}...`}
            </Summary>
          {/* </div> */}
        {/* </div> */}
        </Content>
      </Link>
    </li>
  );
};

const Content = styled.div`

`;

const Poster = styled.div`

`;

const Description = styled.div`
  padding-left: 30px;
`;
const Genre = styled.ul`
`;
const Rating = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 18px;
`;

const Summary = styled.p`
  margin-top: 20px;
`;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
