import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    // username:"TestBro",
    // firstName:"Test",
    // lastName:"tester",
    // email:"test.com",
    // avatar:"ICON",
    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({ ...user, });

  }

  render () {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;
