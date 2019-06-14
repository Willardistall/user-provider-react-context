import React from "react";
import { Form, Icon, } from "semantic-ui-react";
import {UserConsumer, } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = {
    username:this.props.username,
    email: this.props.email,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    avatar: this.props.avatar,
    // **OBJECT DESTRUCTURE??***
  };

  handleChange = (e, { name, value}) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser({...this.state});
  }

  render () {
    const { username, email, firstName, lastName, avatar, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group>
        <Form.Input
        label="UserName"
        type="text"
        name="username"
        value={username}
        width={6}
        onChange={this.handleChange}/>
          <Form.Select
        label="Avatar"
        name="avatar"
        value={avatar}
        width={4}
        onChange={this.handleChange}
        options={avatarOptions} />
        </Form.Group>
        <Form.Group >
        <Form.Input
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        width={5}
        onChange={this.handleChange}/>

        <Form.Input
        label="New Last Name"
        type="text"
        name="lastName"
        value={lastName}
        width={5}
        onChange={this.handleChange}/>
        </Form.Group>
        <Form.Input
        label="Email"
        type="text"
        name="email"
        value={email}
        width={10}
        onChange={this.handleChange}/>
        
      <Form.Button color="green" inverted>SAVE</Form.Button>        
      </Form>
    );
  };
};

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm 
        { ...props }
        username={value.username}
        firstName={value.firstName}
        lastName={value.lastName}
        email={value.email}
        avatar={value.avatar} 
        updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

const avatarOptions = [
  { key: "1", text: ":]", value: ":]", },
  { key: "2", text: ":[", value: ":[", },
  { key: "3", text: ":/", value: ":/", },
  { key: "4", text: ":P", value: ":P", },
// ** HOW DO I ADD SEMANTIC ICONS AS AVATARS TO CHOOSE???***
];

export default ConnectedUserForm;