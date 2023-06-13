import { useState } from 'react';
import { Container, Form, Background } from './style';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth.jsx';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  
  function handleSignIn() {
    const data = signIn({ email, password });
  }

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
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icone={FiLock}
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <Button title="entrar" onClick={handleSignIn} />
        <Link to="/register" >Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}