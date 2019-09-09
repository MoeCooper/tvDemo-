import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Navigation extends Component{
    render(){
        return(
            <nav>
                <ul className="manPre">
                    <li><Link to="/">Manage Page</Link></li>
                    <li><Link to="/previewPage">Preview Page</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation