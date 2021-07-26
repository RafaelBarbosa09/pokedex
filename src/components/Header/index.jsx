import { Container, Content } from "./styles";
import { MdSearch } from 'react-icons/md';

export function Header() {
  return (
    <Container>
      <Content>
        <MdSearch />
        <input placeholder="Search a pokemón" />
      </Content>
    </Container>
  )
}