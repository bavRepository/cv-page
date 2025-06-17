import styled from 'styled-components'

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <ListItem href="#" $inputColor="#7562E0">
            Home
          </ListItem>
        </li>
        <li>
          <ListItem href="#">About me</ListItem>
        </li>
        <li>
          <ListItem href="#">Projects</ListItem>
        </li>
        <li>
          <ListItem href="#">Contact</ListItem>
        </li>
      </ul>
    </StyledMenu>
  )
}
const StyledMenu = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding-left: 0;
  }
`

const ListItem = styled.a<{ $inputColor?: string }>`
  color: ${(props) => props.$inputColor ?? 'white'};
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  &:hover ${this} {
    color: #7562e0;
  }
`
