import { useState } from 'react';
import { Container, Form, Background } from './style';

import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import { api } from '../../services/api';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  function handleSingUp() {
    if (!name || !email|| !password) {
      return alert("Preencha os campos");
    }

    api.post('/users',{
      name,
      email,
      password
    }).then(() => {
      alert("Usuario cadastrado");
      navigate("/");
    }).catch(err => {
      if(err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível cadastrar")
      }
    });

  }

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
          onChange={event => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icone={FiMail}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icone={FiLock}
          onChange={event => setPassword(event.target.value)}

        />

        <Button title="Cadastrar" onClick={handleSingUp} />
        <Link to="/">
          Voltar para o login
        </Link>
      </Form>
    </Container>
  );
}