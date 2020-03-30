import React from 'react';
import styled from 'styled-components';
import Avatar from '../Components/Avatar';

const AvatarListContainer = styled.div`
  display: flex;
`;

export default ({ users = [] }) => {
  return (
    <AvatarListContainer>
      {users.map(({ userName, avatar }) => (
        <Avatar userName={userName} image={avatar} />
      ))}
    </AvatarListContainer>
  );
};
