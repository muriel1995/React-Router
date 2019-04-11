import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink, Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <div>
                <Link to="/" className="selected"> Retour à l'accueil </Link>
                <h1>Notre histoire</h1>
            </div>
        );
    }
}


export default History;