import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent } from './logo.svg';

export const Container = styled.header`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(ReactComponent)`
  margin-top: 8px;
`;

export const NavLink = styled(Link)`
  margin-left: 26px;
  text-decoration: none;
  color: #636363;
`;
