import { useState } from 'react';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './style';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {api} from '../../services/api';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(user.avatar);
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated ={
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);

  }
  

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatarUrl} alt="Foto do usuario" />
        
        <label htmlFor="avatar">  
          <FiCamera />

          <input id="avatar" type="file" onChange={handleChangeAvatar}/>
        </label>
        
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icone={FiUser}
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icone={FiMail}
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha Atual"
          type="password"
          icone={FiLock}
          value={passwordOld}
          onChange={event => setPasswordOld(event.target.value)}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icone={FiLock}
          value={passwordNew}
          onChange={event => setPasswordNew(event.target.value)}
        />
       <Button title="Salvar" onClick={handleUpdate} />
      </Form>

    </Container>
  );
}