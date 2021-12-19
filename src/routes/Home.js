import { useState, useEffect } from 'react';
import Movie from '../components/Movie/index';
import BeatLoader from 'react-spinners/BeatLoader';

const loader_css = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 25px;
`;

let genre = '';
let clickedButton = undefined;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genre,setGenre] = useState('')
  const [rating,setRating] = useState(0)
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

  // const applyBoldText = (event) => {
  //   if (clickedButton) clickedButton.style.fontWeight = 'normal';
  //   clickedButton = event.target;
  //   clickedButton.style.fontWeight = 'bolder';
  // };

  const getMovies = async () => {
    console.log(genre)
    console.log(rating)
    const genreFilter=`genre=${genre}`;
    const ratingFilter=`&minimum_rating=${rating}`;
    setLoading(true);

    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?
        ${genreFilter}
        ${ratingFilter}
        `
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  // const populateRating = () =>{
  //   for(let i = 1; i <= ratingValueArray.length; i++){

  //   }
  // }

  useEffect(() => {
    getMovies();
  }, [genre, rating]);

  return (
    <div>
      {loading ? <div className="dim"></div> : ''}
      <div className='navigation'>
      <select 
        onChange={(event) => setRating(event.target.value)}
        title="Choose a rating please."
      >
        <option selected disabled hidden>Choose rating!</option>
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
      </div>

      {/* Button Navigation */}
      {/* <ul className="navigation">
        

        <li key="all">
          <button
            onClick={(event) => {
              applyBoldText(event);
              getMovies();
            }}
          >
            All
          </button>
        </li>
        {genresArray.map((genre) => {
          return (
            <li key={genre}>
              <button
                onClick={(event) => {
                  applyBoldText(event);

                  getMovies(genre);
                }}
              >
                {genre}
              </button>
            </li>
          );
        })}
      </ul> */}
      <div className="content">
        {loading ? (
          <div className="sweet-loading">
            <BeatLoader
              color={color}
              loading={loading}
              css={loader_css}
              size={20}
            />
          </div>
        ) : (
          <div>
            <ul className={movies ? 'movie-grid' : 'no-movies-page'}>
              {movies &&
                movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title_long}
                    rating={movie.rating}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                ))}
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

export default Home;
