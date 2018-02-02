import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../../actions/index';
import { Link } from 'react-router-dom';
import { saveMovie } from '../../actions/index';
import MovieCard from '../ctas/MovieCard';

class AddMoviePage extends Component {

    componentDidMount() {
        this.props.searchMovie(this.props.match.params.id)
    }
    onSubmit = data =>
        this.props.saveMovie(data)
            .then(() => this.props.history.push("/Dashboard"))

    renderMovie() {
        if (!!this.props.movie) {
            return (
                <MovieCard movieId={this.props.match.params.id}
                    submit={this.onSubmit} userId={this.props.user.id}
                    movie={this.props.movie} />
            )
        }
        else {
            return <div>Loading...</div>
        }
    }
    render() {
        return (
            <div>
                {this.renderMovie()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        movie: state.movies,
        user: state.user
    }
}
export default connect(mapStateToProps, { searchMovie, saveMovie })(AddMoviePage);


