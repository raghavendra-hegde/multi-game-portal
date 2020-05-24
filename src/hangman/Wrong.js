import React, { Component } from 'react';

class Wrong extends Component{

    getWrongLetters(){
        console.log(this.props.guessedLetters)
        const wrongLetter = this.props.guessedLetters.filter(letter => {
            return !this.props.word.split('').includes(letter)
        })
        return wrongLetter+" ";
    }

    render(){
        return(
            <div className='wrong-letters'>
                {this.getWrongLetters()}
            </div>
        )
    }
}

export default Wrong;