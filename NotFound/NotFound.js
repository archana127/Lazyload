import React, { Component } from 'react'
import './NotFound.css'

class NotFound extends Component {
    render () {
        return (
            <div className="error">
                <p>404</p>
                <p>Page/Module not found</p>
            </div>
        )
    }
}

export default NotFound