import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
const { Meta } = Card;

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 0.6em;
    * {
        color:white!important;
    }
`

const Img = styled.img`
  max-height: 200px;
  overflow: hidden;
  object-fit: cover;
`;


function MovieList({movies}) {
    console.log(movies);

    return (
      <Grid className='MovieList'>
        {movies.map(movie => (
          <Card
            key={movie.id}
            hoverable
            bordered={false}
            bodyStyle={{
              background: '#222',
              color: 'white',
            }}
            cover={
              <Img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              />
            }
          >
            <Meta title={movie.title} description={movie.release_date} />
          </Card>
        ))}
      </Grid>
    );
}

export default MovieList