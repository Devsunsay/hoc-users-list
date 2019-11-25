import React, { Component } from "react";

class UserSearch extends Component {
    render = () => {
        const { handleChange, searchTerm } = this.props;

        return (
                <div className="col-12 search-bar">
                    <input
                        onChange={handleChange}
                        value={searchTerm}
                        placeholder="Recherche..."
                    />
                </div>
        );
    };
}

export default UserSearch;