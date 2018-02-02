import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import InlineErrors from '../messages/InlineErrors';

class MovieCard extends Component {
    state = {
        errors: ""
    }
    onSubmit = () => {
        const { poster_path, title, overview, vote_average } = this.props.movie
        const { userId, movieId } = this.props
        const movie = {
            movieId: movieId,
            overview: overview,
            poster_path: poster_path,
            title: title,
            vote_average: vote_average,
            userId: userId
        }
        this.props.submit(movie)
            .catch(err => this.setState({ errors: err.response.data.errors.global }))
    }
    render() {
        const cardImageStyle = {
            width: "15%"
        }
        const cardStyle = {
            width: "100%"
        }
        const metaStyle = {
            marginBottom: "20px",
            marginTop: "20px"
        }
        const headerStyle = {
            marginBottom: "10px"
        }
        if (_.isEmpty(this.props.movie) == false) {
            const { poster_path, title, overview, vote_average } = this.props.movie;
            return (
                <div>
                    {!!this.state.errors && (
                        <div className="ui negative message">
                            <div className="header">{this.state.errors}</div>
                        </div>
                    )}
                    <div className="ui cards">
                        <div className="card" style={cardStyle}>
                            <div className="content">
                                <img style={cardImageStyle}
                                    className="right floated mini ui image"
                                    src={`https://image.tmdb.org/t/p/w640${poster_path}`} />
                                <div className="header">
                                    {title}
                                </div>
                                <div className="meta">
                                    <div style={metaStyle}><h5
                                        style={headerStyle}>Description:</h5>{overview}</div>
                                    <div>Rating: {vote_average}</div>
                                </div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div onClick={this.onSubmit}
                                        className="ui basic green button">Add Movie</div>
                                    <Link to="/Dashboard"
                                        className="ui basic red button"><div>Go to Dashboard</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <div>Loading...</div>
        }
    }

}

export default MovieCard;

