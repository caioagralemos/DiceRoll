import React, { Component } from 'react'
import Dice from './Dice'
import "./RollDice.css"

class RollDice extends Component {
    constructor(props){
        super(props)
        this.state = {d1: 1, d2: 1, rolling: false}
    }

    roll = (e) => { // esse '= (e) =>' faz o bind do this tb!
        var rand1 = Math.floor(Math.random() * 6 + 1)
        var rand2 = Math.floor(Math.random() * 6 + 1)
        this.setState({d1: rand1, d2: rand2, rolling: true})

        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }

    render(){
        return(
            <div>
                <Dice
                 value= {this.state.d1}
                 rolling={this.state.rolling}
                />
                <Dice
                 value={this.state.d2}
                 rolling={this.state.rolling}
                />
                <p>{this.state.rolling ? <button className='btn' disabled>ROLLING...</button> : <button className='btn' onClick={this.roll}>ROLL!</button>}</p>
            </div>
        )
    }
}

export default RollDice