import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setPlayerCount } from '../../actions/boardAC';

class PlayerCount extends Component {

  clickHandler = (num) => {
    this.props.dispatchPlayerCount(num);
  }

  render() {
    return (
      <div>
        Player Count:
        <ul>
            <li onClick={()=>{this.clickHandler(5)}}>5</li>
            <li onClick={()=>{this.clickHandler(6)}}>6</li>
            <li onClick={()=>{this.clickHandler(7)}}>7</li>
            <li onClick={()=>{this.clickHandler(8)}}>8</li>
            <li onClick={()=>{this.clickHandler(9)}}>9</li>
            <li onClick={()=>{this.clickHandler(10)}}>10</li>
        </ul>
      </div>
    )
  }
}

function mSTP(state) {
	return {
        playerCount : state.board.playerCount,
	};
}

function mDTP(dispatch) {
	return {
		dispatchPlayerCount(num) {
			dispatch(setPlayerCount(num));
		}
	};
}

export default connect(mSTP, mDTP)(PlayerCount);
