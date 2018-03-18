import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUserCollection, removeMovie } from "../../actions/index";
import MoviePoster from '../ctas/MoviePoster';
import _ from 'lodash';


class Dashboard extends Component {

  componentDidMount() {
    this.props.loadUserCollection(this.props.userId)
  }
  onDelete = (_id, userId) => {
    this.props.removeMovie(_id, userId)
  }
  renderMovie() {
    const data = this.props.movies;
    console.log(data)
    //if (!!data.movies) {
    if (!_.isEmpty(data.movies)) {
      const data = this.props.movies;
      const movieNodes = data.movies.map(movie => <MoviePoster onDelete={this.onDelete}
        key={movie.id} id={movie.id} movie={movie} userId={this.props.userId} />)
      const groupCards = _.chunk(movieNodes, 4);
      const rows = groupCards.map(row => <div className="ui four column grid">
        <div className="row">{row}</div></div>)
      return <div><h3 className="ui header">Your own collection!</h3>{rows}</div>;
    }
    else if (data.length > 10) {
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
    const { name, movies } = this.props;
    return (
      <div>
        <h1 className="ui header">Welcome {name},</h1>
        {this.renderMovie()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.id,
    name: state.user.name,
    movies: state.movies
  };
}

export default connect(mapStateToProps, { loadUserCollection, removeMovie })(Dashboard);
