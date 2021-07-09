import styled from "styled-components";

export const LinksWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
  flex: 1;
  height: 100%;
  position: relative;
  max-width: 500px;
  max-height: 450px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 20px;
  padding-top: 0px;
  max-width: 500px;
  width: 100%;
  margin: auto;
  flex: 1;
  padding-top: 20px;
  a {
    display: block;
    width: 100%;
    padding: 18px 0px;
    text-decoration: none;
    font-size: 1rem;
    color: #0d0d0d;
    border: 2px solid;
    border-color: #0d0d0d;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    margin-bottom: 16px;
    border-radius: 25px;
    position: relative;
    span {
      text-align: center;
      p {
        font-size: 0.8rem;
      }
    }
    i {
      font-size: 1.6rem;
      position: absolute;
      left: 20px;
    }
  }
`;

export const PostsWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: 30px;
  scroll-behavior: smooth;
  max-height: 450px;
  max-width: 500px;
  a {
    width: calc(100% - 40px);
    overflow: hidden;
    box-sizing: border-box;
    display: block;
    margin: 20px;
    position: relative;
    color: #0d0d0d;
    border-radius: 20px;
    box-shadow: 0px 5px 30px 0px rgba(0,0,0, .09);
    margin-top: 20px;
    margin-bottom: 20px;
    footer {
      position: absolute;
      bottom: 15px;
      z-index: 100;
      padding: 10px 20px;
      p {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
`

export const Thumb = styled.div`
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    height: 100%;
  }
`

export const Gradient = styled.div`
  position: absolute;
  bottom: 0px;
  height: 150px;
  width: 100%;
  background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(0,0,0,0.001) 100%);
`