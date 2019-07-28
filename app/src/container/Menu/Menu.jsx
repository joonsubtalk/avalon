import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Sound from 'react-sound';
import Logo from '../../images/avalonlogo.png';
import Click from '../../sound/click.wav';

export default class Menu extends Component {

    state={
        show: false,
        hover: false,
    }

    linkClicked = () => {
        this.setState({show: true});
        const {history} = this.props;
        // history.push('/about');
    }

    menuClicked = () => {
        this.setState({hover: true});
    }

    render() {

        return (
            <div className="menu">
                <Sound playStatus={Sound.status.PLAYING} url={Click} />
                {
                    this.state.show &&
                    <Sound playStatus={Sound.status.PLAYING} url={'https://opengameart.org/sites/default/files/The%20Dark%20Amulet_0.mp3'} />
                }
                <div className="menu__container">
                    <div className="menu__logo">
                        <img src={Logo} alt="avalon"/>
                    </div>
                    <div className="menu__card">
                        <ul className="menu__list">
                            <li className="menu__item" onClick={this.linkClicked}>Host Game</li>
                            <li className="menu__item">
                                <Link to="/join/" onMouseEnter={this.menuClicked} className="menu__link">Join Game</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/profile/" onMouseEnter={this.menuClicked} className="menu__link">Profile</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/option/" onMouseEnter={this.menuClicked} className="menu__link">Options</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/about/" onMouseEnter={this.menuClicked} className="menu__link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu__version">v0.1 alpha candidate</div>
            </div>
        )
    }
}
