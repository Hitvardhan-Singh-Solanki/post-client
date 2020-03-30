import React, { useState } from 'react';
import styled from 'styled-components';
import { Popup } from 'semantic-ui-react';

const AvatarContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: min-content;
  & > img {
    border: 4px solid;
    border-radius: 50%;
    clip-path: circle(50%);
    height: 80px;
    transform: translateY(5px);
    transition: transform 0.1s ease-in-out;
    &:hover {
      background-color: red;
      transform: translateY(-1px);
    }
  }
`;

const AvatarImage = styled.img`
  height: 200px;
  border-radius: 3px;
`;

export default ({ image, userName }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const displayImage = avt => (
    <AvatarImage
      src={avt}
      alt="avatar"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    />
  );

  return (
    <AvatarContainer>
      <Popup trigger={displayImage(image)}>
        <div>{displayImage(image)}</div>
        <h3>UserName: {userName}</h3>
      </Popup>
    </AvatarContainer>
  );
};
