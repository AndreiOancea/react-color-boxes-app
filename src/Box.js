import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove() {
        this.props.removeBox(this.props.id)
    }

    render() {
        const { h, w, c } = this.props

        let styles = {
            height: `${h}em`,
            width: `${w}em`,
            backgroundColor: `${c}`
        }

        return (
            <div>
                <div
                    className='Box'
                    style={styles}
                >
                    {/* {this.props.id} */}
                </div>
                <button onClick={this.handleRemove}>Delete Me</button>
            </div >
        )
    }
}

export default Box;