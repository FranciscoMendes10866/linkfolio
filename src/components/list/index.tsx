import React from "react";

import { LinksWrapper, Links, PostsWrapper, Thumb, Gradient } from "./styles";
import { useStore } from "../../store";
import useFetch from '../../hooks/useFetch'

const List: React.FC = () => {
  const { isLinks } = useStore();
  const data = useFetch()
  return (
    <>
      {isLinks ? (
          <LinksWrapper>
          <Links>
            <a href="https://fmendes.vercel.app/" target="_blank">
              <i className='bx bxs-cookie'></i>
              <span>Website</span>
            </a>
            <a href="https://github.com/FranciscoMendes10866" target="_blank">
              <i className="bx bxl-github"></i>
              <span>Github</span>
            </a>
            <a href="https://dev.to/franciscomendes10866" target="_blank">
              <i className="bx bxl-dev-to"></i>
              <span>DEV</span>
            </a>
            <a href="https://www.instagram.com/__.fmendes.__/" target="_blank">
              <i className='bx bxl-instagram-alt' ></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com/channel/UCO6Altk1_udQFrUc62YjN_A" target="_blank">
              <i className='bx bxl-youtube' ></i>
              <span>Youtube</span>
            </a>
          </Links>
        </LinksWrapper>
      ): (
        <PostsWrapper>
        {data.map((el) => (
          <a key={el.id} target="_blank" href={el.url}>
              <Thumb>
                <img src={el.cover_image} alt="article image" />
              </Thumb>
            <footer>
                <p>{el.title}</p>
            </footer>
            <Gradient />
          </a>
        ))}
      </PostsWrapper>
      )}
    </>
  );
};

export default List;
