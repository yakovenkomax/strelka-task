import React, { Component } from 'react';

import './Intro.css';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:            'Онлайн-школа городских предпринимателей',
            buttonStartTitle: 'Начать обучение',
            buttonStartHref:  '#',
            buttonPlayTitle:  'Посмотреть видео',
            buttonPlayHref:   '#',
            videoUrl:         'https://player.vimeo.com/video/170509497'
        };
    }

    render() {
        const { title, buttonStartTitle, buttonStartHref, buttonPlayTitle, buttonPlayHref, videoUrl } = this.state;

        return (
            <div className="intro">
                <div className="intro__cta">
                    <h1 className="intro__heading">{title}</h1>
                    <a className="intro__button" href={buttonStartHref} title={buttonStartTitle}>{buttonStartTitle}</a>
                    <a className="intro__button intro__play" href={buttonPlayHref} title={buttonPlayTitle}>{buttonPlayTitle}</a>
                </div>
                <div className="intro__video intro__video_hidden">
                    <button className="intro__close"></button>
                    <iframe className="intro__iframe" src={videoUrl} width="640" height="360" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}

export default Intro;
