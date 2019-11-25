import React, {Component} from "react";
import {getUsers} from "./UserService";
import UserList from "./UserList";
import UserSearch from "./UserSearch";

class Users extends Component {
    //On est obligé de préciser props dans le constructeur car on hérite de Compoenent
    constructor(props) {
        super(props);
        this.state = {
            userSearch: [],
            search: ""
        };
        //On ne met plus users dans le state pour ne pas faire un appel API à chaque recherche et avoir une copie de la liste entière toujours disponible.
        this.users = [];
    }

    componentDidMount = () => {
        getUsers().then(users => {
            this.users = users;
            this.setState({
                userSearch: users
            });
        });
    };

    search = e => {
        const search = e.target.value;
        let userSearch = this.users;

        if (search !== "") {
            userSearch = this.users.filter(user => user.name.includes(search));
        }

        this.setState({
            userSearch: userSearch,
            search: search
        });
    };

    render = () => {
        return (
            <div className="main-content users">
                <UserSearch handleChange={this.search} searchTerm={this.state.search}/>
                <div className="row">
                    <UserList users={this.state.userSearch}/>
                </div>
            </div>
        );
    };
}

export default Users;