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
    'Film Noir',
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

  const applyBoldText = (event) => {
    if (clickedButton) clickedButton.style.fontWeight = 'normal';
    clickedButton = event.target;
    clickedButton.style.fontWeight = 'bolder';
  };

  const getMovies = async (filter) => {
    console.log(filter)
    console.log(typeof(filter))

    if (genre !== filter) {
      genre = filter;

      setLoading(true);
      const json = await (
        await fetch(
          // minimum_rating=9
          `https://yts.mx/api/v2/list_movies.json?${
            typeof(filter)==="string" && `&genre=${filter}`
        }
            ${typeof(filter)==="number" && `&minimum_rating=${filter}`
            


            // filter ? `&genre=${filter}` : ''
          }`
        )
      ).json();

      setMovies(json.data.movies);

      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? <div className="dim"></div> : ''}
      <ul className="navigation">
        <select 
        onChange={(event) => getMovies(Number(event.target.value))}
        title="Choose a rating please.">
          <option selected disabled hidden>Choose rating!</option>
          <option key="9" value="9">⭐⭐⭐⭐⭐⭐⭐⭐⭐</option>
          <option key="8" value="8">⭐⭐⭐⭐⭐⭐⭐⭐</option>
          <option key="7" value="7">⭐⭐⭐⭐⭐⭐⭐</option>
          <option key="6" value="6">⭐⭐⭐⭐⭐⭐</option>
          <option key="5" value="5">⭐⭐⭐⭐⭐</option>
          <option key="4" value="4">⭐⭐⭐⭐</option>
          <option key="3" value="3">⭐⭐⭐</option>
          <option key="2" value="2">⭐⭐</option>
          <option key="1" value="1">⭐</option>
        </select>
        <select
          onChange={(event) => getMovies(event.target.value)}
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
      </ul>
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
