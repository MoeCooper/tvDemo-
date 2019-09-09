import React, { Component } from 'react'

export default class PreviewPage extends Component {
    render() {
        return (
            <div>
                <div className="managePreview">
                </div>
                <div id="tvShowListings">
                    <ul className="shows">
                        <h2>Shows</h2>
                        <li className="show1" allowDelete={false}>Rurouni Kenshin <button>-</button></li>
                        <li className="show2" allowDelete={false}>My GF is a Gumiho <button>-</button></li>
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