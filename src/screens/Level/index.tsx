import React from 'react'
import { ListLevel } from '../../components/ListLevel'

import {
  Container,
  Header,
  Title,
  ListLevelCards
} from './style'

export function Level() {
  return (
    <Container>
      <Header>
        <Title>Listagem de Níveis</Title>
      </Header>

      <ListLevelCards>
        <ListLevel 
          title="Junior"
        />
        <ListLevel 
          title="Pleno"
        />
        <ListLevel 
          title="Senior"
        />
      </ListLevelCards>
    </Container>
  )
}