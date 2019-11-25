import React, { Component } from 'react';
import { getUser } from './UserService';
import { CubeGrid } from 'better-react-spinkit';


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        setTimeout(() => {
            getUser(id).then(user => this.setState({
                user: user,
                loading: false
            }));
        }, 1000)
    }

    render = () => {
        if(this.state.user && this.state.user.name) {
            return (
                <div className="main-content row user">
                    <div className="col-12">
                        <h1>{this.state.user.name}</h1>
                        <a href="/">Retour à la liste</a>
                    </div>
                </div>
            )
        } else {
            return <CubeGrid size={50} />;
        }
    }
}

export default UserPage;