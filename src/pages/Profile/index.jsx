import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './style';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/alexsandersilv.png" alt="Foto do usuario" />
        
        <label htmlFor="avatar">  
          <FiCamera />

          <input id="avatar" type="file" />
        </label>
        
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icone={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icone={FiMail}
        />

        <Input
          placeholder="Senha Atual"
          type="password"
          icone={FiLock}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icone={FiLock}
        />
       <Button title="Salvar" />
      </Form>

    </Container>
  );
}