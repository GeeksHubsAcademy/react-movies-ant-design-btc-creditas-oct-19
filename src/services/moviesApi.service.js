import axios from 'axios';

class ApiService {
  constructor() {
    this.APIKEY = '323112ea2281b9eb70f319f4df422c6b';
    this.callsDone = 0;
  }

  async getMoviesByCategory(category, page = 1) {
    this.callsDone++;

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${this.APIKEY}&language=es-ES&page=${page}`,
    );
    return data;
  }

  async getMovieById(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.APIKEY}&language=es-ES`,
    );
    return data;
  }

  howManyCalls() {
    return this.callsDone;
  }
}

export default new ApiService();
