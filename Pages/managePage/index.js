import React, { Component } from 'react'
import SideNav from '../../sideNav/TVShow'
import PropTypes from 'prop-types'

export default class ManagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tvShow: [
                {newName: "",
                newRating: "3",
                newUrl: "https://www.blank.com"}
            ],
            shows: []
        }
    }

    tvShowSelected = () => {
        console.log("tvShowSelected");
    }

    // deleteButton = (showIndex) => {
    //     const tvShow = [...this.state.tvShows];
    //     tvShow.splice(showIndex, 1);
    //     this.setState({ tvShow: tvShow })
    // }

    updateShow = (tvShow) => {
        this.setState((prevState) => ({
            tvShow,
            shows: [...prevState.shows, tvShow]
        })
        )
    }


    saveTVshow = () => {
        let shows = [];

        for (let i = 0; i < this.state.shows.length; i++) {
            return shows.push(<SideNav name={shows.title} tvShowSelected={(e) => {

            }} />)
        }
    }

    renderShows = () => {
        return (
            this.state.shows.map((c, i) => {
                return <SideNav key={i} name={c.name} />
            }
            )
        )
    }
    render() {
        return (
            <div>
                <div className="tvShowListings">

                    {this.renderShows()}

                    <div className="new_edit_show">
                        <h2>New/Edit Show</h2>
                        <ul className="shows">
                            <li className="show2"><SideNav title={"My GF is a Gumiho"} name={this.state.name} selectHandler={this.tvShowSelected} allowDelete={true} /></li>
                        </ul>
                        <div className="form-example">
                            <div className="form-example">
                                <label htmlFor="name">Enter your show: </label>
                                <input type="text" value={this.state.newName} onChange={(e) => {
                                    this.setState({
                                        tvShow: {
                                            newName: e.target.value,
                                            newRating: this.state.tvShow.newRating,
                                            newUrl: this.state.tvShow.newUrl
                                        }
                                    })
                                }} placeholder="Show name"></input>
                            </div>

                            <div className="form-example">
                                <label htmlFor="rating">Enter your rating: </label>
                                <input type="text" value={this.state.newRating} onChange={(e) => {
                                    this.setState({
                                        tvShow: {
                                            newRating: e.target.value,
                                            newName: this.state.tvShow.newName,
                                            newUrl: this.state.tvShow.newUrl
                                        }
                                    })
                                }} placeholder="Show rating"></input>
                            </div>

                            <div className="form-example">
                                <label htmlFor="image">Enter your Image URL: </label>
                                <input type="text" value={this.state.newUrl} onChange={(e) => {
                                    this.setState({
                                        tvShows: {
                                            newUrl: e.target.value,
                                            newName: this.state.tvShow.newName,
                                            newRating: this.state.tvShow.newUrl
                                        }
                                    })
                                }} placeholder="Show url"></input>
                            </div>

                            <button onClick={() => { this.updateShow(this.state.tvShow) }}>CREATE/UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ManagePage.propType = {
    title: PropTypes.string
};
