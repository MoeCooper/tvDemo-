import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SideNav extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func
    }

    
    deleteButton = () => {
        if(this.props.allowDelete){
            return(
                <button onClick={this.props.click}>-</button>
            )
        }
    }
    render(){
        return (

            <div>
                {this.deleteButton()}
                <h1><button 
                onClick={this.props.tvShowSelected}>{this.props.name}
                </button></h1>
                
            </div>
        )
    }   
}

SideNav.propTypes = {
    title: PropTypes.string,
    allowDelete: PropTypes.bool
};

