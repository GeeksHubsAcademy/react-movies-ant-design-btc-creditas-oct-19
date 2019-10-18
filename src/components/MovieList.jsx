import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
const { Meta } = Card;

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 0.6em;
`



function MovieList({movies}) {
    return (
        <Grid className="MovieList">
            {
                movies.map(movie => (
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title={movie.overview} description="www.instagram.com" />
                    </Card>
                ))
            }
        </Grid>
    )
}

export default MovieList