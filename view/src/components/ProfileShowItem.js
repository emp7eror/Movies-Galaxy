import React, { Component } from 'react';
import '../Assets/CSS/MovieShowItem.css';
import { Link } from 'react-router-dom';

class ProfileShowItem extends Component {
    handleItemClick = () => {};
    render() {
        const {
            show,
            whatList,
            removeFromWatchlist,
            addToWatchlist,
            removeFromWatchedlist,
            addToWatchedlist
        } = this.props;
        return (
            <div onClick={this.handleItemClick} className="item-container">
                <Link to={'/show-details/' + show.id} key={show.id}>
                    <div className="poster-title">
                        <img
                            className="poster"
                            src={
                                show.backdrop_path === null
                                    ? require('../Assets/Images/No Poster.svg')
                                    : `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                            }
                            alt="poster"
                        />
                        <img
                            src={require('../Assets/Images/MovieItemOverlay.svg')}
                            alt=""
                            className="overlay"
                        />
                        <h3 className="movie-title">
                            {show.name.length > 17
                                ? show.name.slice(0, 17) + '...'
                                : show.name}
                        </h3>
                        <small className="date">
                            ({show.first_air_date.split('-')[0]})
                        </small>
                    </div>
                </Link>
                <div className="btns-rate">
                    <div className="btns">
                        {whatList === 'show watchlist' ? (
                            <>
                                <img
                                    onClick={addToWatchedlist.bind(
                                        this,
                                        show.id
                                    )}
                                    className="watchlist-btn"
                                    src={require('../Assets/Icons/Watched-Seq.svg')}
                                    alt=""
                                />
                                <img
                                    onClick={removeFromWatchlist.bind(
                                        this,
                                        show.id
                                    )}
                                    className="cancel-btn"
                                    src={require('../Assets/Icons/cancel.svg')}
                                    alt=""
                                />
                            </>
                        ) : whatList === 'show watchedlist' ? (
                            <>
                                <img
                                    onClick={addToWatchlist.bind(this, show.id)}
                                    className="watchlist-btn"
                                    src={require('../Assets/Icons/WatchList-Seq.svg')}
                                    alt=""
                                />
                                <img
                                    onClick={removeFromWatchedlist.bind(
                                        this,
                                        show.id
                                    )}
                                    className="cancel-btn"
                                    src={require('../Assets/Icons/cancel.svg')}
                                    alt=""
                                />
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                    <small className="rate">{show.vote_average}/10</small>
                </div>
            </div>
        );
    }
}
export default ProfileShowItem;
