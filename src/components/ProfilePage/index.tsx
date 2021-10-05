import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Lucas Cardoso</h1>
        <h2>@Lucas Cardoso</h2>

        <p>
          Web Designer Junior at <a href="https://ibosstecnologias.com.br">@Iboss</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Bahia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>99</strong>
          </span>
          <span>
            <strong>782 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
