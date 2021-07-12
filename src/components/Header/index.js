import React, { useContext } from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

// Context
import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="RMDB logo" />
        </Link>
        {user ? (
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to="/login">
            <span>Login</span>
          </Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="TMDB logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
