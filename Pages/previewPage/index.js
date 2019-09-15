import React, { Component } from 'react'
import TVShow from '../../sideNav/TVShow'
import PropTypes from 'prop-types'

export default class PreviewPage extends Component {

    state = {
            name: "",
            rating: "",
            url: ""
    }

    tvShowSelected = () => {
        this.setState({
            name: this.state.props,
            rating: this.state.props,
            url: this.state.props
        })
    }

    renderShows = () => {
        return (
            <TVShow
                {...this.props.show.name} 
                selectHandler={this.tvShowSelected}>
            
            </TVShow>
        )
    }

    renderShows = () => {
        return this.props.shows.filter((show) => {
            return Number(show.rating) <= 4
        }).map((show,ind) => {
            return <TVShow key={ind} name={show.name} allowDelete={true} selectHandler={(e) => this.showSelected(e)} deleteHandler={this.showDeleted} />
        })
    }

    render() {
        return (
            <div>
                <div className="managePreview">
                </div>
                <div id="tvShowListings">
                    <ul className="shows">
                        <h2>Shows</h2>
                        <li className="show1" allowDelete={false}>{this.renderShows} <button>{this.state.selectedShow}</button></li>
                        <li className="show2" allowDelete={false}>{this.renderShows} <button>{this.state.selectedShow}</button></li>
                        <li className="show2" allowDelete={false}>{this.renderShows} <button>{this.state.selectedShow}</button></li>
                    </ul>
                    <div className="showName">
                        <h2>[Show Name]</h2>
                    </div>
                    <div className="Ratings">
                        <h2>[Ratings] </h2>
                    </div>
                </div>
            </div>
        )
    }
}

PreviewPage.propTypes = {
    show: PropTypes.object.isRequired
  };