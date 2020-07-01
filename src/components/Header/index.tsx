import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  title?: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  title,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/" className={title === 'dashboard' ? 'effect_nav_link' : ''}>
          Listagem
        </Link>
        <Link
          to="/import"
          className={title === 'import' ? 'effect_nav_link' : ''}
        >
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
