import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            h: '',
            w: '',
            c: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            h: '',
            w: '',
            c: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='h'>Height</label>
                    <input
                        id='h'
                        name='h'
                        value={this.state.h}
                        onChange={this.handleChange}
                    />

                    <label htmlFor='w'>Width</label>
                    <input
                        id='w'
                        name='w'
                        value={this.state.w}
                        onChange={this.handleChange}
                    />

                    <label htmlFor='c'>Color</label>
                    <input
                        id='c'
                        name='c'
                        value={this.state.c}
                        onChange={this.handleChange}
                    />
                    <button>Add Box</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;