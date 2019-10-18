import React from 'react';
import apiService from '../services/moviesApi.service';
import { Spin, Alert, Avatar, Typography, Rate } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;




const Wrapper = styled.div`
`;

const MovieData = styled.div`
padding: 1em;
position:relative;

color:white;

::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image:
   url('https://image.tmdb.org/t/p/original/${props =>
     props.movie.backdrop_path}');
  background-size:cover;
  filter: brightness(20%);
  z-index:0;
}
& > * {
position:relative;

   z-index:1;
}


`;

class MovieDetail extends React.Component {
  state = {
    movie: null,
    loading: false,
    error: false,
  };
  constructor(p) {
    super(p);
    this.componentDidMount = this.getMovie;
    this.componentDidUpdate = this.getMovie;
  }

  async getMovie() {
    const currentMovieId = this.props.match.params.id;
    if (currentMovieId !== this.state.currentMovieId && !this.state.loading) {
      this.setState({ loading: true, error: false });
      try {
        const data = await apiService.getMovieById(currentMovieId);
        console.log(data);

        this.setState({
          movie: data,
          currentMovieId,
          loading: false,
          error: false,
        });
      } catch {
        this.setState({
          loading: false,
          currentMovieId,
          error: 'Fail fetching movie',
        });
      }
    }
  }

  render() {
    // console.log(this.props.match.params);
    const {loading, movie, error} = this.state;

    return (
      <Wrapper className='MovieDetail'>
        {error && (
          <Alert
            style={{ maxWidth: '300px' }}
            message={error}
            type='error'
            showIcon
          />
        )}

        {loading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '2em',
            }}
          >
            <Spin size='large' />
          </div>
        )}

        {movie && (
          <MovieData movie={movie}>
            <Title>
              {movie.title} {movie.release_date}
            </Title>
            <Title level={3}>{movie.original_title}</Title>
            {movie.production_companies.map(
              comp =>
                comp.logo_path && (
                  <Avatar
                    size={44}
                    style={{ background: 'white', marginRight: 10 }}
                    shape='square'
                    src={'https://image.tmdb.org/t/p/w200/' + comp.logo_path}
                  ></Avatar>
                ),
            )}
            <div style={{ color: 'yellow' }}>
              <Rate
                allowHalf
                disabled
                defaultValue={Math.round(movie.vote_average) / 2}
              />
            </div>
            <div>
              {movie.homepage && <a href={movie.homepage}>{movie.homepage}</a>}
            </div>
            <Paragraph>{movie.tagline}</Paragraph>

            <Paragraph>{movie.overview}</Paragraph>
            {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
          </MovieData>
        )}
      </Wrapper>
    );
  }
}

export default MovieDetail;
