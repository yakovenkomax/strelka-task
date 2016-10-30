import React, { Component } from 'react';
import classNames from 'classnames';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFixed: false,
            isHidden: false,
            isDetached: false,
            startingPoint: 0,
            lastScrollPos: 0,
            isScrollDirectionDown: true,
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

    componentWillMount() {
        const self = this;

        window.addEventListener('hideHeader', function(event) {
            self.setState({ isHidden: true });
        });
        window.addEventListener('showHeader', function(event) {
            self.setState({ isHidden: false });
        });
        window.addEventListener('scroll', function () {
            self._hiddenStateHandler();
            self._detachedStateHandler();
        })
    }

    componentDidMount() {
        this.setState({
            startingPoint: window.pageYOffset,
            lastScrollPos: window.pageYOffset
        });
        this._detachedStateHandler();
    }

    _detachedStateHandler() {
        const DETACH_BREAKPOINT = 25;

        this.setState({ isDetached: window.pageYOffset > DETACH_BREAKPOINT });
    }

    _hiddenStateHandler() {
        const { isFixed,
                lastScrollPos,
                startingPoint,
                isScrollDirectionDown } = this.state;
        const HIDE_BREAKPOINT = 100;
        const SHOW_BREAKPOINT = 10;
        const CURRENT_SCROLL_POS = window.pageYOffset;

        if ((CURRENT_SCROLL_POS > lastScrollPos) !== isScrollDirectionDown) {
            this.setState({
                isScrollDirectionDown: CURRENT_SCROLL_POS > lastScrollPos,
                startingPoint: CURRENT_SCROLL_POS
            });
        }

        if (!isFixed &&
            isScrollDirectionDown &&
            CURRENT_SCROLL_POS - startingPoint > HIDE_BREAKPOINT) {
                this.setState({ isHidden: true });
        }

        if (!isScrollDirectionDown &&
            startingPoint - CURRENT_SCROLL_POS > SHOW_BREAKPOINT) {
                this.setState({ isHidden: false });
        }

        this.setState({ lastScrollPos: CURRENT_SCROLL_POS });
    }

    render() {
        const { isHidden,
                isDetached,
                nav } = this.state;

        return (
            <header className={classNames('header', { 'header_detached': isDetached, 'header_hidden': isHidden })}>
                <div className="logo"></div>
                <button className="menu-button"></button>
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
