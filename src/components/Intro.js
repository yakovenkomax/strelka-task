import React, { Component } from 'react';
import classNames from 'classnames';

import './Intro.css';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVideoMode:      false,
            title:            'Онлайн-школа городских предпринимателей',
            buttonStartTitle: 'Начать обучение',
            buttonStartHref:  '#',
            buttonPlayTitle:  'Посмотреть видео',
            buttonPlayHref:   '#',
            videoUrl:         'https://player.vimeo.com/video/170509497'
        };
    }

    componentDidMount() {
        this.vimeoPlayer = new window.Vimeo.Player(document.querySelector('.intro__iframe'));
    }

    _playButtonHandler(e) {
        e.preventDefault();

        window.dispatchEvent(new Event('hideHeader'));
        this.setState({ isVideoMode: true });
        this.vimeoPlayer.play();
    }

    _closeButtonHandler(e) {
        e.preventDefault();

        window.dispatchEvent(new Event('showHeader'));
        this.setState({ isVideoMode: false });
        this.vimeoPlayer.pause();
    }

    render() {
        const { isVideoMode,
                title,
                buttonStartTitle,
                buttonStartHref,
                buttonPlayTitle,
                buttonPlayHref,
                videoUrl } = this.state;

        return (
            <div className={classNames('intro', { 'intro_video-mode': isVideoMode })}>
                <button className="intro__close" onClick={this._closeButtonHandler.bind(this)}></button>
                <div className="intro__cta">
                    <div className="intro__cta-wrap">
                        <h1 className="intro__heading">{title}</h1>
                        <a className="intro__button" href={buttonStartHref} title={buttonStartTitle}>{buttonStartTitle}</a>
                        <a className="intro__button intro__play" href={buttonPlayHref} title={buttonPlayTitle} onClick={this._playButtonHandler.bind(this)}>{buttonPlayTitle}</a>
                    </div>
                </div>
                <div className="intro__video">
                    <iframe className="intro__iframe" src={videoUrl} width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}

export default Intro;
