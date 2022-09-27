import { Link } from 'react-router-dom';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Seta de ordenação" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Junior Cundari</strong>
              <small>instagram</small>
            </div>
            <span>junior@mail.com</span>
            <span>(11) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Ícone de edição" />
            </Link>
            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch('http://localhost:3001/categories')
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('error', error);
  });
