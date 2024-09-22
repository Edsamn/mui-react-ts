import { styled } from 'styled-components';

const NavigationMenuItemStyled = styled.div`
  height: 100%;
  text-align: center;
  margin: 0px 20px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  font-weight: 400;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #222;
  }
`;

export default NavigationMenuItemStyled;
