import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 50px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    border-top-color: grey;
    border-bottom-color: grey;
  }
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.mainDark};
  font-size: 23px;
  padding: 15px 0;
  display: flex;
  justify-content: start;
  padding-left: 10%;
  transition: background-color 0.3s ease;
  position: relative;
  &:active {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &.active {
    background-color: rgba(0, 0, 0, 0.03);
  }
  svg {
    width: 23px;
    margin-right: 10%;
    path {
      fill: #9475f4;
    }
  }
  ${({ theme }) => theme.media.desktop} {
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme.colors.lightGrey};
    padding: 10px 0 10px 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    line-height: 1.6em;
    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.colors.mainGradient};
      position: absolute;
      top: 50%;
      transform: translate(-30px, -50%);
      left: 10px;
      border-radius: 100%;
      transition: transform 0.3s ease-in-out;
    }
    &.active {
      background-color: rgba(255, 255, 255, 0.03);
    }
    &.active::before {
      transform: translate(0, -50%);
    }
    svg {
      path {
        fill: #6f7782;
      }
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

export const MenuLink = styled.li``;
