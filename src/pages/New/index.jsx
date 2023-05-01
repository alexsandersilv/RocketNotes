import { Container, Form } from './style';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';


export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />
          <Section title="Links">
            <NoteItem
              value="https://github.com/alexsandersilv"
            />
            <NoteItem
              placeholder="Novo Link"
              isNew
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem
                value="react"
              />
              <NoteItem
                placeholder="Nova tag"
                isNew
              />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}