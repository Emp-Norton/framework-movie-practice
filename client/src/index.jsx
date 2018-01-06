import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';


class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
     	movies: [
	  		{title: 'Mean Girls'},
	  		{title: 'Hackers'},
	  		{title: 'The Grey'},
	  		{title: 'Sunshine'},
	  		{title: 'Ex Machina'},
			]
    }
  }

  render() {
    return (
      <div>
      <Search />
      {this.state.movies.map(movie =>
    		<Movie movie={movie} />
      )}

      </div>
      
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
