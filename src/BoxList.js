import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { v4 as uuidv4 } from 'uuid';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { h: 10, w: 10, c: 'blue', id: 'id1', key: 'id1' },
                { h: 15, w: 15, c: 'red', id: 'id2', key: 'id2' },
            ]
        }
        this.addBox = this.addBox.bind(this)
        this.removeBox = this.removeBox.bind(this)
    }

    addBox(newBox) {
        let items = { ...newBox, id: uuidv4() }
        this.setState(prevState => ({
            boxes: [...prevState.boxes, items]
        }))
    }

    removeBox(tbr) {
        this.setState(prevState => ({
            boxes: this.state.boxes.filter(oldBox => oldBox.id !== tbr)
        }))
    }

    render() {
        return (
            <div>
                <NewBoxForm addBox={this.addBox} />
                {this.state.boxes.map(box =>
                    <Box h={box.h} w={box.w} c={box.c} id={box.id} key={box.id} removeBox={this.removeBox} />
                )}
            </div>
        )
    }
}

export default BoxList;