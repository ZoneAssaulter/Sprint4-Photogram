import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export class AppHeader extends React.Component {
  state = {}

  render() {
    return (
      <div className='app-header'>
        <Link to='/'>
          <div className='logo'>Photogram</div>
        </Link>
        <nav>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink to='/messenger'>Messenger</NavLink>
          <NavLink to='/post'>Post</NavLink>
          <NavLink to='/explore'>Explore</NavLink>
          <NavLink to='/notifications'>Notifications</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
        </nav>
      </div>
    )
  }
}
