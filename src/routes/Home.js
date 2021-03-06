import { useState, useEffect } from 'react';
import Movie from '../components/Movie/index';
import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components'

let genre = '';
let clickedButton = undefined;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState(0)
  const [color, setColor] = useState('#000000');
  const genresArray = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film-Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Short',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western',
  ];
  let ratingValueArray = [1,2,3,4,5,6,7,8,9];
  
  useEffect(() => {
    getMovies();
  }, [genre, rating]);

  const getMovies = async () => {
    const genreFilter=`genre=${genre}`;
    const ratingFilter=`&minimum_rating=${rating}`;
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?
        ${genreFilter}
        ${ratingFilter}
        `
      )
    ).json();

    setLoading(true);
    setMovies(json.data.movies);
    setLoading(false);
  };

  return (
    <div>
      {loading ? <Dim/> : ''}
      <Navigation>
      {/* <div className='navigation'> */}
      <select 
        onChange={(event) => setRating(event.target.value)}
        title="Choose a rating please."
      >
        <option  disabled hidden>Choose rating!</option>
        {ratingValueArray.reverse().map((value,index)=>{
          return(
            <option key={value} value={value}>{"⭐".repeat(value)}</option>
          )
        })}
        </select>
        <select
          onChange={(event) => setGenre(event.target.value)}
          title="Choose a genre please."
        >
          <option key="all" value="all">
            All
          </option>
          {genresArray.map((genre) => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>
      {/* </div> */}
      </Navigation>

      
      <div className="content">
        {loading ? (
          <div className="sweet-loading">

            <BeatLoader
              color={color}
              loading={loading}
              css={`display: block;
                margin: 0 auto;
                border-color: red;
                margin-top: 25px;`}
              size={20}
            />
          </div>
        ) : (
          <div>
            <ul className={movies ? 'movie-grid' : 'no-movies-page'}>
              {movies &&
                movies.map((movie) => (
                  <Movie 
                    // key={movie.id}
                    // id={movie.id}
                    // coverImg={movie.medium_cover_image}
                    {...movie}
                    // title={movie.title_long}
                    // rating={movie.rating}
                    // summary={movie.summary}
                    // genres={movie.genres}
                  />
                ))
                }
              {!movies && (
                <div>
                  <p>
                    No movies available in this genre! Please find something
                    else.
                  </p>
                  <img
                    src="https://via.placeholder.com/300?text=No+Movies+Available!"
                    alt="no movies available!"
                  />
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background: rgba(0, 0, 0, 0.3);
`;

const Navigation = styled.div`
  text-align: center;
  margin-top: 25px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  background: papayawhip;
`;
export default Home;
