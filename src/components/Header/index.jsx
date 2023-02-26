import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style';

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/alexsandersilv.png" alt="user photo" />

        <div>
          <span>Bem Vindo</span>
          <strong>Alexsander silva</strong>
        </div>
      
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}