import { Container } from './style';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {

  console.log(data.note.title);

  return (
    <Container {...rest}>
    <h1> {data.note.title} </h1>

      {
        data.tag ??
        (
          <footer>
            {data.tags.map(({ id, name }) => <Tag key={id} title={name} />)}
          </footer>
        )
      }
    </Container>
  );
}