import React, { Component } from 'react'
import TVShow from '../../sideNav/TVShow'
import PropTypes from 'prop-types'
import { isNumber } from 'util';

export default class PreviewPage extends Component {

    state = {
        name: "",
        rating: "",
        url: ""
    }

    calcAvgRating = () => {

        if(this.props.shows.length === 0){
            return false;
        }

        let total = this.props.shows.reduce((total, shows) => {
           return total + isNumber(shows.rating)
        })
        
        let avg = total/this.props.show.length;
        return avg;
    };

    tvShowSelected = () => {
        this.setState({
            name: this.state.props,
            rating: this.state.props,
            url: this.state.props
        })
    }

    renderShows = () => {
        return this.props.shows.filter((shows) => {
            return Number(shows.rating) <= 4
        }).map((show, i) => {
            return <TVShow 
            name={show.name} 
            allowDelete={true} 
            selectHandler={(e) => this.showSelected(e)}
            deleteHandler={this.showDeleted} />
        })
    }
    render() {
            return(
            <div>
        <div className="managePreview">
        </div>
        <div id="tvShowListings">
            <ul className="shows">
                <h2>Shows</h2>
                {() => this.renderShows}
            </ul>
            <div className="Ratings">
                <h2>[Ratings] </h2>
                {() => this.calcAvgRating}
            </div>
        </div>
        </div>
        )
    }
}

PreviewPage.propTypes = {
    shows: PropTypes.object.isRequired,
    show: PropTypes.array.isRequired
};