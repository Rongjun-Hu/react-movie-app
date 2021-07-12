import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="RMDB logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="TMDB logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
