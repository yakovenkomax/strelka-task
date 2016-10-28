import React, { Component } from 'react';
import classNames from 'classnames';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [{
                title: 'Курсы',
                url:   '#'
            },{
                title: 'Материалы',
                url:   '#'
            },{
                title: 'Проекты',
                url:   '#'
            },{
                title: 'Партнерство',
                url:   '#'
            },{
                title: 'О школе',
                url:   '#'
            },{
                title: 'Войти',
                url:   '#',
                mod:   'login'
            },{
                title: 'Зарегистрироваться',
                url:   '#',
                mod:   'signup'
            }]
        };
    }

    render() {
        const { nav } = this.state;

        return (
            <header className="header">
                <div className="logo"></div>
                <nav className="nav">
                    <ul className="nav__list">
                        { nav.map(({title, url, mod}, index) =>
                            <li className="nav__item" key={title.toString() + index}>
                                <a className={classNames("nav__link", { [`nav__link_${mod}`]: mod })} href={url} title={title}>{title}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
