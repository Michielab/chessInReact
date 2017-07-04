import React, { Component } from 'react';
import Board from '../board/board';
import '../../App.css';


class Game extends Component {
  constructor(props) {
  super(props);

  this.state = {
    board: [
  ['Wa','Bb','Wc','Bd','We','Bf','Wg','Bh'],
  ['Ba','Wb','Bc','Wd','Be','Wf','Bg','Wh'],
  ['Wa','Bb','Wc','Bd','We','Bf','Wg','Bh'],
  ['Ba','Wb','Bc','Wd','Be','Wf','Bg','Wh'],
  ['Wa','Bb','Wc','Bd','We','Bf','Wg','Bh'],
  ['Ba','Wb','Bc','Wd','Be','Wf','Bg','Wh'],
  ['Wa','Bb','Wc','Bd','We','Bf','Wg','Bh'],
  ['Ba','Wb','Bc','Wd','Be','Wf','Bg','Wh'],]
  };
}
  render() {
    return (
      <div className="table">
        <Board board={this.state.board}/>
      </div>
    );
  }
}

export default Game;
