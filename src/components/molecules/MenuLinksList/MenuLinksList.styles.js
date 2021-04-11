import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.media.desktop} {
    display: grid;
    width: fit-content;
    border: none;
    grid-template-columns: 80px;
    grid-auto-rows: 80px;
    margin: 0 auto;
    grid-row: 8 / 18;
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
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.grey};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.mainColor};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.mainColor};
        }
      }
    }
    &:active {
      background-color: transparent;
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.lightGrey};
      width: 90px;
      height: 90px;
      border-radius: 10px;
      z-index: 2;
      transform: translate(-5px, -5px);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      color: ${({ theme }) => theme.colors.mainColor};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.mainColor};
        }
      }
    }
    svg {
      width: 20px;
      margin: 0 0 10px 0;
      path {
        transition: fill 0.3s ease;
        fill: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;

export const MenuLink = styled.li``;
