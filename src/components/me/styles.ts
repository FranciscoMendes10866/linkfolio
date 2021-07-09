import styled from "styled-components";

export const Avatar = styled.img`
  width: 100px;
  border-radius: 30px;
`;

export const Wrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 40px;
  border-radius: 0px 0px 40px 0px;
`;

export const Description = styled.div`
  text-align: center;
  width: 100%;
  h1 {
    margin-top: 10px;
    font-size: 1.1rem;
    padding: 0px;
  }
  p {
    margin-top: 6px;
    font-size: 0.9rem;
    opacity: 0.6;
    padding: 6px 10px;
  }
  a {
    text-decoration: none;
  }
`;
