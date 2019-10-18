import React from 'react';
import apiService from '../services/moviesApi.service';
import { Spin } from 'antd';
class MoviesCategory extends React.Component {
  state = {
    movies: [],
    currentCategory: '',
    loading: false,
  };
  constructor(p) {
    super(p);
    this.componentDidMount = this.getMovies;
    this.componentDidUpdate = this.getMovies;
  }

  async getMovies() {
    const currentCategory = this.props.match.params.categoryName;
    if (currentCategory !== this.state.currentCategory && !this.state.loading) {
      this.setState({ loading: true });
      try {
        const data = await apiService.getMoviesByCategory(currentCategory);
        this.setState({
          movies: data.results,
          currentCategory,
          loading: false,
        });
      } catch {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    // console.log(this.props.match.params);

    return (
      <div className='MoviesCategory'>
        {this.state.loading ? (
          <div style={{display:'flex', justifyContent:'center',padding:'2em'}}>
            <Spin size='large' />
          </div>
        ) : (
          <pre>{JSON.stringify(this.state.movies, null, 2)}</pre>
        )}
      </div>
    );
  }
}

export default MoviesCategory;
