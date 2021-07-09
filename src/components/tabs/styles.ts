import styled from "styled-components";

type Props = {
  isActive?: boolean | undefined;
};

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  max-width: 500px;
  margin: auto;
  width: 100%;
  position: relative;
  z-index: 10;
  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 30px 30px;
`;

export const Tab = styled.button<Props>`
  cursor: pointer;
  padding: 12px;
  width: calc(50% - 4px);
  border: none;
  background-color: ${({ isActive }) => (isActive ? "#0d0d0d" : "transparent")};
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? "#fff" : "#0d0d0d")};
  font-size: 1rem;
  transition: all 0.25s ease;
  box-shadow: ${({ isActive }) =>
    isActive
      ? "#0px 5px 25px 0px rgba(0,0,0,.06)"
      : "0px 0px 0px 0px rgba(0,0,0,.08)"};
  border-radius: 16px;
  z-index: 2;
`;
