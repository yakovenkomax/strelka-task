import React, { Component } from 'react';

import './Courses.css';

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:       'Онлайн-курсы',
            description: 'Наши курсы — практические, они помогают в формировании образа мышления у горожанина, и формировании спроса на городские инициативы',
            buttonTitle: 'Посмотреть все курсы',
            buttonHref:  '#',
            courses: [{
                imgUrl: 'url(/static/course-tile__image1.jpg)',
                title:  'Экскурсии как бизнес',
                desc:   'Новый курс о том, как стать независимым гидом и проводить экскурсии',
                href:   '#'
            },{
                imgUrl: 'url(/static/course-tile__image2.jpg)',
                title:  'Как создать спортивный проект',
                desc:   'Новый курс о том, как стать независимым гидом и проводить экскурсии',
                href:   '#'
            },{
                imgUrl: 'url(/static/course-tile__image3.jpg)',
                title:  'Как открыть хостел',
                desc:   'Новый курс о том, как стать независимым гидом и проводить экскурсии',
                href:   '#'
            },{
                imgUrl: 'url(/static/course-tile__image1.jpg)',
                title:  'Экскурсии как бизнес',
                desc:   'Новый курс о том, как стать независимым гидом и проводить экскурсии',
                href:   '#'
            },{
                imgUrl: 'url(/static/course-tile__image2.jpg)',
                title:  'Как создать спортивный проект',
                desc:   'Новый курс о том, как стать независимым гидом и проводить экскурсии',
                href:   '#'
            },{
                imgUrl: 'url(/static/course-tile__image3.jpg)',
                title:  'Как открыть хостел',
                desc:   'Новый курс о том, как стать независимым гидом и проводить экскурсии',
                href:   '#'
            }]
        };
    }

    render() {
        const { title, description, buttonTitle, buttonHref, courses } = this.state;

        return (
            <div className="courses">
                <button className="courses__close"></button>
                <div className="courses__left">
                    <div className="courses__desc">
                        <h2 className="courses__heading">{title}</h2>
                        <p className="courses__text">{description}</p>
                        <a className="courses__link" href={buttonHref} title={buttonTitle}>{buttonTitle}</a>
                    </div>
                </div>
                <div className="courses__right">
                    <ol className="courses__list">
                        { courses.map(({imgUrl, title, desc, href}, index) =>
                            <li className="course-tile" key={title.toString() + index}>
                                <a className="course-tile__link" href={href} title={title}>
                                    <span className="course-tile__image" style={{ backgroundImage: imgUrl }}></span>
                                    <h3 className="course-tile__heading">{title}</h3>
                                    <p className="course-tile__desc">{desc}</p>
                                </a>
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Courses;
