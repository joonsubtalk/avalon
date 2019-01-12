import React, { Component } from 'react';
import QuestMarkers from '../../component/QuestMarkers/QuestMarkers';

export default class Board extends Component {

	state = {
		flip : false
	}

	handleClick = () => {
		this.setState((prevState, { flip }) => ({
			flip: !prevState.flip
		}));
	};

	render() {

		const { flip } = this.state;

		return (
		<div className={`o-board ${flip ? 'o-board--flip' : ''}`}>
			<div className="o-board__container">
				<button onClick={this.handleClick}>Flip Board</button>
				<QuestMarkers />
			</div>
		</div>
		);
	}
}
