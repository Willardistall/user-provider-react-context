import React from "react";
import { Card, Image, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";

const Profile = () => (
  <UserConsumer>
    { value => (
  <Card>
    <Card.Content>
      <Card.Header>{value.username}</Card.Header>
      <Card.Meta> { value.avatar } </Card.Meta>
      <Card.Meta>
        Date Joined: {value.dateJoined}
      </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>{value.firstName} {value.lastName}</p>
    </Card.Content>
  </Card>
    )}
  </UserConsumer>
)

export default Profile;

