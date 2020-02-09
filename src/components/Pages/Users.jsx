import React from "react";
import UsersGrid from "../Organisms/UsersGrid";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    return <UsersGrid users={this.state.users} />;
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => this.setState({ users }));
  }
}

export default Users;
