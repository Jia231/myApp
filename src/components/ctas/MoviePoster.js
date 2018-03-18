import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from 'semantic-ui-react'

class MoviePoster extends Component {
    onRemove = (_id, userId) => {
        this.props.onDelete(_id, userId)
    }
    render() {
        //get the movie object from props
        const { title, poster_path, vote_average } = this.props.movie;
        //this variable will let us know if we should have the remove button, in case it is a movie from moviedb api we do not need to delete it.
        let popularMovie = false;
        //This id will be extracted from moviedb or our own api, they are implemented differently
        let id;
        if ('id' in this.props.movie) {
            id = this.props.movie.id;
        } else if ('movieId' in this.props.movie) {
            //In case movie comes from moviedb popular movie variable wil be true
            id = this.props.movie.movieId;
            popularMovie = true;
        }
        //Extracts the userId
        const { userId } = this.props
        return (
            <div className="column">
                <div className="ui card" style={{ height: "500px" }} key={id} id={id}>
                    <div className="image">
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} />
                    </div>
                    <div className="content">
                        <Link to={`/Add/${id}`} className="header">{title}</Link>
                        <div className="description">
                            Rating {vote_average}
                        </div>
                        <div className="footer">
                            {popularMovie &&
                                <button onClick={() => this.onRemove(this.props.movie._id, userId)}
                                    className="negative ui button">Remove movie</button>}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default MoviePoster;

