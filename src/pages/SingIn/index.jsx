import { Container, Form, Background } from './style';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links uteis
        </p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icone={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icone={FiLock}
        />

        <Button title="entrar" />
        <a href="#">Criar Conta</a>
      </Form>
      <Background />
    </Container>
  );
}