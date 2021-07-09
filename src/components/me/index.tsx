import React from "react";

import { Wrapper, Avatar, Description } from "./styles";

const Me: React.FC = () => {
  return (
    <Wrapper>
      <Avatar
        src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1625845645/me/me_c3ubvr.jpg"
        alt="This my picture"
      />
      <Description>
        <h1>Francisco Mendes</h1>
        <p>Web Developer</p>
      </Description>
    </Wrapper>
  );
};

export default Me;
