import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPopularMovies } from '../../actions/index';
import _ from 'lodash';
import MoviePoster from '../ctas/MoviePoster';

class PopularMovies extends Component {
    componentDidMount() {
        this.props.loadPopularMovies()
    }
    renderMovies() {
        if (this.props.movies.length > 0) {
            const movies = this.props.movies.slice(0, 10);
            const movieNodes = movies.map(movie => <MoviePoster key={movie.id} id={movie.id} movie={movie} />)
            const groupCards = _.chunk(movieNodes, 4);
            const rows = groupCards.map(row => <div className="ui four column grid">
                <div className="row">{row}</div></div>)
            return <div><h3 className="ui header">Most Popular movies!</h3>{rows}</div>;
        }
        else {
            return <div>Loading...</div>
        }

    }
    render() {
        return (
            <div>
                {this.renderMovies()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, { loadPopularMovies })(PopularMovies);