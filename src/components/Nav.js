import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.nav`
  background-color: #fff;
  padding: 0 5vw;

  .brand-logo,
  ul a {
    color: rgba(0, 0, 0, .87);
  }
`

const Nav = () => (
  <NavContainer>
    <div className='nav-wrapper'>
      <a
        className='brand-logo'
        href='#'
      >Logo</a>
      <ul
        className='right hide-on-med-and-down'
        id='nav-mobile'
      >
        <li><a href='sass.html'>Sass</a></li>
        <li><a href='badges.html'>Components</a></li>
        <li><a href='collapsible.html'>JavaScript</a></li>
      </ul>
    </div>
  </NavContainer>
)

export default Nav
