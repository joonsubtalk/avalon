import React, { Component } from 'react';
import data from '../../config/data.json';

export default class QuestMarkers extends Component {


    state =  {
        quests : []
    }

    componentDidMount() {
        this.setState((prevState, { quests }) => ({
			quests: data.boards[0].quests
		}));
    }

    render() {
        const {quests} = this.state;
        return (
            <div className="c-questMarkers">
                <div className="c-questMarkers__container">
                    {
                        // render each Quest tile
                        quests.length > 0 &&
                        quests.map( quest => {
                            console.log(quest.playerCount);
                            const {num, description, partyCount } = quest;
                            return (
                                <div key={num} className="c-questMarkers__item">
                                    <div className="c-questMarkers__title">Quest {num}</div>
                                    <div className="c-questMarkers__title">{description}</div>
                                    <div className="c-questMarkers__circle">
                                        <div className="c-questMarkers__partyCount">{partyCount}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
