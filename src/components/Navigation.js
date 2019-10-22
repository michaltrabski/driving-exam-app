import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { path } from "./../data/GlobalData";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
`;
const Logo = styled.div`
  display: flex;
  flex-grow: 1;

  height: 100px;
  align-items: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.light};
  }
`;
const Ul = styled.ul`
  /* background: lightyellow; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 10;
  list-style-type: none;
`;
const Li = styled.li`
  margin-left: 4rem;
  list-style-type: none;
  text-align: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.light};

    &.active {
      color: ${({ theme }) => theme.white};
      font-weight: ${({ theme }) => theme.weight_bold};
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Logo>
        <h3>
          <Link to="/">poznajTesty.pl</Link>
        </h3>
      </Logo>
      <Ul>
        <Li>
          <NavLink to={path.learn}>Nauka Pytań </NavLink>
        </Li>
        <Li>
          <NavLink to={path.exam}>Wykonaj Egzamin </NavLink>
        </Li>
        <Li>
          <NavLink to={path.exam_reviev}>Przeglądaj wyniki egzaminów</NavLink>
        </Li>
        <Li>
          <NavLink to={path.blog}>Blog</NavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
