import React from 'react'

import {
  Container,
  Group1,
  Title,
  Level,
  Group2,
  Sexo,
  BirthDate,
  Age,
  Hobby
} from './styles'

export interface PropsDevs {
  title: String;
  level: String;
  sexo: String;
  birthdate: String;
  age: String;
  hobby: String;
}

export function ListDev({ 
  title,
  level,
  sexo,
  birthdate,
  age,
  hobby
 } : PropsDevs) {
  return (
    <Container>
      <Group1>
        <Title>
          {title}
        </Title>
        <Level>
          {level}
        </Level>
      </Group1>

      
      <Sexo>
        {sexo}
      </Sexo>

      <Group2>
        <Age>
          {age}
        </Age>

        <BirthDate>
          {birthdate}
        </BirthDate>
      </Group2>
      
      
      <Hobby>
        {hobby}
      </Hobby>
    </Container>
  )
}