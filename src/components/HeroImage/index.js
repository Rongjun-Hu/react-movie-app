import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ title, text, image }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

HeroImage.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

export default HeroImage;
