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

export function RegisterDev() {
  return (
    <Container>
      <Header>
        <Title>Cadastro de Desenvolvedor</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder='Nível'
          />
          <Input 
            placeholder='Nome'
          />
          <Input 
            placeholder='Sexo'
          />
          <Input 
            placeholder='Data de Nascimento'
          />
          <Input 
            placeholder='Idade'
          />
          <Input 
            placeholder='Hobby'
          />
        </Fields>

        <Button 
          title="Enviar"
        />
      </Form>
    </Container>
  )
}