import React from "react";
import styled from "styled-components";

import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <Nav>
      <a href="/">
        <Logo src="./assets/images/logo.svg" />
      </a>

      <NavMenu>
        <HeaderLink link="/" icon="./assets/images/home-icon.svg" title="Home" />
        <HeaderLink link="/" icon="./assets/images/search-icon.svg" title="Search" />
        <HeaderLink link="/" icon="./assets/images/watchlist-icon.svg" title="Watchlist" />
        <HeaderLink link="/" icon="./assets/images/original-icon.svg" title="Originals" />
        <HeaderLink link="/" icon="./assets/images/movie-icon.svg" title="Movies" />
        <HeaderLink link="/" icon="./assets/images/series-icon.svg" title="Series" />
      </NavMenu>

      <UserImg src="https://avatars.githubusercontent.com/u/47578311?s=400&u=ba4f7ecbdba8dff84ff65cc54cd77b7a4788e34b&v=4" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background-color: #090b13;
  align-items: center;
  padding: 0 32px;
  display: flex;
`;

const Logo = styled.img`
  width: 86px;
  margin-right: 32px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const UserImg = styled.img`
  width: 42px;
  border-radius: 50%;
  cursor: pointer;
`;
