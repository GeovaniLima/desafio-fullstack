import React from 'react'
import { ListDev } from '../../components/ListDev'

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  ListDevs,
  Title
} from './styles'

export function Dashboard() {
  
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/66522839?v=4' }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Geovani</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <ListDevs>
        <Title>Listagem</Title>
        
        <ListDev 
          title="Geovani Lima"
          level="Pleno"
          sexo="Masculino"
          birthdate="12/01/1997"
          age="25 Anos"
          hobby="Apaixonado por programação, especialmente o universo Mobile"
        />
      </ListDevs>
    </Container>
  )
}