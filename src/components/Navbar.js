import React from 'react';
import {NavLink,} from 'react-router-dom';
import { Menu, } from "semantic-ui-react" ;
import { UserConsumer, } from "../providers/UserProvider";

const Navbar = () => (
  <UserConsumer>
    { value => (
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        HOME
      </Menu.Item>
      </NavLink>
      <NavLink to="/account/profile">
      <Menu.Item>
        { value.username }
      </Menu.Item>
    </NavLink>
  </Menu>
  )}
</UserConsumer>
)

export default Navbar;