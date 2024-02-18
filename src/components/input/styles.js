
import styled from 'styled-components'

export const Container = styled.input`
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({theme}) => theme.colors.background};
  padding: ${({ padding }) => padding};
  width: ${({width}) => width};
  letter-spacing: 1.5px;
  border-radius: 5px;
  margin: 5px 0;
  border: none;
  inset: unset;

  &:hover {
      transform: scale(1.03);
      backdrop-filter: brightness(1.05);
      transition: 0.5s;
      cursor: pointer;
  }
`;
