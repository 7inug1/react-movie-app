import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    console.log(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="content">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="panel v2">
          <div className="movieContainer">
            <h2 className="title">{movie.data.movie.title_long}</h2>
            <div className="content">
              <div className="poster">
                <img
                  src={movie.data.movie.medium_cover_image}
                  alt={movie.data.movie.slug}
                />
              </div>
              <div className="description">
                <ul className="genre">
                  {movie.data.movie.genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>;
                  })}
                </ul>
                <span className="rating">
                  IMDB rating: {movie.data.movie.rating}
                </span>

                <p className="summary">{movie.data.movie.description_intro}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// function Detail() {
//   const [loading, setLoading] = useState(true);
//   const [movie, setMovie] = useState([]);

//   const { id } = useParams();
//   const getMovie = async () => {
//     const json = await (
//       await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
//     ).json();
//     setMovie(json);
//     console.log(json);
//     setLoading(false);
//   };
//   // console.log(id)

//   useEffect(() => {
//     getMovie();
//   }, []);

//   return (
//     <div className="content">
//       <div className="panel v2">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : (
//           <div className="movieContainer">
//             <div className="poster">
//               <img
//                 src={movie.data.movie.medium_cover_image}
//                 alt={movie.data.movie.slug}
//               />
//             </div>
//             <div className="description">
//               <h2 className="title">{movie.data.movie.title_long}</h2>
//               <span className="rating">
//                 IMDB rating: {movie.data.movie.rating}
//               </span>
//               <ul className="genre">
//                 {movie.data.movie.genres.map((genre, index) => {
//                   return <li key={index}>{genre}</li>;
//                 })}
//               </ul>
//               <p className="summary">{movie.data.movie.description_intro}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

export default Detail;
