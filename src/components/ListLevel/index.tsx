import React from 'react'

import {
  Container,
  Title
} from './styles'

export interface PropsLevel {
  title: String;
}

export function ListLevel({ 
  title,
 } : PropsLevel) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}