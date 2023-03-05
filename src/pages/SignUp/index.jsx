import { Container, Form, Background } from './style';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
            <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links uteis
        </p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icone={FiUser}
        />

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

        <Button title="Cadastrar" />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}