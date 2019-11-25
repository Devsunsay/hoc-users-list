import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Home from "./Home";
import Nav from "./Nav";
import Users from "./user/Users";
import UserPage from "./user/UserPage";
import Weather from "./Weather";
import {homeUrl, usersUrl, userUrl, weatherUrl} from "./constants";

class App extends Component {

    render = () => {

        return (
            <div className="App">
                <header className="App-header">
                    <Nav/>

                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <section className="container-fluid">
                        <Router className="row">
                            {/*Il faut aller des url les plus spécifiques aux plus générales, car le switch s'arrête dès le premier résultat correspondant en lisant l'url de gauche à droite.*/}
                            <Switch>
                                <Route exacte path={userUrl} component={UserPage} />
                                <Route exacte path={usersUrl} component={Users} />
                                <Route exacte path={weatherUrl} component={Weather} />
                                <Route exacte path={homeUrl} component={Home} />
                            </Switch>
                        </Router>
                </section>
            </div>
        );
    }
}

export default App;
