import React, { Component } from 'react'
import "./Dice.css"

class Dice extends Component {
    render(){
        return(
            <div className={`dice ${this.props.rolling ? 'rolling' : '' }`}>
            {this.props.value === 1 ? <i class="fas fa-dice-one"></i> : null}
            {this.props.value === 2 ? <i class="fas fa-dice-two"></i> : null}
            {this.props.value === 3 ? <i class="fas fa-dice-three"></i> : null}
            {this.props.value === 4 ? <i class="fas fa-dice-four"></i> : null}
            {this.props.value === 5 ? <i class="fas fa-dice-five"></i> : null}
            {this.props.value === 6 ? <i class="fas fa-dice-six"></i> : null}
            </div>
        )
    }
}

export default Dice