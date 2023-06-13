import { useState, useEffect } from 'react';

import { Container, Links, Content } from './styles';

import { useParams, useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Quer mesmo deletar a nota');
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>

            <ButtonText title="Excluir nota" onClick={handleRemove} />

            <h1>
              {
                data.title
              }
            </h1>

            <p>
              {
                data.description
              }

            </p>

            {
            data.links &&
              <Section title="Links uteis">
                <Links>
                  {

                    data.links.map(link => {
                      return <li key={link.id}><a target='_blank' href={link.url}>{link.url}</a></li>
                    })
                  }
                </Links>
              </Section>

            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => {
                    return (
                      <Tag key={tag.id} title={tag.name} />
                    )
                  })

                }
              </Section>
            }
            <Button title="Voltar" onClick={handleBack}  />
          </Content>
        </main>
      }
    </Container>
  );
}
