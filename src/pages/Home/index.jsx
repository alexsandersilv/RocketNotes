import { useState, useEffect } from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { useNavigate  } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Note } from '../../components/Note';

import { api } from '../../services/api';
 
export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  const [notes, setNotes] = useState([]);

  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleTagSelected(Tagname) {

    if (Tagname == 'all') {
      return setTagsSelected([]);
    }
    const alreadySelected = tagsSelected.includes(Tagname);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== Tagname);
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, Tagname]);
    }
  }

  function handleDetails(id) {
    navigate('/details/' + id)
  }


  useEffect(() => {

    async function fetchTags() {
      const response = await api.get('/tags');

      setTags(response.data);
    }

    fetchTags();
  }, []);


  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data)
    }
    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>RocketNode</h1>
      </Brand>

      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" onClick={() => handleTagSelected('all')} isActive={tagsSelected.length == 0} />
        </li>
        {
          tags && tags.map(tag => {
            return (
              <li key={tag.id}>
                <ButtonText
                  title={tag.name} onClick={() => handleTagSelected(tag.name)} isActive={tagsSelected.includes(tag.name)} />
              </li>
            )
          })
        }
      </Menu>

      <Search>
        <Input
          icone={FiSearch}
          placeholder="Pesquisar pelo titulo"
          onChange={event => setSearch(event.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => {
              return (
                <Note
                  key={String(note.note.id)}
                  data={note}
                  onClick={() => handleDetails(note.note.id)}
                />

              );
            })
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Notas
      </NewNote>
    </Container>
  );
}