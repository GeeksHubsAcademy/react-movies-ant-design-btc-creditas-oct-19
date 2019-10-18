import React from 'react';
import apiService from '../services/moviesApi.service';
import { Spin, Alert } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1em;
`;

class MoviesCategory extends React.Component {
  state = {
    movies: [],
    currentCategory: '',
    loading: false,
    error: false,
  };
  constructor(p) {
    super(p);
    this.componentDidMount = this.getMovies;
    this.componentDidUpdate = this.getMovies;
  }

  async getMovies() {
    const currentCategory = this.props.match.params.categoryName;
    if (currentCategory !== this.state.currentCategory && !this.state.loading) {
      this.setState({ loading: true, error: false });
      try {
        const data = await apiService.getMoviesByCategory(currentCategory);
        this.setState({
          movies: data.results,
          currentCategory,
          loading: false,
          error: false,
        });
      } catch {
        this.setState({
          loading: false,
          currentCategory,
          error: 'Fail fetching movies',
        });
      }
    }
  }

  render() {
    // console.log(this.props.match.params);

    return (
      <Wrapper className='MoviesCategory'>
        {this.state.error && (
          <Alert
            style={{ maxWidth: '300px' }}
            message={this.state.error}
            type='error'
            showIcon
          />
        )}
        {this.state.loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '2em',
            }}
          >
            <Spin size='large' />
          </div>
        ) : (
          <pre>{JSON.stringify(this.state.movies, null, 2)}</pre>
        )}
      </Wrapper>
    );
  }
}

export default MoviesCategory;
