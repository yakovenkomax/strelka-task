import React, { Component } from 'react';

import Header from './Header';
import Intro from './Intro';
import Courses from './Courses';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <main className="main">
                    <section className="section section_intro">
                        <Intro/>
                    </section>
                    <section className="section section_courses">
                        <Courses/>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
