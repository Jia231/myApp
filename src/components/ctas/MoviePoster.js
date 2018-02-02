import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MoviePoster extends Component {

    render() {
        //console.log(this.props.movie)
        const { title, poster_path, vote_average } = this.props.movie;
        let id;
        if ('id' in this.props.movie) {
            id = this.props.movie.id;
        } else if ('movieId' in this.props.movie) {
            id = this.props.movie.movieId;
        }
        console.log(this.props.movie)
        return (
            <div className="column">
                <div className="ui card" style={{ height: "500px" }} key={id} id={id}>
                    <div className="image">
                        <img src={`https://image.tmdb.org/t/p/w640${poster_path}`} />
                    </div>
                    <div className="content">
                        <Link to={`/Add/${id}`} className="header">{title}</Link>
                        <div className="description">
                            Rating {vote_average}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default MoviePoster;

