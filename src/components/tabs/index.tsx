import React from "react";

import { Menu, Tab } from "./styles";
import { useStore } from '../../store'

const Tabs: React.FC = () => {
  const { isLinks, setIsLinks } = useStore();
  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLinks(!isLinks);
    console.log(isLinks);
  };
  return (
    <Menu>
      {isLinks ? (
        <>
          <Tab isActive onClick={handleOnClick}>
            Links
          </Tab>
          <Tab onClick={handleOnClick}>
            Blog
          </Tab>
        </>
      ) : (
        <>
          <Tab onClick={handleOnClick}>
            Links
          </Tab>
          <Tab isActive onClick={handleOnClick}>
            Blog
          </Tab>
        </>
      )}
    </Menu>
  );
};

export default Tabs;
