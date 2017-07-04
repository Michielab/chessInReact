import React from 'react';
import ReactDOM from 'react-dom';
import Knight from './components/pieces/whiteKnight';
import Square from './components/square/square';
import Board from './components/board/board';

ReactDOM.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
);
