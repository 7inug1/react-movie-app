import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import UnavailablePage from '../components/Movie/UnavailablePage';
import styledComponent from 'styled-components';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [color, setColor] = useState('#000000');

  const { id } = useParams();

  const pageGoBack = () =>{
    window.history.back();
  }

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
        <BackButton onClick={pageGoBack}>Go Back</BackButton>
        <div className="panel v2">
          <movieContainer>
            {(movie.data.movie.id===0)?
            (<UnavailablePage></UnavailablePage>):
            (
            <div>
            <Title>
              {movie.data.movie.title_long}
            </Title>
            <Content>
              <Poster>
                <Img
                  src={movie.data.movie.medium_cover_image}
                  alt={movie.data.movie.slug}
                />
              </Poster>
              <Description>
                <Genre>
                  {movie.data.movie.genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>;
                  })}
                </Genre>
                <Rating> 
                  ⭐ {movie.data.movie.rating}
                </Rating>
                <Summary>
                  {movie.data.movie.description_intro}
                </Summary>
              </Description>
            </Content>
            </div>
            )
            }

          </movieContainer>
        </div>
        </div>
      )}
    </div>
  );
};

const loader_css = `
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 25px;
`;

const BackButton = styledComponent.button`
`;

const panel = styledComponent.div`
  background: #fff;
  padding: 30px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  margin: auto;
`;

const movieContainer = styledComponent.div`
`

const Poster = styledComponent.div`
`

const Img = styledComponent.img`
`;

const Title = styledComponent.h2`
font-size: 24px;
color: #2c2c2c;
`;
const Content = styledComponent.div`
`;

const Description = styledComponent.div`
  padding-left: 30px;
  width: 300px;
`;
const Genre= styledComponent.ul`
`;
const Rating= styledComponent.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 18px;
`;

const Summary = styledComponent.p`
  margin-top: 20px;
`;

export default Detail;
