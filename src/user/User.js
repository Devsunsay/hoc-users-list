import React, {Component} from "react";

class User extends Component {
    render = () => {
        //data is our custom variable
        const {id} = this.props.data;
        const {name} = this.props.data;
        const {email} = this.props.data;
        const {phone} = this.props.data;

        return (
            <tr>
                <td className="col-4" scope="row">
                    <a href={`/user/${id}`}>
                        {name}
                    </a>
                </td>
                <td className="col-4">{email}</td>
                <td className="col-4">{phone}</td>
            </tr>
        );
    };
}

export default User;