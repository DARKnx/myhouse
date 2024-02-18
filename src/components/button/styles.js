
import styled from 'styled-components'

export const Container = styled.button`
  background: ${({ theme }) => theme.gradient.primary};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: ${({ padding }) => padding};
  width: ${({width}) => width};
  letter-spacing: 1.5px;
  border-radius: 5px;
  font-weight: 600;
  margin: 5px;
  border: none;
  inset: unset;

  &:hover {
      color: ${({ theme }) => theme.colors.text};
      transform: scale(1.05);
      transition: 0.5s;
      cursor: pointer;
  }
`;
