import React, { Component } from 'react'
import SideNav from '../../sideNav/TVShow'
import PropTypes from 'prop-types'

export default class ManagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: "",
            newRating: "",
            newUrl: "",
            shows: []
        }
    }

    tvShowSelected = () => {
        console.log("tvShowSelected");
    }

    updateShow = () => {
        this.setState((prevState) => ({
            shows: [...prevState.shows, {
                name: this.state.newName,
                rating: this.state.newRating,
                url: this.state.newUrl
            }
            ]

        }),
        )
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
        console.log(this.state)
        return (
            <div>
                <div className="tvShowListings">

                    {this.renderShows()}

                    <div className="new_edit_show">
                        <h2>New/Edit Show</h2>
                        <div className="form-example">
                            <div className="form-example">
                                <label htmlFor="name">Enter your show: </label>
                                <input type="text" value={this.state.newName} onChange={(e) => {
                                    this.setState({
                                        newName: e.target.value,
                                    })
                                }} placeholder="Show name"></input>
                            </div>

                            <div className="form-example">
                                <label htmlFor="rating">Enter your rating: </label>
                                <input type="text" value={this.state.newRating} onChange={(e) => {
                                    this.setState({

                                        newRating: e.target.value,


                                    })
                                }} placeholder="Show rating"></input>
                            </div>

                            <div className="form-example">
                                <label htmlFor="image">Enter your Image URL: </label>
                                <input type="text" value={this.state.newUrl} onChange={(e) => {
                                    this.setState({

                                        newUrl: e.target.value,


                                    })
                                }} placeholder="Show url"></input>
                            </div>

                            <button onClick={() => { this.updateShow() }}>CREATE/UPDATE</button>
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
