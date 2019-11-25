import React, {Component} from "react";
import User from "./User";

class UserList extends Component {

    render = () => {
        return (
            <div className="col-12">
                <div className="container">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>

                        <tbody>
                        {
                            this.props.users.map(user => <User data={user} key={user.id}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}

export default UserList;