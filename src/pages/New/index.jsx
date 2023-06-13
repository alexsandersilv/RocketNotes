import { useState } from 'react';

import { Container, Form } from './style';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

import { api } from '../../services/api'


export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('');
  }


  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {

    if (!title) {
      return alert('Digite o titulo da nota')
    }

    if (newTag) {
      return alert('Você não adicionou uma tag');
    }

    if (newLink) {
      return alert('Você não adicionou um link');
    }

    await api.post('/notes', {
      title,
      description,
      links,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Titulo" onChange={event => setTitle(event.target.value)} value={title} />
          <Textarea placeholder="Observações" onChange={event => setDescription(event.target.value)} value={description} />
          <Section title="Links">
            <NoteItem
              placeholder="Novo Link"
              isNew
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
            {
              links.map((link, index) => {
                return (
                  <NoteItem
                    key={index}
                    value={link}
                    onClick={() => { handleRemoveLink(link) }}
                  />
                )
              })
            }
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem
                placeholder="Nova tag"
                isNew
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />

              {
                tags.map((tag, index) => {
                  return (
                    <NoteItem
                      key={index}
                      value={tag}
                      onClick={() => { handleRemoveTag(tag) }}
                    />
                  )
                })
              }
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}