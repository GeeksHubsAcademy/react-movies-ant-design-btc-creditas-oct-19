import React from 'react';
import apiService from '../services/moviesApi.service';
class MoviesCategory extends React.Component {
  state = {
    movies: [],
    currentCategory: '',
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    this.getMovies();
  }

  getMovies() {
    const currentCategory = this.props.match.params.categoryName;
    if (currentCategory !== this.state.currentCategory) {
      apiService.getMoviesByCatergory(currentCategory).then(data => {
        this.setState({ movies: data.results, currentCategory });
      });
    }
  }

  render() {
    // console.log(this.props.match.params);

    return (
      <div className='MoviesCategory'>
        <pre>{JSON.stringify(this.state.movies, null, 2)}</pre>
      </div>
    );
  }
}

export default MoviesCategory;
