import React from 'react';

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Title,
  Form,
  Fields
} from './styles'

export function RegisterLevel() {
  return (
    <Container>
      <Header>
        <Title>Cadastro do Nível</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder='Nível'
          />
        </Fields>

        <Button 
          title="Enviar"
        />
      </Form>
    </Container>
  )
}