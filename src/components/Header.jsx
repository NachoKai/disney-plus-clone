import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

import { getUserName, getUserPhoto, setLogin, setLogout } from "../redux/user/userSlice";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userPhoto = useSelector(getUserPhoto);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        dispatch(
          setLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, [dispatch, history]);

  const login = () => {
    auth.signInWithPopup(provider).then(res => {
      let user = res.user;

      dispatch(
        setLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const logout = () => {
    auth.signOut().then(() => {
      dispatch(setLogout());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <a href="/">
        <Logo src="../assets/images/logo.svg" />
      </a>

      {!userName ? (
        <LoginContainer>
          <Login onClick={login}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <HeaderLink link="/" icon="../assets/images/home-icon.svg" title="Home" />
            <HeaderLink link="/" icon="../assets/images/search-icon.svg" title="Search" />
            <HeaderLink link="/" icon="../assets/images/watchlist-icon.svg" title="Watchlist" />
            <HeaderLink link="/" icon="../assets/images/original-icon.svg" title="Originals" />
            <HeaderLink link="/" icon="../assets/images/movie-icon.svg" title="Movies" />
            <HeaderLink link="/" icon="../assets/images/series-icon.svg" title="Series" />
          </NavMenu>

          <UserImg src={userPhoto} onClick={logout} />
        </>
      )}
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

const LoginContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Login = styled.button`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  color: #f9f9f9;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;
