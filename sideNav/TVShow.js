import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SideNav extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func,
        deleteButton: PropTypes.func
    }

    
    deleteButton = () => {
        if(this.props.allowDelete === true){
            return(
                <button onClick={()=>this.props.deleteButton(this.props.show)}>o</button>
            )
        }
    }

    render(){
        return (
            <div>
                <h1>
                    <button onClick={this.props.tvShowSelected}><b>Show Name: </b>{this.props.name}
                    {this.props.tvShowSelected}<b> Show Rating: </b>{this.props.rating}
                    {this.props.tvShowSelected}<b> Show URL: </b>{this.props.url}
                    </button>
                </h1>
                {this.deleteButton()}
                
            </div>
        )
    }   
}

SideNav.propTypes = {
    title: PropTypes.string,
    allowDelete: PropTypes.bool
};

